const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

loadDotEnv();

const PORT = Number(process.env.PORT || 3000);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";
const ROOT = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
      return serveFile(res, path.join(ROOT, "index.html"));
    }

    if (req.method === "GET" && url.pathname === "/api/status") {
      return sendJson(res, 200, {
        ok: true,
        apiConfigured: Boolean(OPENAI_API_KEY),
        model: OPENAI_MODEL
      });
    }

    if (req.method === "POST" && url.pathname === "/api/generate-session") {
      const body = await readJsonBody(req);
      if (!OPENAI_API_KEY) {
        return sendJson(res, 200, {
          ok: false,
          fallback: true,
          reason: "Missing OPENAI_API_KEY"
        });
      }

      const session = await generateSession(body);
      return sendJson(res, 200, {
        ok: true,
        session
      });
    }

    if (req.method === "POST" && url.pathname === "/api/grade-answer") {
      const body = await readJsonBody(req);
      if (!OPENAI_API_KEY) {
        return sendJson(res, 200, {
          ok: false,
          fallback: true,
          reason: "Missing OPENAI_API_KEY"
        });
      }

      const grade = await gradeAnswer(body);
      return sendJson(res, 200, {
        ok: true,
        grade
      });
    }

    if (req.method === "POST" && url.pathname === "/api/estimate-level") {
      const body = await readJsonBody(req);
      if (!OPENAI_API_KEY) {
        return sendJson(res, 200, {
          ok: false,
          fallback: true,
          reason: "Missing OPENAI_API_KEY"
        });
      }

      const estimate = await estimateLevel(body);
      return sendJson(res, 200, {
        ok: true,
        estimate
      });
    }

    if (req.method === "GET") {
      return serveStatic(url.pathname, res);
    }

    sendJson(res, 404, { ok: false, error: "Not found" });
  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      error: error.message || "Unexpected server error"
    });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Deutsch Trainer server running on http://localhost:${PORT}`);
});

async function generateSession(body) {
  const schema = {
    name: "german_session",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        summary: { type: "string" },
        focus: {
          type: "array",
          items: { type: "string", enum: ["vocabulary", "grammar", "listening", "speaking", "reading"] }
        },
        points: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              german: { type: "string" },
              english: { type: "string" }
            },
            required: ["german", "english"]
          }
        },
        grammar: {
          type: "object",
          additionalProperties: false,
          properties: {
            title: { type: "string" },
            explanation: { type: "string" },
            examples: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                properties: {
                  german: { type: "string" },
                  english: { type: "string" }
                },
                required: ["german", "english"]
              }
            }
          },
          required: ["title", "explanation", "examples"]
        },
        challenges: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              id: { type: "string" },
              type: { type: "string", enum: ["choice", "text"] },
              prompt: { type: "string" },
              skill: { type: "string", enum: ["vocabulary", "grammar", "listening", "speaking", "reading"] },
              explanation: { type: "string" },
              answer: { type: "string" },
              acceptedAnswers: {
                type: "array",
                items: { type: "string" }
              },
              options: {
                anyOf: [
                  {
                    type: "array",
                    items: { type: "string" }
                  },
                  { type: "null" }
                ]
              },
              placeholder: {
                anyOf: [
                  { type: "string" },
                  { type: "null" }
                ]
              }
            },
            required: [
              "id",
              "type",
              "prompt",
              "skill",
              "explanation",
              "answer",
              "acceptedAnswers",
              "options",
              "placeholder"
            ]
          }
        }
      },
      required: ["title", "summary", "focus", "points", "grammar", "challenges"]
    }
  };

  const instructions = [
    "You are an expert German tutor building one short adaptive learning session.",
    "Stay CEFR-aligned and keep the content realistic and pedagogically sound.",
    "Use the provided base session only as a starting point, then improve and expand it.",
    "Return 8 to 10 challenges total.",
    "At least 3 challenges must be type=text.",
    "For type=choice, provide exactly 4 options and include the correct answer in the options list.",
    "For type=text, set options to null and provide 1 to 3 acceptedAnswers.",
    "Keep all German correct and natural."
  ].join(" ");

  const input = [
    {
      role: "user",
      content: [
        {
          type: "input_text",
          text: JSON.stringify(body)
        }
      ]
    }
  ];

  return callOpenAIStructured({ instructions, input, schema });
}

async function gradeAnswer(body) {
  const schema = {
    name: "german_grade",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        correct: { type: "boolean" },
        score: { type: "integer" },
        feedback: { type: "string" },
        idealAnswer: { type: "string" },
        errorTypes: {
          type: "array",
          items: { type: "string" }
        },
        skillImpact: {
          type: "object",
          additionalProperties: false,
          properties: {
            vocabulary: { type: "integer" },
            grammar: { type: "integer" },
            listening: { type: "integer" },
            speaking: { type: "integer" },
            reading: { type: "integer" }
          },
          required: ["vocabulary", "grammar", "listening", "speaking", "reading"]
        }
      },
      required: ["correct", "score", "feedback", "idealAnswer", "errorTypes", "skillImpact"]
    }
  };

  const instructions = [
    "You are grading a learner's German exercise response.",
    "Grade leniently for punctuation and capitalization, but not for meaning-changing grammar or wrong vocabulary.",
    "If the response is close but flawed, set correct=false and score between 40 and 79.",
    "Return concise feedback that sounds like a tutor, not an examiner.",
    "Skill impact should be small integers between -6 and 6."
  ].join(" ");

  const input = [
    {
      role: "user",
      content: [
        {
          type: "input_text",
          text: JSON.stringify(body)
        }
      ]
    }
  ];

  return callOpenAIStructured({ instructions, input, schema });
}

async function estimateLevel(body) {
  const schema = {
    name: "cefr_estimate",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        overallLevel: { type: "string", enum: ["A1", "A2", "B1", "B2", "C1"] },
        confidence: { type: "integer" },
        summary: { type: "string" },
        bySkill: {
          type: "object",
          additionalProperties: false,
          properties: {
            vocabulary: { type: "string", enum: ["A1", "A2", "B1", "B2", "C1"] },
            grammar: { type: "string", enum: ["A1", "A2", "B1", "B2", "C1"] },
            listening: { type: "string", enum: ["A1", "A2", "B1", "B2", "C1"] },
            speaking: { type: "string", enum: ["A1", "A2", "B1", "B2", "C1"] },
            reading: { type: "string", enum: ["A1", "A2", "B1", "B2", "C1"] }
          },
          required: ["vocabulary", "grammar", "listening", "speaking", "reading"]
        },
        nextFocus: {
          type: "array",
          items: { type: "string", enum: ["vocabulary", "grammar", "listening", "speaking", "reading"] }
        }
      },
      required: ["overallLevel", "confidence", "summary", "bySkill", "nextFocus"]
    }
  };

  const instructions = [
    "You estimate CEFR level from learner evidence.",
    "Be conservative and only raise level when evidence is consistent.",
    "Prefer A1 or A2 if the evidence is sparse.",
    "Return 2 or 3 nextFocus skills."
  ].join(" ");

  const input = [
    {
      role: "user",
      content: [
        {
          type: "input_text",
          text: JSON.stringify(body)
        }
      ]
    }
  ];

  return callOpenAIStructured({ instructions, input, schema });
}

async function callOpenAIStructured({ instructions, input, schema }) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions,
      input,
      text: {
        format: {
          type: "json_schema",
          name: schema.name,
          strict: true,
          schema: schema.schema
        }
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI error ${response.status}: ${errorText}`);
  }

  const json = await response.json();
  const outputText = getOutputText(json);
  if (!outputText) {
    throw new Error("No output text returned by OpenAI");
  }

  return JSON.parse(outputText);
}

function getOutputText(response) {
  for (const item of response.output || []) {
    if (item.type !== "message") {
      continue;
    }

    for (const content of item.content || []) {
      if (content.type === "output_text") {
        return content.text;
      }
    }
  }

  return "";
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (!chunks.length) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function serveStatic(pathname, res) {
  const safePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const absolutePath = path.join(ROOT, path.normalize(safePath));

  if (!absolutePath.startsWith(ROOT)) {
    return sendJson(res, 403, { ok: false, error: "Forbidden" });
  }

  serveFile(res, absolutePath);
}

function serveFile(res, absolutePath) {
  fs.readFile(absolutePath, (error, file) => {
    if (error) {
      sendJson(res, 404, { ok: false, error: "File not found" });
      return;
    }

    const ext = path.extname(absolutePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream"
    });
    res.end(file);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(payload));
}

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  });
}
