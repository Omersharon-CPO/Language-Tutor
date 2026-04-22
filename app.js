const cefrLevels = ["A1", "A2", "B1", "B2", "C1"];
const skillLabels = {
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  listening: "Listening",
  speaking: "Speaking",
  reading: "Reading"
};

const lessons = [
  {
    id: "a1-greetings",
    level: "A1",
    title: "Meeting people and introducing yourself",
    summary: "Build fast recall for names, origins, and simple social questions.",
    focus: ["speaking", "vocabulary", "listening"],
    points: [
      {
        german: "Ich heiße Omar.",
        english: "My name is Omar."
      },
      {
        german: "Ich komme aus Österreich.",
        english: "I come from Austria."
      },
      {
        german: "Freut mich, dich kennenzulernen.",
        english: "Nice to meet you."
      }
    ],
    grammar: {
      title: "Simple statements with ich",
      explanation:
        "At this level, short subject plus verb patterns matter more than complexity. Learn clean sentence chunks that you can say without translating word by word.",
      examples: [
        {
          german: "Ich heiße Anna.",
          english: "My name is Anna."
        },
        {
          german: "Ich komme aus Wien.",
          english: "I come from Vienna."
        }
      ]
    },
    challenges: [
      {
        prompt: "Choose the best translation for: Wie heißt du?",
        options: [
          "What is your name?",
          "Where do you live?",
          "How old are you?",
          "What do you do?"
        ],
        answer: "What is your name?",
        skill: "listening",
        explanation: "This is one of the highest-frequency opening questions in beginner German."
      },
      {
        prompt: 'Complete the sentence: "Ich ___ aus Israel."',
        options: ["komme", "heiße", "bin", "habe"],
        answer: "komme",
        skill: "grammar",
        explanation: "Use komme from kommen when talking about where you come from."
      },
      {
        prompt: "What does Freut mich mean in a first meeting?",
        options: [
          "I am tired",
          "Nice to meet you",
          "Please sit down",
          "See you tomorrow"
        ],
        answer: "Nice to meet you",
        skill: "vocabulary",
        explanation: "It is a short, very useful phrase for polite introductions."
      }
    ]
  },
  {
    id: "a1-cafe",
    level: "A1",
    title: "Ordering at a cafe",
    summary: "Practice polite requests, drinks, and basic questions around food.",
    focus: ["vocabulary", "listening", "speaking"],
    points: [
      {
        german: "Ich hätte gern einen Kaffee.",
        english: "I would like a coffee."
      },
      {
        german: "Noch etwas?",
        english: "Anything else?"
      },
      {
        german: "Das macht fünf Euro.",
        english: "That makes five euros."
      }
    ],
    grammar: {
      title: "Polite requests with hätte gern",
      explanation:
        "German often uses fixed polite chunks in service situations. Learn them as a unit before analyzing every word.",
      examples: [
        {
          german: "Ich hätte gern einen Tee.",
          english: "I would like a tea."
        },
        {
          german: "Ich hätte gern Wasser.",
          english: "I would like water."
        }
      ]
    },
    challenges: [
      {
        prompt: "Choose the best response to a server asking Noch etwas?",
        options: ["Nein, danke.", "Ich bin aus Graz.", "Heute ist Montag.", "Ich verstehe Bahnhof."],
        answer: "Nein, danke.",
        skill: "listening",
        explanation: "This means no, thank you and closes a simple cafe exchange naturally."
      },
      {
        prompt: "What is the best translation of Ich hätte gern einen Kaffee?",
        options: [
          "I drank a coffee",
          "I would like a coffee",
          "I am making coffee",
          "I hate coffee"
        ],
        answer: "I would like a coffee",
        skill: "vocabulary",
        explanation: "This is a polite order formula, not a past tense statement."
      },
      {
        prompt: 'Fill the gap: "Das macht fünf ___."',
        options: ["Euro", "Bahnhof", "sprechen", "bitte"],
        answer: "Euro",
        skill: "speaking",
        explanation: "In shops and cafes, this chunk often appears with a price."
      }
    ]
  },
  {
    id: "a2-routines",
    level: "A2",
    title: "Daily routines and time phrases",
    summary: "Move into fuller sentences about your day, schedule, and habits.",
    focus: ["grammar", "reading", "vocabulary"],
    points: [
      {
        german: "Morgens arbeite ich von zu Hause.",
        english: "In the mornings I work from home."
      },
      {
        german: "Nach dem Mittagessen lerne ich Deutsch.",
        english: "After lunch I study German."
      },
      {
        german: "Am Wochenende treffe ich Freunde.",
        english: "On the weekend I meet friends."
      }
    ],
    grammar: {
      title: "Verb second after a time phrase",
      explanation:
        "Once a time phrase comes first, the verb still stays in second position. This is a core German sentence pattern.",
      examples: [
        {
          german: "Heute lerne ich Deutsch.",
          english: "Today I study German."
        },
        {
          german: "Am Abend lese ich.",
          english: "In the evening I read."
        }
      ]
    },
    challenges: [
      {
        prompt: 'Choose the correct sentence order: "Heute / ich / Deutsch / lerne"',
        options: [
          "Heute ich lerne Deutsch.",
          "Heute lerne ich Deutsch.",
          "Ich heute lerne Deutsch.",
          "Deutsch lerne heute ich."
        ],
        answer: "Heute lerne ich Deutsch.",
        skill: "grammar",
        explanation: "The conjugated verb holds second position."
      },
      {
        prompt: "What does Am Wochenende usually mean?",
        options: [
          "At work",
          "On the weekend",
          "In the morning",
          "Last month"
        ],
        answer: "On the weekend",
        skill: "vocabulary",
        explanation: "It is a high-frequency time phrase for daily life conversations."
      },
      {
        prompt: "Choose the best translation: Nach dem Mittagessen lerne ich Deutsch.",
        options: [
          "I eat German after lunch.",
          "After lunch I study German.",
          "I studied at lunchtime yesterday.",
          "Lunch is German today."
        ],
        answer: "After lunch I study German.",
        skill: "reading",
        explanation: "A2 work often depends on recognizing full sentence meaning, not just isolated words."
      }
    ]
  },
  {
    id: "a2-past",
    level: "A2",
    title: "Talking about past experiences",
    summary: "Use simple narrative phrases to say what happened, where you went, and what you did.",
    focus: ["grammar", "reading", "listening"],
    points: [
      {
        german: "Ich war gestern im Kino.",
        english: "I was at the cinema yesterday."
      },
      {
        german: "Wir haben lange gesprochen.",
        english: "We talked for a long time."
      },
      {
        german: "Danach bin ich nach Hause gegangen.",
        english: "After that I went home."
      }
    ],
    grammar: {
      title: "Perfect tense with haben and sein",
      explanation:
        "Many past actions use haben plus a participle, while movement and change-of-state verbs often use sein.",
      examples: [
        {
          german: "Ich habe gearbeitet.",
          english: "I worked."
        },
        {
          german: "Ich bin gefahren.",
          english: "I went by vehicle."
        }
      ]
    },
    challenges: [
      {
        prompt: 'Choose the best helper verb: "Ich ___ nach Hause gegangen."',
        options: ["habe", "bin", "werde", "hatte"],
        answer: "bin",
        skill: "grammar",
        explanation: "Movement verbs like gehen often take sein in the perfect tense."
      },
      {
        prompt: "What does gestern mean?",
        options: ["today", "tomorrow", "yesterday", "always"],
        answer: "yesterday",
        skill: "listening",
        explanation: "Time words matter because they completely shift meaning."
      },
      {
        prompt: "Choose the best translation: Wir haben lange gesprochen.",
        options: [
          "We spoke for a long time.",
          "We are speaking tomorrow.",
          "We speak every week.",
          "We wrote a long message."
        ],
        answer: "We spoke for a long time.",
        skill: "reading",
        explanation: "Recognize the perfect tense chunk haben gesprochen."
      }
    ]
  },
  {
    id: "b1-opinions",
    level: "B1",
    title: "Sharing opinions and preferences",
    summary: "Start giving reasons, agreement, and contrast in everyday discussions.",
    focus: ["speaking", "reading", "grammar"],
    points: [
      {
        german: "Ich denke, dass das eine gute Idee ist.",
        english: "I think that this is a good idea."
      },
      {
        german: "Einerseits ist es praktisch, andererseits ist es teuer.",
        english: "On one hand it is practical, on the other hand it is expensive."
      },
      {
        german: "Meiner Meinung nach brauchen wir mehr Zeit.",
        english: "In my opinion we need more time."
      }
    ],
    grammar: {
      title: "Subordinate clauses with dass",
      explanation:
        "At B1, you begin linking ideas. In a dass clause, the conjugated verb moves to the end.",
      examples: [
        {
          german: "Ich glaube, dass er heute kommt.",
          english: "I think that he is coming today."
        },
        {
          german: "Sie sagt, dass das wichtig ist.",
          english: "She says that this is important."
        }
      ]
    },
    challenges: [
      {
        prompt: 'Choose the correct clause: "Ich denke, dass ..."',
        options: [
          "das ist wichtig",
          "wichtig ist das",
          "das wichtig ist",
          "ist das wichtig"
        ],
        answer: "das wichtig ist",
        skill: "grammar",
        explanation: "The verb goes to the end in the subordinate clause."
      },
      {
        prompt: "What does Meiner Meinung nach signal?",
        options: [
          "A question about transport",
          "A personal opinion",
          "A past tense story",
          "A request for help"
        ],
        answer: "A personal opinion",
        skill: "speaking",
        explanation: "This phrase helps you frame your view clearly."
      },
      {
        prompt: "Choose the best translation: andererseits ist es teuer.",
        options: [
          "Moreover, it is fast.",
          "On the other hand, it is expensive.",
          "Actually, it is already paid.",
          "At the same time, it is easy."
        ],
        answer: "On the other hand, it is expensive.",
        skill: "reading",
        explanation: "Contrast markers are essential at the intermediate stage."
      }
    ]
  },
  {
    id: "b1-problems",
    level: "B1",
    title: "Explaining problems and asking for help",
    summary: "Handle service situations, issues, and simple problem-solving in German.",
    focus: ["listening", "speaking", "vocabulary"],
    points: [
      {
        german: "Es gibt ein Problem mit meiner Buchung.",
        english: "There is a problem with my booking."
      },
      {
        german: "Könnten Sie mir bitte helfen?",
        english: "Could you please help me?"
      },
      {
        german: "Ich habe eine Rechnung bekommen, aber sie ist falsch.",
        english: "I received an invoice, but it is wrong."
      }
    ],
    grammar: {
      title: "Polite requests in service situations",
      explanation:
        "B1 speakers need calm, polite structures that work in real life when something goes wrong.",
      examples: [
        {
          german: "Können Sie das bitte erklären?",
          english: "Could you please explain that?"
        },
        {
          german: "Ich brauche Hilfe mit diesem Formular.",
          english: "I need help with this form."
        }
      ]
    },
    challenges: [
      {
        prompt: "What is the most appropriate sentence when a booking is wrong?",
        options: [
          "Es gibt ein Problem mit meiner Buchung.",
          "Ich esse gern Apfelstrudel.",
          "Heute ist das Wetter schön.",
          "Woher kommst du?"
        ],
        answer: "Es gibt ein Problem mit meiner Buchung.",
        skill: "speaking",
        explanation: "It is direct, polite, and useful in hotels, flights, and reservations."
      },
      {
        prompt: "Choose the best translation of Rechnung.",
        options: ["bill or invoice", "appointment", "platform", "conversation"],
        answer: "bill or invoice",
        skill: "vocabulary",
        explanation: "This word appears often in customer service and admin contexts."
      },
      {
        prompt: "What does Könnten Sie mir bitte helfen? mean?",
        options: [
          "Can I leave now?",
          "Could you please help me?",
          "Did you already call me?",
          "Would you like some coffee?"
        ],
        answer: "Could you please help me?",
        skill: "listening",
        explanation: "It is a polite service phrase worth mastering as a whole chunk."
      }
    ]
  },
  {
    id: "b2-debate",
    level: "B2",
    title: "Nuance, argument, and contrast",
    summary: "Work with more precise contrast, argument structure, and abstract phrasing.",
    focus: ["grammar", "reading", "speaking"],
    points: [
      {
        german: "Zwar ist die Idee interessant, dennoch bleibt sie riskant.",
        english: "The idea is interesting, yet it remains risky."
      },
      {
        german: "Ich würde argumentieren, dass wir langfristig profitieren.",
        english: "I would argue that we benefit in the long term."
      },
      {
        german: "Entscheidend ist, wie schnell wir reagieren.",
        english: "What is decisive is how quickly we respond."
      }
    ],
    grammar: {
      title: "Advanced connectors and sentence framing",
      explanation:
        "B2 progression depends on controlling nuanced connectors and packaging ideas into more formal structures.",
      examples: [
        {
          german: "Obwohl es teuer ist, lohnt es sich.",
          english: "Although it is expensive, it is worth it."
        },
        {
          german: "Entscheidend ist, dass wir flexibel bleiben.",
          english: "What matters is that we stay flexible."
        }
      ]
    },
    challenges: [
      {
        prompt: "Choose the connector pair that signals contrast:",
        options: [
          "zwar ... dennoch",
          "weil ... deshalb",
          "wenn ... dann",
          "ob ... oder"
        ],
        answer: "zwar ... dennoch",
        skill: "grammar",
        explanation: "This pair gives formal, controlled contrast at a higher level."
      },
      {
        prompt: "What does langfristig most closely mean?",
        options: ["shortly", "in the long term", "weekly", "unexpectedly"],
        answer: "in the long term",
        skill: "vocabulary",
        explanation: "This is common in strategy and argumentation."
      },
      {
        prompt: "Choose the best translation: Entscheidend ist, wie schnell wir reagieren.",
        options: [
          "We reacted faster than expected.",
          "It is important how quickly we respond.",
          "The decision was made yesterday.",
          "We should avoid reacting."
        ],
        answer: "It is important how quickly we respond.",
        skill: "reading",
        explanation: "The sentence frames what matters before introducing the detail."
      }
    ]
  },
  {
    id: "b2-formal",
    level: "B2",
    title: "Formal requests and written communication",
    summary: "Practice language for messages, applications, and clear professional requests.",
    focus: ["reading", "grammar", "speaking"],
    points: [
      {
        german: "Ich möchte mich nach dem aktuellen Stand erkundigen.",
        english: "I would like to inquire about the current status."
      },
      {
        german: "Vielen Dank im Voraus für Ihre Rückmeldung.",
        english: "Many thanks in advance for your reply."
      },
      {
        german: "Falls weitere Unterlagen erforderlich sind, sende ich sie gern.",
        english: "If further documents are required, I will gladly send them."
      }
    ],
    grammar: {
      title: "Formal hedging and conditional phrasing",
      explanation:
        "At B2, written German becomes more indirect and polished. Phrases should sound controlled, not abrupt.",
      examples: [
        {
        german: "Ich wäre Ihnen dankbar, wenn ...",
          english: "I would be grateful if ..."
        },
        {
          german: "Falls Sie Fragen haben, melden Sie sich gern.",
          english: "If you have questions, feel free to get in touch."
        }
      ]
    },
    challenges: [
      {
        prompt: "Which sentence sounds most appropriate in a formal email?",
        options: [
          "Was ist los mit meiner Anfrage?",
          "Ich möchte mich nach dem aktuellen Stand erkundigen.",
          "Antworten Sie jetzt sofort.",
          "Hey, gibt es Neuigkeiten?"
        ],
        answer: "Ich möchte mich nach dem aktuellen Stand erkundigen.",
        skill: "speaking",
        explanation: "This is indirect and professional rather than abrupt."
      },
      {
        prompt: "What does im Voraus mean here?",
        options: ["in advance", "at the office", "without warning", "last week"],
        answer: "in advance",
        skill: "vocabulary",
        explanation: "A frequent formal phrase in polite requests."
      },
      {
        prompt: "Choose the best translation: Falls weitere Unterlagen erforderlich sind ...",
        options: [
          "If more documents are required ...",
          "The documents arrived yesterday ...",
          "I already refused the documents ...",
          "The application is no longer valid ..."
        ],
        answer: "If more documents are required ...",
        skill: "reading",
        explanation: "B2 learners need comfort with formal conditional structures."
      }
    ]
  }
];

const qualificationTests = {
  A1: {
    id: "qual-a1",
    level: "A1",
    title: "A1 qualification test",
    summary: "Checks survival German for introductions, polite requests, and simple comprehension.",
    focus: ["vocabulary", "grammar", "listening", "speaking"],
    challenges: [
      {
        prompt: "What is the best translation of Woher kommst du?",
        options: ["How old are you?", "Where are you from?", "Where do you work?", "What are you doing?"],
        answer: "Where are you from?",
        skill: "listening",
        explanation: "A1 qualification needs confident handling of core social questions."
      },
      {
        prompt: 'Choose the correct phrase: "Ich ___ Omar."',
        options: ["heiße", "komme", "binne", "habt"],
        answer: "heiße",
        skill: "grammar",
        explanation: "Basic self-introduction should feel automatic before advancing."
      },
      {
        prompt: "What does Das macht fünf Euro mean?",
        options: [
          "I have five euros.",
          "That costs five euros.",
          "I found five euros.",
          "Please give me five euros."
        ],
        answer: "That costs five euros.",
        skill: "vocabulary",
        explanation: "Beginner milestones include common store and cafe language."
      },
      {
        prompt: "Choose the most natural polite response after receiving a coffee.",
        options: ["Bitte sehr.", "Nein, danke.", "Danke schön.", "Wo ist der Bahnhof?"],
        answer: "Danke schön.",
        skill: "speaking",
        explanation: "A1 speakers should manage basic politeness smoothly."
      }
    ]
  },
  A2: {
    id: "qual-a2",
    level: "A2",
    title: "A2 qualification test",
    summary: "Checks sentence building around routines, time, and simple past experiences.",
    focus: ["grammar", "reading", "listening"],
    challenges: [
      {
        prompt: 'Choose the correct order: "Morgen / ich / arbeite / im Büro"',
        options: [
          "Morgen arbeite ich im Büro.",
          "Ich morgen arbeite im Büro.",
          "Morgen ich arbeite im Büro.",
          "Arbeite morgen ich im Büro."
        ],
        answer: "Morgen arbeite ich im Büro.",
        skill: "grammar",
        explanation: "Verb-second control is central for A2 readiness."
      },
      {
        prompt: "What does gestern signal?",
        options: ["future", "past", "condition", "question"],
        answer: "past",
        skill: "listening",
        explanation: "A2 learners need reliable understanding of basic timeline markers."
      },
      {
        prompt: "Choose the best translation: Ich bin nach Hause gegangen.",
        options: [
          "I am going home soon.",
          "I went home.",
          "I stayed at home.",
          "I left the house key."
        ],
        answer: "I went home.",
        skill: "reading",
        explanation: "Past tense comprehension should be stable before moving upward."
      },
      {
        prompt: 'Choose the correct helper verb: "Wir ___ lange gesprochen."',
        options: ["sind", "haben", "werden", "waren"],
        answer: "haben",
        skill: "grammar",
        explanation: "This verifies common perfect tense patterns."
      }
    ]
  },
  B1: {
    id: "qual-b1",
    level: "B1",
    title: "B1 qualification test",
    summary: "Checks connected speech, opinions, and practical problem-solving language.",
    focus: ["speaking", "grammar", "reading", "listening"],
    challenges: [
      {
        prompt: 'Choose the correct completion: "Ich glaube, dass ..."',
        options: ["es gut ist", "ist es gut", "gut ist es", "es ist gut"],
        answer: "es gut ist",
        skill: "grammar",
        explanation: "Subordinate clause control is important at B1."
      },
      {
        prompt: "What does Meiner Meinung nach express?",
        options: ["A schedule", "A complaint", "An opinion", "A direction"],
        answer: "An opinion",
        skill: "speaking",
        explanation: "B1 speakers should introduce their own view clearly."
      },
      {
        prompt: "Choose the best phrase in a service problem:",
        options: [
          "Es gibt ein Problem mit meiner Buchung.",
          "Ich trinke jeden Morgen Kaffee.",
          "Heute regnet es vielleicht.",
          "Ich kann nicht lesen."
        ],
        answer: "Es gibt ein Problem mit meiner Buchung.",
        skill: "listening",
        explanation: "Practical independence is part of the B1 threshold."
      },
      {
        prompt: "What is the best translation of andererseits?",
        options: ["finally", "on the other hand", "already", "on purpose"],
        answer: "on the other hand",
        skill: "reading",
        explanation: "Contrast handling supports fuller, connected expression."
      }
    ]
  },
  B2: {
    id: "qual-b2",
    level: "B2",
    title: "B2 qualification test",
    summary: "Checks nuanced argument, formal phrasing, and more controlled comprehension.",
    focus: ["grammar", "reading", "speaking"],
    challenges: [
      {
        prompt: "Which pair best signals formal contrast?",
        options: ["zwar ... dennoch", "weil ... dann", "wenn ... obwohl", "oder ... weder"],
        answer: "zwar ... dennoch",
        skill: "grammar",
        explanation: "B2 progression requires stronger control of nuanced connectors."
      },
      {
        prompt: "What does im Voraus mean in formal writing?",
        options: ["in public", "in advance", "at first", "for now"],
        answer: "in advance",
        skill: "reading",
        explanation: "This phrase appears often in professional communication."
      },
      {
        prompt: "Which sentence is most suitable in a formal status request?",
        options: [
          "Ich möchte mich nach dem aktuellen Stand erkundigen.",
          "Was ist los mit meiner Sache?",
          "Antworten Sie mir schnell.",
          "Hallo, irgendwas Neues?"
        ],
        answer: "Ich möchte mich nach dem aktuellen Stand erkundigen.",
        skill: "speaking",
        explanation: "B2 requires register control as well as correctness."
      },
      {
        prompt: "Choose the best translation: Entscheidend ist, wie schnell wir reagieren.",
        options: [
          "We reacted too quickly.",
          "The decision is already made.",
          "What matters is how quickly we respond.",
          "It depends on the budget."
        ],
        answer: "What matters is how quickly we respond.",
        skill: "reading",
        explanation: "Understanding abstract sentence framing is part of B2 reading skill."
      }
    ]
  }
};

const storageKey = "deutsch-trainer-adaptive-progress";
const learnerStorageKey = "deutsch-trainer-learner";
const todayKey = new Date().toISOString().slice(0, 10);

normalizeContentLibraries();

const defaultProgress = {
  streak: 1,
  lastStudyDate: todayKey,
  totalAnswered: 0,
  totalCorrect: 0,
  aiEstimate: null,
  completedLessons: {},
  qualification: {},
  lessonHistory: [],
  skillScores: {
    vocabulary: 52,
    grammar: 50,
    listening: 51,
    speaking: 49,
    reading: 50
  }
};

const defaultLearner = {
  email: "",
  name: ""
};

const state = {
  learner: loadLearnerIdentity(),
  progress: loadProgress(),
  recommendation: null,
  activeSession: null,
  sessionFeedbackLocked: false,
  lastResult: null,
  ui: {
    generatingSession: false,
    gradingAnswer: false,
    estimatingLevel: false,
    authBusy: false,
    authStep: "email",
    authEmailDraft: "",
    challengeStatusTimerId: null,
    challengeStatusStartedAt: null,
    challengeStatusBaseText: ""
  },
  api: {
    reachable: false,
    configured: false,
    model: null,
    badgeText: "AI status checking...",
    badgeTone: "muted"
  }
};

const els = {
  aiStatus: document.getElementById("ai-status"),
  learnerGreeting: document.getElementById("learner-greeting"),
  learnerIdentity: document.getElementById("learner-identity"),
  currentBand: document.getElementById("current-band"),
  streakCount: document.getElementById("streak-count"),
  accuracyCount: document.getElementById("accuracy-count"),
  recommendedTitle: document.getElementById("recommended-title"),
  recommendedPill: document.getElementById("recommended-pill"),
  recommendedDescription: document.getElementById("recommended-description"),
  recommendedReason: document.getElementById("recommended-reason"),
  recommendedFocus: document.getElementById("recommended-focus"),
  strongSpots: document.getElementById("strong-spots"),
  weakSpots: document.getElementById("weak-spots"),
  levelRoadmap: document.getElementById("level-roadmap"),
  qualificationList: document.getElementById("qualification-list"),
  historyList: document.getElementById("history-list"),
  sessionHeading: document.getElementById("session-heading"),
  sessionPill: document.getElementById("session-pill"),
  sessionEmpty: document.getElementById("session-empty"),
  sessionActive: document.getElementById("session-active"),
  sessionResult: document.getElementById("session-result"),
  sessionDescription: document.getElementById("session-description"),
  sessionFocus: document.getElementById("session-focus"),
  sessionPoints: document.getElementById("session-points"),
  grammarTitle: document.getElementById("grammar-title"),
  grammarExplanation: document.getElementById("grammar-explanation"),
  grammarExamples: document.getElementById("grammar-examples"),
  challengePrompt: document.getElementById("challenge-prompt"),
  challengeSkill: document.getElementById("challenge-skill"),
  lessonProgressBar: document.getElementById("lesson-progress-bar"),
  lessonProgressNote: document.getElementById("lesson-progress-note"),
  branchPanel: document.getElementById("branch-panel"),
  branchNote: document.getElementById("branch-note"),
  branchList: document.getElementById("branch-list"),
  challengeMode: document.getElementById("challenge-mode"),
  remediationStatus: document.getElementById("remediation-status"),
  challengeProgress: document.getElementById("challenge-progress"),
  challengeOptions: document.getElementById("challenge-options"),
  challengeForm: document.getElementById("challenge-form"),
  challengeInput: document.getElementById("challenge-input"),
  submitAnswer: document.getElementById("submit-answer"),
  challengeStatus: document.getElementById("challenge-status"),
  challengeFeedback: document.getElementById("challenge-feedback"),
  nextChallenge: document.getElementById("next-challenge"),
  resultTitle: document.getElementById("result-title"),
  resultSummary: document.getElementById("result-summary"),
  resultStrong: document.getElementById("result-strong"),
  resultWeak: document.getElementById("result-weak"),
  resultPrimary: document.getElementById("result-primary"),
  resultSecondary: document.getElementById("result-secondary"),
  studyNow: document.getElementById("study-now"),
  startRecommended: document.getElementById("start-recommended"),
  resetProgress: document.getElementById("reset-progress"),
  switchLearner: document.getElementById("switch-learner"),
  authOverlay: document.getElementById("auth-overlay"),
  authCopy: document.getElementById("auth-copy"),
  authEmailForm: document.getElementById("auth-email-form"),
  authEmailInput: document.getElementById("auth-email-input"),
  authEmailFeedback: document.getElementById("auth-email-feedback"),
  authEmailSubmit: document.getElementById("auth-email-submit"),
  authNameForm: document.getElementById("auth-name-form"),
  authEmailPreview: document.getElementById("auth-email-preview"),
  authNameInput: document.getElementById("auth-name-input"),
  authNameFeedback: document.getElementById("auth-name-feedback"),
  authNameSubmit: document.getElementById("auth-name-submit"),
  authBack: document.getElementById("auth-back")
};

init();

async function init() {
  bindEvents();
  await hydrateApiStatus();
  await hydrateLearner();
  state.progress = updateStreak(state.progress);
  if (state.learner.email) {
    saveProgress();
  }
  state.recommendation = getRecommendation();
  renderAll();
}

function bindEvents() {
  els.studyNow.addEventListener("click", startRecommendedSession);
  els.startRecommended.addEventListener("click", startRecommendedSession);
  els.nextChallenge.addEventListener("click", advanceChallenge);
  els.challengeForm.addEventListener("submit", handleTextChallengeSubmit);
  els.resultPrimary.addEventListener("click", handleResultPrimary);
  els.resultSecondary.addEventListener("click", handleResultSecondary);
  els.resetProgress.addEventListener("click", () => {
    void resetLearnerProgress();
  });
  els.switchLearner.addEventListener("click", () => {
    switchLearner();
  });
  els.authEmailForm.addEventListener("submit", handleEmailLookupSubmit);
  els.authNameForm.addEventListener("submit", handleNameRegistrationSubmit);
  els.authBack.addEventListener("click", () => {
    state.ui.authStep = "email";
    state.ui.authEmailDraft = "";
    els.authNameInput.value = "";
    els.authNameFeedback.textContent = "";
    els.authNameFeedback.className = "feedback";
    renderAuth();
    window.setTimeout(() => els.authEmailInput.focus(), 0);
  });
}

function normalizeContentLibraries() {
  lessons.forEach((lesson) => {
    lesson.challenges = buildExpandedChallengeSet(lesson);
  });

  Object.values(qualificationTests).forEach((test) => {
    test.challenges = buildExpandedChallengeSet(test);
  });
}

function buildExpandedChallengeSet(content) {
  const baseChallenges = (content.challenges || []).map((challenge) => ({
    type: challenge.type || "choice",
    ...challenge
  }));
  const expanded = [...baseChallenges];
  const supportExamples = [...(content.points || []), ...((content.grammar && content.grammar.examples) || [])];

  supportExamples.slice(0, 2).forEach((example, index) => {
    if (!example.german || !example.english) {
      return;
    }

    expanded.push({
      id: `${content.id}-typed-${index}`,
      type: "text",
      prompt: `Type the German sentence for: ${example.english}`,
      acceptedAnswers: [example.german],
      answer: example.german,
      skill: content.focus?.[index % content.focus.length] || "speaking",
      explanation: "Typing the full sentence helps move the phrase from recognition into recall.",
      placeholder: "Type the German phrase here"
    });
  });

  if (supportExamples[0]?.german) {
    const keyword = pickKeyword(supportExamples[0].german);
    expanded.push({
      id: `${content.id}-cloze`,
      type: "text",
      prompt: `Type the missing word: ${supportExamples[0].german.replace(keyword, "____")}`,
      acceptedAnswers: [keyword],
      answer: keyword,
      skill: content.focus?.[0] || "grammar",
      explanation: "This checks if the most important word in the phrase is becoming automatic.",
      placeholder: "One word"
    });
  }

  if (expanded.length < 5) {
    baseChallenges.slice(0, 2).forEach((challenge, index) => {
      expanded.push({
        id: `${content.id}-answer-${index}`,
        type: "text",
        prompt: `Type the correct answer for: ${challenge.prompt}`,
        acceptedAnswers: [challenge.answer],
        answer: challenge.answer,
        skill: challenge.skill,
        explanation: "This follow-up turns recognition into active recall.",
        placeholder: "Type the best answer"
      });
    });
  }

  return dedupeChallenges(expanded);
}

function dedupeChallenges(challenges) {
  const seen = new Set();
  return challenges.filter((challenge) => {
    const key = `${challenge.prompt}-${challenge.answer || challenge.acceptedAnswers?.[0] || ""}`;
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function pickKeyword(sentence) {
  const tokens = sentence
    .replace(/[.,!?]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .sort((left, right) => right.length - left.length);
  return tokens[0] || sentence;
}

function loadProgress() {
  const raw = localStorage.getItem(storageKey);

  if (!raw) {
    return structuredClone(defaultProgress);
  }

  try {
    return normalizeProgress(JSON.parse(raw));
  } catch {
    return structuredClone(defaultProgress);
  }
}

function normalizeProgress(parsed) {
  return {
    ...structuredClone(defaultProgress),
    ...(parsed || {}),
    aiEstimate: parsed?.aiEstimate || null,
    completedLessons: parsed?.completedLessons || {},
    qualification: parsed?.qualification || {},
    lessonHistory: Array.isArray(parsed?.lessonHistory) ? parsed.lessonHistory : [],
    skillScores: {
      ...defaultProgress.skillScores,
      ...(parsed?.skillScores || {})
    }
  };
}

function loadLearnerIdentity() {
  const raw = localStorage.getItem(learnerStorageKey);
  if (!raw) {
    return { ...defaultLearner };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      email: normalizeEmail(parsed.email),
      name: normalizeName(parsed.name)
    };
  } catch {
    return { ...defaultLearner };
  }
}

async function hydrateApiStatus() {
  if (window.location.protocol === "file:") {
    state.api = {
      reachable: false,
      configured: false,
      model: null,
      badgeText: "",
      badgeTone: "muted"
    };
    setAIBadge("Open the app through the local server to enable AI features.", "muted");
    return;
  }

  try {
    const response = await fetch("/api/status");
    if (!response.ok) {
      throw new Error("Status request failed");
    }

    const json = await response.json();
    state.api = {
      reachable: true,
      configured: Boolean(json.apiConfigured),
      model: json.model || null,
      badgeText: "",
      badgeTone: "muted"
    };
    if (json.apiConfigured) {
      setAIBadge(`AI key loaded. Model: ${json.model || "configured"}.`, "warning");
    } else {
      setAIBadge("AI not configured. Add OPENAI_API_KEY to enable live generation.", "muted");
    }
  } catch {
    state.api = {
      reachable: false,
      configured: false,
      model: null,
      badgeText: "",
      badgeTone: "muted"
    };
    setAIBadge("AI backend unreachable. The app is running in local fallback mode.", "muted");
  }
}

async function hydrateLearner() {
  if (!state.learner.email || window.location.protocol === "file:") {
    return;
  }

  state.ui.authBusy = true;
  renderAuth();

  try {
    const result = await lookupLearner(state.learner.email);
    if (!result?.exists || !result.learner) {
      state.learner = { ...defaultLearner };
      state.progress = structuredClone(defaultProgress);
      localStorage.removeItem(storageKey);
      saveLearnerIdentity();
      return;
    }

    state.learner = {
      email: normalizeEmail(result.learner.email),
      name: normalizeName(result.learner.name)
    };
    saveLearnerIdentity();
    state.progress = normalizeProgress(result.learner.progress);
    saveProgress();
  } catch {
    setAIBadge("The app could not load learner memory. Local progress is still available in this browser.", "warning");
  } finally {
    state.ui.authBusy = false;
  }
}

async function handleEmailLookupSubmit(event) {
  event.preventDefault();
  const email = normalizeEmail(els.authEmailInput.value);

  if (!email) {
    els.authEmailFeedback.textContent = "Enter a valid email address first.";
    els.authEmailFeedback.className = "feedback warning";
    return;
  }

  state.ui.authBusy = true;
  els.authEmailFeedback.textContent = "";
  els.authEmailFeedback.className = "feedback";
  renderAuth();

  try {
    const result = await lookupLearner(email);
    if (result?.exists && result.learner) {
      state.learner = {
        email: normalizeEmail(result.learner.email),
        name: normalizeName(result.learner.name)
      };
      state.progress = normalizeProgress(result.learner.progress);
      saveLearnerIdentity();
      saveProgress();
      return;
    }

    state.ui.authStep = "name";
    state.ui.authEmailDraft = email;
    els.authNameFeedback.textContent = "";
    els.authNameFeedback.className = "feedback";
    renderAuth();
    window.setTimeout(() => els.authNameInput.focus(), 0);
  } catch {
    els.authEmailFeedback.textContent = "I could not check that email right now. Please try again.";
    els.authEmailFeedback.className = "feedback warning";
  } finally {
    state.ui.authBusy = false;
    state.recommendation = getRecommendation();
    renderAll();
    renderAuth();
  }
}

async function handleNameRegistrationSubmit(event) {
  event.preventDefault();
  const email = normalizeEmail(state.ui.authEmailDraft);
  const name = normalizeName(els.authNameInput.value);

  if (!name) {
    els.authNameFeedback.textContent = "Add your name so I can create the learner profile.";
    els.authNameFeedback.className = "feedback warning";
    return;
  }

  state.ui.authBusy = true;
  els.authNameFeedback.textContent = "";
  els.authNameFeedback.className = "feedback";
  renderAuth();

  try {
    const learner = await registerLearner(email, name);
    state.learner = {
      email: normalizeEmail(learner.email),
      name: normalizeName(learner.name)
    };
    state.progress = normalizeProgress(learner.progress);
    state.ui.authStep = "email";
    state.ui.authEmailDraft = "";
    els.authEmailInput.value = state.learner.email;
    els.authNameInput.value = "";
    saveLearnerIdentity();
    saveProgress();
  } catch {
    els.authNameFeedback.textContent = "I could not create that learner profile right now. Please try again.";
    els.authNameFeedback.className = "feedback warning";
  } finally {
    state.ui.authBusy = false;
    state.recommendation = getRecommendation();
    renderAll();
    renderAuth();
  }
}

async function resetLearnerProgress() {
  state.progress = structuredClone(defaultProgress);
  state.recommendation = getRecommendation();
  state.activeSession = null;
  state.lastResult = null;
  saveProgress();
  renderAll();
  alert("Learner profile reset.");
}

function switchLearner() {
  if (state.activeSession && !window.confirm("Switching learners will close the current session. Continue?")) {
    return;
  }

  state.learner = { ...defaultLearner };
  state.progress = structuredClone(defaultProgress);
  state.recommendation = getRecommendation();
  state.activeSession = null;
  state.lastResult = null;
  state.ui.authStep = "email";
  state.ui.authEmailDraft = "";
  els.authEmailInput.value = "";
  els.authNameInput.value = "";
  els.authEmailFeedback.textContent = "";
  els.authNameFeedback.textContent = "";
  saveLearnerIdentity();
  localStorage.removeItem(storageKey);
  renderAll();
  window.setTimeout(() => els.authEmailInput.focus(), 0);
}

function setAIBadge(text, tone) {
  state.api.badgeText = text;
  state.api.badgeTone = tone;
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
  if (state.learner.email) {
    void persistLearnerProfile();
  }
}

function saveLearnerIdentity() {
  if (!state.learner.email) {
    localStorage.removeItem(learnerStorageKey);
    return;
  }

  localStorage.setItem(learnerStorageKey, JSON.stringify(state.learner));
}

function updateStreak(progress) {
  if (progress.lastStudyDate === todayKey) {
    return progress;
  }

  const lastStudy = new Date(progress.lastStudyDate);
  const today = new Date(todayKey);
  const dayDifference = Math.round((today - lastStudy) / 86400000);

  if (dayDifference === 1) {
    progress.streak += 1;
  } else if (dayDifference > 1 || Number.isNaN(dayDifference)) {
    progress.streak = 1;
  }

  progress.lastStudyDate = todayKey;
  return progress;
}

function renderAll() {
  renderAIStatus();
  renderLearnerHeader();
  renderAuth();
  renderSnapshot();
  renderRecommendation();
  renderSkillSpots();
  renderRoadmap();
  renderQualificationList();
  renderHistory();
  renderSession();
}

function renderAIStatus() {
  els.aiStatus.textContent = state.api.badgeText;
  els.aiStatus.className = `ai-status ai-status-${state.api.badgeTone}`;
  const lessonButtonsDisabled = state.ui.generatingSession || !state.learner.email || state.ui.authBusy;
  els.studyNow.disabled = lessonButtonsDisabled;
  els.startRecommended.disabled = lessonButtonsDisabled;
  els.resetProgress.disabled = !state.learner.email || state.ui.authBusy;
  els.switchLearner.disabled = state.ui.authBusy;
  els.studyNow.textContent = state.ui.generatingSession
    ? "Generating AI lesson..."
    : state.learner.email
      ? "Start recommended lesson"
      : "Enter email to start";
  els.startRecommended.textContent = state.ui.generatingSession
    ? "Generating session..."
    : state.learner.email
      ? "Begin session"
      : "Enter email first";
}

function renderLearnerHeader() {
  if (state.learner.name) {
    els.learnerGreeting.textContent = `Welcome back, ${state.learner.name}`;
    els.learnerIdentity.textContent = state.learner.email;
    return;
  }

  els.learnerGreeting.textContent = "Welcome to your German course";
  els.learnerIdentity.textContent = "Sign in with an email to save your progress and continue across sessions.";
}

function renderAuth() {
  const showAuth = !state.learner.email;
  els.authOverlay.classList.toggle("hidden", !showAuth);
  if (!showAuth) {
    return;
  }

  const isEmailStep = state.ui.authStep === "email";
  els.authEmailForm.classList.toggle("hidden", !isEmailStep);
  els.authNameForm.classList.toggle("hidden", isEmailStep);
  els.authCopy.textContent = isEmailStep
    ? "Enter your email to load your saved path or create a new learner profile."
    : "This email is new. Add your name and the app will create a learner profile for you.";
  els.authEmailInput.disabled = state.ui.authBusy;
  els.authEmailSubmit.disabled = state.ui.authBusy;
  els.authNameInput.disabled = state.ui.authBusy;
  els.authNameSubmit.disabled = state.ui.authBusy;
  els.authBack.disabled = state.ui.authBusy;
  els.authEmailSubmit.textContent = state.ui.authBusy && isEmailStep ? "Checking..." : "Continue";
  els.authNameSubmit.textContent = state.ui.authBusy && !isEmailStep ? "Creating..." : "Create learner";
  els.authEmailPreview.textContent = state.ui.authEmailDraft ? `Email: ${state.ui.authEmailDraft}` : "";
}

function renderSnapshot() {
  const accuracy = state.progress.totalAnswered
    ? Math.round((state.progress.totalCorrect / state.progress.totalAnswered) * 100)
    : 0;

  els.currentBand.textContent = getCurrentBand();
  els.streakCount.textContent = state.progress.streak;
  els.accuracyCount.textContent = `${accuracy}%`;
}

function renderRecommendation() {
  const recommendation = state.recommendation;
  const aiNote = state.api.configured
    ? ` Live generation is on with ${state.api.model || "an OpenAI model"}.`
    : window.location.protocol === "file:"
      ? " Open the app through the local server to enable live AI lessons."
      : " Add OPENAI_API_KEY to enable live AI lessons and grading.";
  els.recommendedTitle.textContent = recommendation.title;
  els.recommendedPill.textContent =
    recommendation.kind === "qualification"
      ? `${recommendation.level} test`
      : `${recommendation.level} lesson`;
  els.recommendedDescription.textContent = recommendation.summary;
  els.recommendedReason.textContent = `${recommendation.reason}${aiNote}`;
  els.recommendedFocus.innerHTML = "";

  recommendation.focus.forEach((skill) => {
    els.recommendedFocus.appendChild(createChip(skillLabels[skill] || skill));
  });
}

function renderSkillSpots() {
  const ordered = getOrderedSkills();
  renderSpotGroup(els.strongSpots, ordered.slice(-2).reverse(), "strong");
  renderSpotGroup(els.weakSpots, ordered.slice(0, 2), "weak");
}

function renderSpotGroup(target, items, tone) {
  target.innerHTML = "";

  items.forEach(([skill, score]) => {
    const pill = document.createElement("span");
    pill.className = `spot-pill ${tone}`;
    pill.textContent = `${skillLabels[skill]} ${Math.round(score)}%`;
    target.appendChild(pill);
  });
}

function renderRoadmap() {
  els.levelRoadmap.innerHTML = "";

  cefrLevels.forEach((level) => {
    const item = document.createElement("article");
    item.className = "roadmap-level";
    const status = getLevelStatus(level);
    item.innerHTML = `
      <div class="level-badge">${level}</div>
      <div>
        <strong>${status.title}</strong>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${status.percent}%"></div>
        </div>
        <div class="status-text">${status.detail}</div>
      </div>
      <div class="qualification-state ${status.stateClass}">${status.stateLabel}</div>
    `;
    els.levelRoadmap.appendChild(item);
  });
}

function renderQualificationList() {
  els.qualificationList.innerHTML = "";

  ["A1", "A2", "B1", "B2"].forEach((level) => {
    const result = state.progress.qualification[level];
    const ready = canTakeQualification(level);
    const unlocked = isLevelUnlocked(level);
    const item = document.createElement("article");
    item.className = "qualification-item";

    let stateLabel = "Locked";
    let stateClass = "";

    if (result?.passed) {
      stateLabel = "Passed";
      stateClass = "pass";
    } else if (ready) {
      stateLabel = "Ready";
      stateClass = "ready";
    } else if (unlocked) {
      stateLabel = result?.lastScore ? `Last ${result.lastScore}%` : "Training";
    }

    item.innerHTML = `
      <div class="qualification-copy">
        <strong>${level} qualification</strong>
        <span class="status-text">${qualificationTests[level].summary}</span>
      </div>
      <div class="qualification-state ${stateClass}">${stateLabel}</div>
    `;
    els.qualificationList.appendChild(item);
  });
}

function renderHistory() {
  els.historyList.innerHTML = "";
  const entries = state.progress.lessonHistory.slice(0, 4);

  if (!entries.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No completed sessions yet. Finish one lesson and the adaptation notes will appear here.";
    els.historyList.appendChild(empty);
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "history-item";
    const tone = entry.score >= 80 ? "pass" : entry.score >= 65 ? "ready" : "";
    item.innerHTML = `
      <div class="history-copy">
        <strong>${entry.title}</strong>
        <span class="status-text">${entry.kind === "qualification" ? "Qualification test" : "Lesson"} • ${entry.adaptation}</span>
      </div>
      <div class="history-score qualification-state ${tone}">${entry.score}%</div>
    `;
    els.historyList.appendChild(item);
  });
}

function renderSession() {
  const session = state.activeSession;

  if (!session) {
    els.sessionHeading.textContent = state.lastResult ? "Session complete" : "Ready when you are";
    els.sessionPill.textContent = state.lastResult ? "Review" : "Idle";
    els.sessionActive.classList.add("hidden");
    els.sessionEmpty.classList.toggle("hidden", !!state.lastResult);
    els.sessionResult.classList.toggle("hidden", !state.lastResult);

    if (state.lastResult) {
      renderResult(state.lastResult);
    }

    return;
  }

  els.sessionHeading.textContent = session.title;
  els.sessionPill.textContent =
    session.kind === "qualification" ? `${session.level} test` : `${session.level} lesson`;
  els.sessionEmpty.classList.add("hidden");
  els.sessionActive.classList.remove("hidden");
  els.sessionResult.classList.add("hidden");
  els.sessionDescription.textContent = session.summary;
  els.sessionFocus.innerHTML = "";
  session.focus.forEach((skill) => {
    els.sessionFocus.appendChild(createChip(skillLabels[skill]));
  });

  renderSessionContent(session);
}

function renderSessionContent(session) {
  els.sessionPoints.innerHTML = "";
  session.points.forEach((point) => {
    const item = document.createElement("article");
    item.className = "lesson-point";
    item.innerHTML = `
      <strong>${point.german}</strong>
      <p>${point.english}</p>
    `;
    els.sessionPoints.appendChild(item);
  });

  els.grammarTitle.textContent = session.grammar.title;
  els.grammarExplanation.textContent = session.grammar.explanation;
  els.grammarExamples.innerHTML = "";
  session.grammar.examples.forEach((example) => {
    const item = document.createElement("article");
    item.className = "grammar-example";
    item.innerHTML = `
      <p><strong>${example.german}</strong></p>
      <p>${example.english}</p>
    `;
    els.grammarExamples.appendChild(item);
  });

  renderChallenge();
}

function renderChallenge() {
  const session = state.activeSession;
  pruneResolvedRemediationChallenges(session);
  if (shouldShowBranchJunction(session)) {
    renderBranchJunction(session);
    return;
  }
  const challenge = session.challenges[session.challengeIndex];
  const isLastChallenge = session.challengeIndex === session.challenges.length - 1;
  const mainProgress = getMainLessonProgress(session);
  els.challengePrompt.textContent = challenge.prompt;
  const remediationTopic = challenge.remediationTopicId ? session.remediation.topics[challenge.remediationTopicId] : null;
  els.challengeSkill.textContent = remediationTopic
    ? `Deep dive: ${remediationTopic.title}`
    : `Training ${skillLabels[challenge.skill]}`;
  els.challengeMode.textContent =
    remediationTopic
      ? `Clear this weak spot with ${remediationTopic.targetStreak} correct answers in a row`
      : challenge.type === "text"
        ? "Type your answer"
        : "Choose the best answer";
  els.challengeProgress.textContent = `Lesson ${Math.min(mainProgress.completed + 1, mainProgress.total)} / ${mainProgress.total}`;
  renderLessonProgress(session, remediationTopic);
  renderBranchPanel(session, remediationTopic);
  renderRemediationStatus(session, remediationTopic);
  els.challengeOptions.innerHTML = "";
  els.challengeInput.value = "";
  els.challengeInput.placeholder = challenge.placeholder || "Type your answer";
  els.challengeInput.disabled = false;
  els.submitAnswer.disabled = false;
  els.submitAnswer.textContent = "Check answer";
  stopChallengeStatusTimer();
  els.challengeStatus.textContent = "";
  els.challengeStatus.className = "challenge-status hidden";
  els.challengeFeedback.textContent = "";
  els.challengeFeedback.className = "feedback";
  els.nextChallenge.disabled = true;
  els.nextChallenge.textContent = getNextChallengeLabel(session, challenge, remediationTopic, isLastChallenge);
  state.sessionFeedbackLocked = false;

  if (challenge.type === "text") {
    els.challengeForm.classList.remove("hidden");
    els.challengeOptions.classList.add("hidden");
    window.setTimeout(() => els.challengeInput.focus(), 0);
    return;
  }

  els.challengeForm.classList.add("hidden");
  els.challengeOptions.classList.remove("hidden");

  challenge.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => handleChoiceChallengeAnswer(button, option, challenge));
    els.challengeOptions.appendChild(button);
  });
}

function renderBranchJunction(session) {
  const mainProgress = getMainLessonProgress(session);
  els.challengePrompt.textContent = "Choose which rabbit hole to clear next";
  els.challengeSkill.textContent = "Branch junction";
  els.challengeMode.textContent = "Pick one open weak spot below to continue.";
  els.challengeProgress.textContent = `Lesson ${Math.min(mainProgress.completed + 1, mainProgress.total)} / ${mainProgress.total}`;
  renderLessonProgress(session, null);
  renderBranchPanel(session, null);
  renderRemediationStatus(session, null);
  els.challengeOptions.innerHTML = "";
  els.challengeForm.classList.add("hidden");
  els.challengeOptions.classList.add("hidden");
  stopChallengeStatusTimer();
  els.challengeStatus.textContent = "";
  els.challengeStatus.className = "challenge-status hidden";
  els.challengeFeedback.textContent = "Two or more rabbit holes are open. Choose one to work on next.";
  els.challengeFeedback.className = "feedback";
  els.nextChallenge.disabled = true;
  els.nextChallenge.textContent = "Choose rabbit hole";
  state.sessionFeedbackLocked = false;
}

function handleChoiceChallengeAnswer(button, selected, challenge) {
  if (state.sessionFeedbackLocked) {
    return;
  }

  state.sessionFeedbackLocked = true;
  els.nextChallenge.disabled = false;

  const buttons = [...els.challengeOptions.querySelectorAll("button")];
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === challenge.answer) {
      item.classList.add("correct");
    }
  });

  const correct = selected === challenge.answer;
  if (correct) {
    button.classList.add("correct");
    els.challengeStatus.textContent = "Answer checked.";
    els.challengeStatus.className = "challenge-status ready";
    els.challengeFeedback.textContent = `Correct. ${challenge.explanation}`;
    els.challengeFeedback.classList.add("success");
  } else {
    button.classList.add("incorrect");
    els.challengeStatus.textContent = "Answer checked.";
    els.challengeStatus.className = "challenge-status ready";
    els.challengeFeedback.textContent = `Not quite. The right answer is "${challenge.answer}". ${challenge.explanation}`;
    els.challengeFeedback.classList.add("warning");
  }

  recordChallengeAnswer(challenge, correct, selected);
}

async function handleTextChallengeSubmit(event) {
  event.preventDefault();

  const session = state.activeSession;
  if (!session || state.sessionFeedbackLocked) {
    return;
  }

  const challenge = session.challenges[session.challengeIndex];
  if (challenge.type !== "text") {
    return;
  }

  const typedAnswer = els.challengeInput.value.trim();
  if (!typedAnswer) {
    els.challengeFeedback.textContent = "Type an answer first so I can grade it.";
    els.challengeFeedback.className = "feedback warning";
    return;
  }

  state.sessionFeedbackLocked = true;
  els.nextChallenge.disabled = false;
  els.submitAnswer.disabled = true;
  els.submitAnswer.textContent = "Checking answer...";
  els.challengeInput.disabled = true;
  const localCorrect = evaluateTextAnswer(typedAnswer, challenge);

  if (!localCorrect) {
    state.ui.gradingAnswer = true;
    startChallengeStatusTimer(
      state.api.configured ? "Answer received. Checking with AI..." : "Answer received. Checking locally..."
    );
    els.challengeFeedback.textContent = "Your answer was submitted. Grading is in progress.";
  } else {
    els.challengeStatus.textContent = "Answer checked instantly.";
    els.challengeStatus.className = "challenge-status ready";
    els.challengeFeedback.textContent = "Exact match detected. No AI grading was needed.";
  }
  els.challengeFeedback.className = "feedback";

  let grade = null;

  if (!localCorrect && state.api.configured) {
    grade = await gradeAnswerWithAPI(challenge, typedAnswer);
  }
  state.ui.gradingAnswer = false;
  els.submitAnswer.textContent = "Checked";

  const correct = localCorrect || Boolean(grade?.correct);
  let openedDeepDive = false;
  if (correct) {
    if (!localCorrect) {
      stopChallengeStatusTimer("Grading complete.", "ready");
    }
    const recordResult = recordChallengeAnswer(challenge, correct, typedAnswer, grade);
    els.challengeFeedback.textContent = buildCorrectAnswerFeedback({
      challenge,
      grade,
      localCorrect,
      recordResult
    });
    els.challengeFeedback.className = "feedback success";
  } else {
    const remediationTopics = grade?.remediationTopics?.length
      ? grade.remediationTopics
      : inferRemediationTopicsLocally(challenge, typedAnswer);
    if (remediationTopics.length) {
      openedDeepDive = await openRemediationPaths(challenge, typedAnswer, {
        ...grade,
        remediationTopics
      });
    }
    stopChallengeStatusTimer("Grading complete.", "ready");
    els.challengeFeedback.textContent =
      openedDeepDive
        ? buildRemediationFeedback(grade, remediationTopics)
        : grade?.feedback || `Not quite. A strong answer is "${challenge.answer}". ${challenge.explanation}`;
    els.challengeFeedback.className = "feedback warning";
    recordChallengeAnswer(challenge, correct, typedAnswer, grade);
  }

  if (openedDeepDive) {
    renderLessonProgress(state.activeSession, null);
    renderBranchPanel(state.activeSession, null);
    renderRemediationStatus(state.activeSession, null);
    els.nextChallenge.textContent = state.activeSession?.remediation?.junctionOpen ? "Choose rabbit hole" : "Start deep dive";
  } else if (challenge.remediationTopicId) {
    const topic = state.activeSession?.remediation?.topics?.[challenge.remediationTopicId];
    if (topic?.completed) {
      els.nextChallenge.textContent = state.activeSession?.remediation?.junctionOpen
        ? "Choose next rabbit hole"
        : "Resume lesson path";
    } else {
      els.nextChallenge.textContent = "Continue rabbit hole";
    }
  }
}

function recordChallengeAnswer(challenge, correct, response, grade = null) {
  const session = state.activeSession;
  session.answers.push({
    skill: challenge.skill,
    correct,
    challengeId: challenge.id || challenge.prompt,
    remediationTopicId: challenge.remediationTopicId || null,
    response,
    grade
  });

  const result = {
    topicCompleted: false,
    topicTitle: "",
    openTopicsRemaining: 0
  };

  if (challenge.remediationTopicId && session.remediation?.topics[challenge.remediationTopicId]) {
    const topic = session.remediation.topics[challenge.remediationTopicId];
    topic.attempts += 1;
    topic.streak = correct ? topic.streak + 1 : 0;
    topic.completed = topic.streak >= topic.targetStreak;
    if (topic.completed) {
      pruneResolvedRemediationChallenges(session);
      const openTopics = getOpenRemediationTopics(session);
      session.remediation.activeTopicId = openTopics.length === 1 ? openTopics[0].id : null;
      session.remediation.junctionOpen = openTopics.length > 1;
      result.topicCompleted = true;
      result.topicTitle = topic.title;
      result.openTopicsRemaining = openTopics.length;
    } else {
      session.remediation.activeTopicId = topic.id;
      ensureRemediationRunway(session, topic.id);
      result.topicTitle = topic.title;
      result.openTopicsRemaining = getOpenRemediationTopics(session).length;
    }
  }

  return result;
}

function evaluateTextAnswer(response, challenge) {
  const acceptedAnswers = challenge.acceptedAnswers || [challenge.answer];
  const normalizedResponse = normalizeGerman(response);
  return acceptedAnswers.some((answer) => normalizeGerman(answer) === normalizedResponse);
}

function normalizeGerman(value) {
  return value
    .toLowerCase()
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function advanceChallenge() {
  const session = state.activeSession;
  if (!session) {
    return;
  }

  if (shouldShowBranchJunction(session)) {
    renderChallenge();
    return;
  }

  if (session.challengeIndex === session.challenges.length - 1) {
    void finishSession();
    return;
  }

  session.challengeIndex = getNextChallengeIndex(session);
  renderChallenge();
}

async function finishSession() {
  const session = state.activeSession;
  els.nextChallenge.disabled = true;
  els.nextChallenge.textContent = "Calculating score...";
  startChallengeStatusTimer("Final answer received. Calculating your score...");
  els.challengeFeedback.textContent = "Your lesson is being evaluated now.";
  els.challengeFeedback.className = "feedback";
  const totalCorrect = session.answers.filter((item) => item.correct).length;
  const score = Math.round((totalCorrect / session.challenges.length) * 100);
  const skillBreakdown = buildSkillBreakdown(session.answers);
  const weakSkillKeys = getWeakSkillKeys(skillBreakdown);

  state.progress.totalAnswered += session.challenges.length;
  state.progress.totalCorrect += totalCorrect;
  updateSkillScores(skillBreakdown);

  let adaptation = "";

  if (session.kind === "lesson") {
    state.progress.completedLessons[session.id] = {
      score,
      completedAt: todayKey
    };
    adaptation =
      score === 100
        ? "Perfect round. The app can move you forward immediately."
        : score >= 80
          ? "Strong finish. A follow-up lesson can stretch you, or you can retry this one."
          : "There are still misses in your weaker skills, so a repeat lesson is worthwhile.";

    const unfinishedDeepDives = Object.values(session.remediation?.topics || {}).filter((topic) => !topic.completed);
    if (unfinishedDeepDives.length) {
      adaptation += ` Deep dives are still active in ${unfinishedDeepDives.map((topic) => topic.title.toLowerCase()).join(" and ")}.`;
    }
  } else {
    const passed = score >= 80 && allSkillBreakdownsAbove(skillBreakdown, 50);
    state.progress.qualification[session.level] = {
      passed,
      lastScore: score,
      completedAt: todayKey
    };
    adaptation = passed
      ? `Milestone cleared. ${getNextLevel(session.level) || "C1"} is now your new frontier.`
      : "Milestone not cleared yet. The next lesson will target the gaps from this test.";
  }

  state.progress.lessonHistory.unshift({
    id: session.id,
    title: session.title,
    kind: session.kind,
    score,
    adaptation,
    at: todayKey
  });
  state.progress.lessonHistory = state.progress.lessonHistory.slice(0, 8);
  state.progress.lastStudyDate = todayKey;

  if (state.api.configured) {
    state.ui.estimatingLevel = true;
    setAIBadge("Estimating your level and next focus with AI...", "warning");
    renderAIStatus();
    startChallengeStatusTimer("Score calculated. AI is estimating your level and next focus...");
    els.challengeFeedback.textContent = "Almost there. The app is finishing your session report.";
    const estimate = await estimateLevelWithAPI({
      learnerProfile: summarizeLearnerProfile(),
      session: summarizeSessionForAPI(session),
      answers: session.answers
    });
    state.ui.estimatingLevel = false;

    if (estimate) {
      state.progress.aiEstimate = estimate;
    }
  }

  stopChallengeStatusTimer("Evaluation complete.", "ready");

  saveProgress();
  state.activeSession = null;
  state.recommendation = getRecommendation();
  state.lastResult = {
    title: `${session.title} • ${score}%`,
    summary: adaptation,
    strong: getStrongSkillsFromBreakdown(skillBreakdown),
    weak: getWeakSkillsFromBreakdown(skillBreakdown),
    score,
    kind: session.kind,
    sourceId: session.id,
    sourceLevel: session.level,
    weakSkillKeys
  };
  renderAll();
}

function renderResult(result) {
  els.resultTitle.textContent = result.title;
  els.resultSummary.textContent = result.summary;
  renderResultSpots(els.resultStrong, result.strong, "strong");
  renderResultSpots(els.resultWeak, result.weak, "weak");

  if (result.score === 100) {
    els.resultPrimary.textContent = "Start next lesson";
    els.resultSecondary.textContent = "Repeat this lesson";
  } else {
    els.resultPrimary.textContent = "Retry weak spots";
    els.resultSecondary.textContent = "Restart from scratch";
  }
}

function renderResultSpots(target, items, tone) {
  target.innerHTML = "";

  items.forEach((item) => {
    const pill = document.createElement("span");
    pill.className = `spot-pill ${tone}`;
    pill.textContent = item;
    target.appendChild(pill);
  });
}

function handleResultPrimary() {
  if (!state.lastResult) {
    return;
  }

  if (state.lastResult.score === 100) {
    void startRecommendedSession();
    return;
  }

  restartResultSource({ reviewMode: true });
}

function handleResultSecondary() {
  if (!state.lastResult) {
    return;
  }

  restartResultSource({ reviewMode: false });
}

function restartResultSource({ reviewMode }) {
  const result = state.lastResult;
  const source =
    result.kind === "qualification"
      ? qualificationTests[result.sourceLevel]
      : findLessonById(result.sourceId);

  if (!source) {
    return;
  }

  startSessionFromContent(source, result.kind, {
    reviewMode,
    reviewSkills: result.weakSkillKeys
  });
  renderAll();
  document.querySelector(".session-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function startRecommendedSession() {
  if (!state.learner.email) {
    renderAuth();
    window.setTimeout(() => els.authEmailInput.focus(), 0);
    return;
  }

  const recommendation = state.recommendation;
  const source =
    recommendation.kind === "qualification"
      ? qualificationTests[recommendation.level]
      : findLessonById(recommendation.id);
  const kind = recommendation.kind === "qualification" ? "qualification" : "lesson";
  let sessionContent = source;

  if (source && state.api.configured) {
    state.ui.generatingSession = true;
    setAIBadge(`Generating AI lesson on ${state.api.model || "the configured model"}...`, "warning");
    renderAIStatus();
    const generated = await generateSessionWithAPI(source, recommendation);
    state.ui.generatingSession = false;
    if (generated) {
      sessionContent = {
        ...source,
        ...generated
      };
    }
  }

  if (!sessionContent) {
    renderAIStatus();
    return;
  }

  startSessionFromContent(sessionContent, kind);
  renderAll();
  document.querySelector(".session-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function startSessionFromContent(content, kind, options = {}) {
  const fallbackPoints = [
    {
      german: `${content.level} checkpoint`,
      english: "Qualification session"
    }
  ];
  const fallbackGrammar = {
    title: "Qualification focus",
    explanation: "This test checks whether your recent lesson results are stable enough for the next band.",
    examples: content.focus.map((skill) => ({
      german: skillLabels[skill],
      english: `You will be checked on ${skillLabels[skill].toLowerCase()}`
    }))
  };

  const initialChallenges = buildSessionChallengeQueue(content, options);

  state.lastResult = null;
  state.activeSession = {
    ...content,
    kind,
    challengeIndex: 0,
    answers: [],
    mainChallengeIds: initialChallenges.map((challenge) => challenge.id || challenge.prompt),
    remediationSourceItems: buildRemediationSourceItems(content, initialChallenges),
    remediation: {
      activeTopicId: null,
      junctionOpen: false,
      topics: {},
      openedFromChallengeIds: []
    },
    points: content.points || fallbackPoints,
    grammar: content.grammar || fallbackGrammar,
    challenges: initialChallenges
  };
}

async function generateSessionWithAPI(source, recommendation) {
  try {
    const response = await fetchWithTimeout("/api/generate-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recommendation,
        learnerProfile: summarizeLearnerProfile(),
        baseSession: summarizeSessionForAPI(source)
      })
    }, 25000);

    if (!response.ok) {
      throw new Error("Session generation failed");
    }

    const json = await response.json();
    if (json.ok) {
      setAIBadge(`AI active. Live lesson generation is working on ${state.api.model || "the configured model"}.`, "live");
      renderAIStatus();
      return json.session;
    }

    if (json.error) {
      updateAIBadgeFromError(json.error);
      renderAIStatus();
    }

    return null;
  } catch {
    setAIBadge("AI lesson generation timed out or failed. Using local fallback content.", "warning");
    renderAIStatus();
    return null;
  }
}

async function gradeAnswerWithAPI(challenge, learnerAnswer) {
  try {
    const response = await fetchWithTimeout("/api/grade-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        learnerProfile: summarizeLearnerProfile(),
        challenge: {
          prompt: challenge.prompt,
          skill: challenge.skill,
          type: challenge.type,
          answer: challenge.answer,
          acceptedAnswers: challenge.acceptedAnswers || [challenge.answer]
        },
        learnerAnswer
      })
    }, 18000);

    if (!response.ok) {
      throw new Error("Grade request failed");
    }

    const json = await response.json();
    if (json.ok) {
      setAIBadge(`AI active. Live grading is working on ${state.api.model || "the configured model"}.`, "live");
      renderAIStatus();
      return json.grade;
    }

    if (json.error) {
      updateAIBadgeFromError(json.error);
      renderAIStatus();
    }

    return null;
  } catch {
    setAIBadge("AI grading timed out or failed. Local grading fallback is active.", "warning");
    renderAIStatus();
    return null;
  }
}

async function openRemediationPaths(challenge, learnerAnswer, grade) {
  const session = state.activeSession;
  if (!session || !grade?.remediationTopics?.length) {
    return false;
  }

  const freshTopics = grade.remediationTopics.filter((topic) => {
    return !session.remediation.topics[topic.key];
  });

  if (!freshTopics.length) {
    return false;
  }

  let drilldown = null;
  if (state.api.configured) {
    setAIBadge(`Generating targeted deep dives on ${state.api.model || "the configured model"}...`, "warning");
    renderAIStatus();
    drilldown = await generateDrilldownWithAPI(challenge, learnerAnswer, grade, freshTopics);
  }

  const topicsToOpen = dedupeRemediationTopicBundles(
    drilldown?.topics?.length
      ? drilldown.topics
      : buildFallbackRemediationTopics(challenge, grade, freshTopics)
  );

  if (!topicsToOpen.length) {
    return false;
  }

  const insertionIndex = session.challengeIndex + 1;
  const queuedChallenges = [];

  topicsToOpen.forEach((topic) => {
    const sourceItems = selectTopicSourceItems(session, topic, challenge);
    session.remediation.topics[topic.topicKey] = {
      id: topic.topicKey,
      title: topic.title,
      description: topic.description,
      skill: topic.skill,
      sourceItems,
      model: {
        answer: challenge.answer,
        english: challenge.prompt.replace(/^Type the German sentence for:\s*/i, "").trim(),
        acceptedAnswers: challenge.acceptedAnswers || [challenge.answer],
        prompt: challenge.prompt
      },
      streak: 0,
      attempts: 0,
      targetStreak: 5,
      completed: false
    };

    topic.challenges.forEach((item, index) => {
      queuedChallenges.push({
        ...item,
        id: item.id || `${challenge.id || "challenge"}-${topic.topicKey}-${index}`,
        remediationTopicId: topic.topicKey,
        sourceChallengeId: challenge.id || challenge.prompt
      });
    });
  });

  session.challenges.splice(insertionIndex, 0, ...queuedChallenges);
  const openTopics = getOpenRemediationTopics(session);
  session.remediation.activeTopicId = openTopics.length === 1 ? openTopics[0].id : null;
  session.remediation.junctionOpen = openTopics.length > 1;
  return true;
}

async function generateDrilldownWithAPI(challenge, learnerAnswer, grade, topics) {
  try {
    const response = await fetchWithTimeout("/api/generate-drilldown", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        learnerProfile: summarizeLearnerProfile(),
        sourceChallenge: {
          id: challenge.id || null,
          prompt: challenge.prompt,
          answer: challenge.answer,
          acceptedAnswers: challenge.acceptedAnswers || [challenge.answer],
          skill: challenge.skill,
          explanation: challenge.explanation
        },
        learnerAnswer,
        grade,
        topics
      })
    }, 22000);

    if (!response.ok) {
      throw new Error("Drilldown generation failed");
    }

    const json = await response.json();
    if (json.ok) {
      setAIBadge(`AI active. Live deep dives are working on ${state.api.model || "the configured model"}.`, "live");
      renderAIStatus();
      return json.drilldown;
    }

    if (json.error) {
      updateAIBadgeFromError(json.error);
      renderAIStatus();
    }

    return null;
  } catch {
    setAIBadge("AI deep-dive generation timed out or failed. Using local drill fallback.", "warning");
    renderAIStatus();
    return null;
  }
}

function getMainLessonProgress(session) {
  const total = session.mainChallengeIds?.length || session.challenges.filter((challenge) => !challenge.remediationTopicId).length;
  const answered = new Set(
    session.answers
      .filter((answer) => !answer.remediationTopicId)
      .map((answer) => answer.challengeId)
  );
  return {
    completed: Math.min(answered.size, total),
    total: Math.max(1, total)
  };
}

function renderLessonProgress(session, activeTopic) {
  const progress = getMainLessonProgress(session);
  els.lessonProgressBar.innerHTML = "";
  els.lessonProgressBar.style.setProperty("--step-count", String(progress.total));
  els.lessonProgressNote.textContent = activeTopic
    ? `Main path paused while you clear "${activeTopic.title}".`
    : `Step ${Math.min(progress.completed + 1, progress.total)} of ${progress.total}`;

  for (let index = 0; index < progress.total; index += 1) {
    const segment = document.createElement("span");
    segment.className = "lesson-progress-segment";
    if (index < progress.completed) {
      segment.classList.add("complete");
    } else if (index === progress.completed && !activeTopic) {
      segment.classList.add("current");
    }
    els.lessonProgressBar.appendChild(segment);
  }
}

function renderBranchPanel(session, activeTopic) {
  const allTopics = Object.values(session.remediation?.topics || {});
  const topics = activeTopic ? allTopics.filter((topic) => topic.id === activeTopic.id || topic.completed) : allTopics;
  if (!topics.length) {
    els.branchPanel.classList.add("hidden");
    els.branchList.innerHTML = "";
    els.branchNote.textContent = "No active branches";
    return;
  }

  els.branchPanel.classList.remove("hidden");
  const openCount = allTopics.filter((topic) => !topic.completed).length;
  els.branchNote.textContent = activeTopic
    ? openCount > 1
      ? `You are inside one branch. The others will come back after you clear this one.`
      : `You are inside a branch. Clear it, then the lesson path resumes.`
    : `${openCount} branch${openCount === 1 ? "" : "es"} currently open`;
  els.branchList.innerHTML = "";

  topics.forEach((topic) => {
    const card = document.createElement("button");
    card.className = "branch-card";
    card.type = "button";
    card.disabled = topic.completed;
    if (activeTopic?.id === topic.id) {
      card.classList.add("active");
    }
    if (topic.completed) {
      card.classList.add("done");
    }
    card.innerHTML = `
      <div class="branch-title-row">
        <strong>${topic.title}</strong>
        <span class="branch-streak">${topic.completed ? "Cleared" : `${topic.streak}/${topic.targetStreak} in a row`}</span>
      </div>
      <p class="note">${topic.description}</p>
    `;
    if (!topic.completed) {
      card.addEventListener("click", () => {
        enterRemediationTopic(session, topic.id);
      });
    }
    els.branchList.appendChild(card);
  });
}

function getNextChallengeIndex(session) {
  const activeBranchIndex = findNextActiveBranchChallengeIndex(session, session.challengeIndex, session.remediation.activeTopicId);
  if (activeBranchIndex !== -1) {
    return activeBranchIndex;
  }

  for (let index = session.challengeIndex + 1; index < session.challenges.length; index += 1) {
    const challenge = session.challenges[index];
    if (!challenge.remediationTopicId) {
      return index;
    }
  }

  return session.challengeIndex + 1;
}

function findNextActiveBranchChallengeIndex(session, currentIndex, topicId = null) {
  for (let index = currentIndex + 1; index < session.challenges.length; index += 1) {
    const challenge = session.challenges[index];
    if (!challenge.remediationTopicId) {
      continue;
    }

    if (topicId && challenge.remediationTopicId !== topicId) {
      continue;
    }

    const topic = session.remediation.topics[challenge.remediationTopicId];
    if (topic && !topic.completed) {
      return index;
    }
  }

  return -1;
}

function shouldShowBranchJunction(session) {
  return Boolean(session?.remediation?.junctionOpen);
}

function getOpenRemediationTopics(session) {
  return Object.values(session.remediation?.topics || {}).filter((topic) => !topic.completed);
}

function enterRemediationTopic(session, topicId) {
  session.remediation.activeTopicId = topicId;
  session.remediation.junctionOpen = false;
  const targetIndex = findNextActiveBranchChallengeIndex(session, session.challengeIndex - 1, topicId);
  if (targetIndex !== -1) {
    session.challengeIndex = targetIndex;
  }
  renderChallenge();
}

function buildRemediationFeedback(grade, topics) {
  const summary = grade?.feedback || "Not quite.";
  const diagnoses = topics.map((topic) => `${topic.title}: ${topic.learnerPattern || topic.whyItMatters}`);
  const lead = topics.length === 1
    ? `I opened 1 rabbit hole for ${topics[0].title.toLowerCase()}.`
    : `I opened ${topics.length} rabbit holes: ${topics.map((topic) => topic.title).join(" and ")}.`;
  return `${summary} I spotted ${diagnoses.join(" ")} ${lead} Choose one below to start.`;
}

function buildCorrectAnswerFeedback({ challenge, grade, localCorrect, recordResult }) {
  const base = grade?.feedback || `Correct. ${challenge.explanation}`;

  if (!challenge.remediationTopicId) {
    return localCorrect ? `Correct. ${challenge.explanation}` : base;
  }

  if (recordResult?.topicCompleted) {
    const followup = recordResult.openTopicsRemaining
      ? `Rabbit hole cleared: ${recordResult.topicTitle}. Nice work. Choose the next open rabbit hole to keep going.`
      : `Rabbit hole cleared: ${recordResult.topicTitle}. Nice work. You earned your way back to the lesson path.`;
    return `${base} ${followup}`;
  }

  return localCorrect
    ? `Correct. ${challenge.explanation} Keep going, you are still inside this rabbit hole.`
    : base;
}

function getNextChallengeLabel(session, challenge, remediationTopic, isLastChallenge) {
  if (isLastChallenge) {
    return "Finish lesson";
  }

  if (!remediationTopic) {
    return "Next prompt";
  }

  if (remediationTopic.completed) {
    return session.remediation.junctionOpen ? "Choose next rabbit hole" : "Resume lesson path";
  }

  return "Continue rabbit hole";
}

async function estimateLevelWithAPI(payload) {
  try {
    const response = await fetchWithTimeout("/api/estimate-level", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }, 20000);

    if (!response.ok) {
      throw new Error("Estimate request failed");
    }

    const json = await response.json();
    if (json.ok) {
      setAIBadge(`AI active. Live level estimation is working on ${state.api.model || "the configured model"}.`, "live");
      renderAIStatus();
      return json.estimate;
    }

    if (json.error) {
      updateAIBadgeFromError(json.error);
      renderAIStatus();
    }

    return null;
  } catch {
    setAIBadge("AI level estimation timed out or failed. Local progression logic is active.", "warning");
    renderAIStatus();
    return null;
  }
}

function updateAIBadgeFromError(errorText) {
  const message = String(errorText || "");
  if (message.includes("insufficient_quota")) {
    setAIBadge("AI key loaded, but quota or billing is blocking requests.", "warning");
    return;
  }

  if (message.includes("invalid_api_key")) {
    setAIBadge("AI key was rejected by the API. Check or replace the saved key.", "warning");
    return;
  }

  setAIBadge("AI is configured, but the latest request failed. Local fallback is active.", "warning");
}

function renderRemediationStatus(session, activeTopic) {
  const topics = Object.values(session.remediation?.topics || {});
  if (!topics.length) {
    els.remediationStatus.innerHTML = "";
    els.remediationStatus.classList.add("hidden");
    return;
  }

  els.remediationStatus.classList.remove("hidden");
  els.remediationStatus.innerHTML = "";

  topics.forEach((topic) => {
    const pill = document.createElement("span");
    const tone = topic.completed ? "done" : activeTopic?.id === topic.id ? "active" : "";
    pill.className = `remediation-pill ${tone}`.trim();
    pill.textContent = topic.completed
      ? `${topic.title} cleared`
      : `${topic.title} ${topic.streak}/${topic.targetStreak}`;
    els.remediationStatus.appendChild(pill);
  });
}

function pruneResolvedRemediationChallenges(session) {
  if (!session?.remediation?.topics) {
    return;
  }

  session.challenges = session.challenges.filter((challenge, index) => {
    if (index <= session.challengeIndex) {
      return true;
    }

    if (!challenge.remediationTopicId) {
      return true;
    }

    return !session.remediation.topics[challenge.remediationTopicId]?.completed;
  });
}

function ensureRemediationRunway(session, topicId) {
  const topic = session.remediation.topics[topicId];
  if (!topic || topic.completed) {
    return;
  }

  const pendingCount = session.challenges.filter((challenge, index) => {
    return index > session.challengeIndex && challenge.remediationTopicId === topicId;
  }).length;
  const needed = Math.max(0, topic.targetStreak - topic.streak - pendingCount);

  if (!needed) {
    return;
  }

  const fallbackChallenges = Array.from({ length: needed }, (_, index) => ({
    ...(function buildTopUp() {
      const variant = getRemediationVariant(session, topic.id, topic.attempts + index, {
        german: topic.model.answer,
        english: topic.model.english || topic.model.prompt
      }, topic);
      const answer = selectFallbackRemediationAnswer(
        {
          answer: variant.german
        },
        {
          key: topic.id
        }
      );

      return {
    id: `${topicId}-topup-${topic.attempts}-${index}`,
    type: "text",
    prompt: buildFallbackRemediationPrompt(
      {
        prompt: topic.model.prompt,
        answer: variant.german,
        english: variant.english,
        acceptedAnswers: topic.model.acceptedAnswers,
        skill: topic.skill
      },
      {
        key: topic.id,
        title: topic.title,
        whyItMatters: topic.description,
        skill: topic.skill
      },
      topic.attempts + index
    ),
    skill: topic.skill,
    explanation: topic.description,
    answer,
    acceptedAnswers: [answer],
    options: null,
    placeholder: "Type the corrected German",
    remediationTopicId: topicId
      };
    })()
  }));

  session.challenges.splice(session.challengeIndex + 1, 0, ...fallbackChallenges);
}

function buildFallbackRemediationTopics(challenge, grade, topics) {
  const session = state.activeSession;
  return topics.map((topic) => ({
    topicKey: topic.key,
    title: topic.title,
    description: topic.whyItMatters,
    skill: topic.skill || challenge.skill,
    challenges: Array.from({ length: 5 }, (_, index) => {
      const variant = getRemediationVariant(session, topic.key, index, {
        german: challenge.answer,
        english: challenge.prompt.replace(/^Type the German sentence for:\s*/i, "").trim()
      }, topic);
      const answer = selectFallbackRemediationAnswer(
        {
          ...challenge,
          answer: variant.german
        },
        topic
      );
      return {
        id: `${challenge.id || "challenge"}-${topic.key}-fallback-${index}`,
        type: "text",
        prompt: buildFallbackRemediationPrompt(
          {
            ...challenge,
            answer: variant.german,
            english: variant.english
          },
          topic,
          index
        ),
        skill: topic.skill || challenge.skill,
        explanation: topic.whyItMatters,
        answer,
        acceptedAnswers: [answer],
        options: null,
        placeholder: "Type the corrected German"
      };
    })
  }));
}

function selectFallbackRemediationAnswer(challenge, topic) {
  if (topic.key === "capitalization") {
    return titleCaseGermanNouns(challenge.answer);
  }

  return challenge.answer;
}

function buildFallbackRemediationPrompt(challenge, topic, index) {
  if (topic.key === "capitalization") {
    const variants = [
      `Rewrite this with correct German capitalization: ${decapitalizePromptAnswer(challenge.answer, index)}`,
      `Type the sentence with proper noun capitalization: ${decapitalizePromptAnswer(challenge.answer, index + 1)}`,
      `Fix only the capitalization in this German phrase: ${decapitalizePromptAnswer(challenge.answer, index + 2)}`
    ];
    return variants[index % variants.length];
  }

  if (topic.key === "spelling") {
    const englishCue = challenge.english || challenge.prompt.replace(/^Type the German sentence for:\s*/i, "");
    const variants = [
      `Type the correctly spelled German sentence: ${englishCue}`,
      `Correct the spelling and type the German sentence for: ${englishCue}`,
      `Write the German sentence with correct spelling: ${englishCue}`
    ];
    return variants[index % variants.length];
  }

  if (topic.key === "article_case") {
    return `Type the sentence with the correct article and case: ${challenge.english || challenge.prompt.replace(/^Type the German sentence for:\s*/i, "")}`;
  }

  if (topic.key === "meaning") {
    return `Try again with the full natural German phrase: ${challenge.english || challenge.prompt.replace(/^Type the German sentence for:\s*/i, "")}`;
  }

  return `Correct this weak spot (${topic.title.toLowerCase()}): ${challenge.prompt}`;
}

function titleCaseGermanNouns(sentence) {
  return sentence
    .split(" ")
    .map((token, index) => {
      if (index === 0) {
        return token.charAt(0).toUpperCase() + token.slice(1);
      }

      return /^(kaffee|tee|wasser|saft|milch|brot|haus|kino|mittagessen)$/i.test(token)
        ? token.charAt(0).toUpperCase() + token.slice(1).toLowerCase()
        : token.toLowerCase();
    })
    .join(" ");
}

function decapitalizePromptAnswer(answer, index) {
  if (index % 2 === 0) {
    return answer.toLowerCase();
  }

  return answer
    .split(" ")
    .map((token) => token.toLowerCase())
    .join(" ");
}

function buildRemediationSourceItems(content, challenges) {
  const items = [];

  [...(content.points || []), ...((content.grammar && content.grammar.examples) || [])].forEach((item) => {
    if (item?.german && item?.english) {
      items.push({
        german: item.german,
        english: item.english
      });
    }
  });

  (challenges || []).forEach((challenge) => {
    const english = challenge.prompt?.replace(/^Type the German sentence for:\s*/i, "").trim();
    if (challenge.answer && english && english !== challenge.prompt) {
      items.push({
        german: challenge.answer,
        english
      });
    }
  });

  const seen = new Set();
  return items.filter((item) => {
    const key = `${normalizeGerman(item.german)}::${item.english.toLowerCase()}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function getRemediationVariant(session, topicKey, index, fallbackItem, topic = null) {
  const topicItems = topic?.sourceItems?.length
    ? topic.sourceItems
    : session?.remediation?.topics?.[topicKey]?.sourceItems || [];
  const pool = topicItems.length
    ? topicItems
    : session?.remediationSourceItems?.length
      ? session.remediationSourceItems
    : fallbackItem?.german
      ? [fallbackItem]
      : [];

  if (!pool.length) {
    return {
      german: fallbackItem?.german || "",
      english: fallbackItem?.english || ""
    };
  }

  const offset = [...topicKey].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return pool[(index + offset) % pool.length];
}

function selectTopicSourceItems(session, topic, challenge) {
  const allItems = session?.remediationSourceItems?.length
    ? session.remediationSourceItems
    : [{
        german: challenge.answer,
        english: challenge.prompt.replace(/^Type the German sentence for:\s*/i, "").trim()
      }];

  const challengeWords = new Set(
    normalizeGerman(challenge.answer)
      .split(" ")
      .filter((word) => word.length > 2)
  );
  const topicText = `${topic.title} ${topic.description} ${topic.learnerPattern || ""}`.toLowerCase();

  const focused = allItems.filter((item) => {
    const itemGerman = normalizeGerman(item.german);
    const sharesWord = [...challengeWords].some((word) => itemGerman.includes(word));
    if (sharesWord) {
      return true;
    }

    if (topicText.includes("capital") || topic.key === "capitalization") {
      return /^[A-ZÄÖÜ]/.test(item.german.trim());
    }

    if (topicText.includes("spell") || topicText.includes("rechtschreib") || topic.key === "spelling") {
      return [...challengeWords].some((word) => word.length >= 4 && itemGerman.includes(word.slice(0, Math.max(3, word.length - 2))));
    }

    return false;
  });

  return focused.length ? focused.slice(0, 6) : allItems.slice(0, 4);
}

function inferRemediationTopicsLocally(challenge, learnerAnswer) {
  const expected = challenge.answer || "";
  const response = learnerAnswer || "";
  const topics = [];
  const expectedWords = expected.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);
  const responseWords = response.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);

  const capitalizationMiss = expectedWords.some((word, index) => {
    const responseWord = responseWords[index];
    return responseWord && word.toLowerCase() === responseWord.toLowerCase() && word !== responseWord;
  });
  if (capitalizationMiss) {
    topics.push({
      key: "capitalization",
      title: "German capitalization",
      whyItMatters: "German nouns and sentence openings need reliable capitalization to look native.",
      learnerPattern: "You wrote the right word shape but used the wrong letter case.",
      skill: "grammar"
    });
  }

  const spellingMiss = expectedWords.some((word, index) => {
    const responseWord = responseWords[index];
    return responseWord && word.toLowerCase() !== responseWord.toLowerCase() && similarity(word, responseWord) >= 0.6;
  });
  if (spellingMiss) {
    topics.push({
      key: "spelling",
      title: "Word spelling",
      whyItMatters: "This word is close, but the spelling still needs to become automatic.",
      learnerPattern: "You are near the correct form but one or two letters are off.",
      skill: challenge.skill || "vocabulary"
    });
  }

  const missingArticle = normalizeGerman(expected).includes(" einen ")
    && !normalizeGerman(response).includes(" einen ");
  if (missingArticle) {
    topics.push({
      key: "article_case",
      title: "Article and case choice",
      whyItMatters: "This phrase needs the right article for natural German.",
      learnerPattern: "The noun phrase is missing or weakening the article.",
      skill: "grammar"
    });
  }

  if (!topics.length && normalizeGerman(response) !== normalizeGerman(expected)) {
    topics.push({
      key: "meaning",
      title: "Core phrase choice",
      whyItMatters: "You chose a different German phrase than the target pattern, so the meaning/form pairing needs reinforcement.",
      learnerPattern: "The answer is understandable but not the target phrase.",
      skill: challenge.skill || "speaking"
    });
  }

  return topics.slice(0, 2);
}

function dedupeRemediationTopicBundles(topicBundles) {
  return topicBundles.map((topic) => {
    const seen = new Set();
    const challenges = topic.challenges.filter((challenge) => {
      const signature = buildChallengeSignature(challenge);
      if (seen.has(signature)) {
        return false;
      }
      seen.add(signature);
      return true;
    });

    return {
      ...topic,
      challenges
    };
  }).filter((topic) => topic.challenges.length);
}

function buildChallengeSignature(challenge) {
  return `${normalizeGerman(challenge.prompt || "")}::${normalizeGerman(challenge.answer || "")}`;
}

function similarity(left, right) {
  const a = normalizeGerman(left);
  const b = normalizeGerman(right);
  const max = Math.max(a.length, b.length) || 1;
  return 1 - levenshtein(a, b) / max;
}

function levenshtein(left, right) {
  const rows = Array.from({ length: left.length + 1 }, (_, index) => [index]);
  for (let column = 1; column <= right.length; column += 1) {
    rows[0][column] = column;
  }

  for (let row = 1; row <= left.length; row += 1) {
    for (let column = 1; column <= right.length; column += 1) {
      const cost = left[row - 1] === right[column - 1] ? 0 : 1;
      rows[row][column] = Math.min(
        rows[row - 1][column] + 1,
        rows[row][column - 1] + 1,
        rows[row - 1][column - 1] + cost
      );
    }
  }

  return rows[left.length][right.length];
}

function startChallengeStatusTimer(baseText) {
  stopChallengeStatusTimer();
  state.ui.challengeStatusBaseText = baseText;
  state.ui.challengeStatusStartedAt = Date.now();
  els.challengeStatus.className = "challenge-status pending";
  updateChallengeStatusElapsed();
  state.ui.challengeStatusTimerId = window.setInterval(updateChallengeStatusElapsed, 1000);
}

function updateChallengeStatusElapsed() {
  if (!state.ui.challengeStatusStartedAt) {
    return;
  }

  const elapsedSeconds = Math.max(1, Math.floor((Date.now() - state.ui.challengeStatusStartedAt) / 1000));
  els.challengeStatus.textContent = `${state.ui.challengeStatusBaseText} ${elapsedSeconds}s`;
}

function stopChallengeStatusTimer(finalText = "", tone = "hidden") {
  if (state.ui.challengeStatusTimerId) {
    window.clearInterval(state.ui.challengeStatusTimerId);
  }

  state.ui.challengeStatusTimerId = null;
  state.ui.challengeStatusStartedAt = null;
  state.ui.challengeStatusBaseText = "";

  if (!finalText) {
    els.challengeStatus.textContent = "";
    els.challengeStatus.className = "challenge-status hidden";
    return;
  }

  els.challengeStatus.textContent = finalText;
  els.challengeStatus.className = `challenge-status ${tone}`;
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function lookupLearner(email) {
  const response = await fetchWithTimeout("/api/learner/lookup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  }, 12000);

  if (!response.ok) {
    throw new Error("Learner lookup failed");
  }

  return response.json();
}

async function registerLearner(email, name) {
  const response = await fetchWithTimeout("/api/learner/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      name,
      progress: structuredClone(defaultProgress)
    })
  }, 12000);

  if (!response.ok) {
    throw new Error("Learner registration failed");
  }

  const json = await response.json();
  if (!json.ok || !json.learner) {
    throw new Error(json.error || "Learner registration failed");
  }

  return json.learner;
}

async function persistLearnerProfile() {
  if (!state.learner.email || window.location.protocol === "file:") {
    return;
  }

  try {
    await fetchWithTimeout("/api/learner/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: state.learner.email,
        name: state.learner.name,
        progress: state.progress
      })
    }, 12000);
  } catch {
    // Keep the local profile usable even if remote saving is temporarily unavailable.
  }
}

function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (!email || !email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    return "";
  }

  return email;
}

function normalizeName(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 60);
}

function summarizeLearnerProfile() {
  return {
    learnerName: state.learner.name,
    currentBand: getCurrentBand(),
    aiEstimate: state.progress.aiEstimate,
    skillScores: state.progress.skillScores,
    recentHistory: state.progress.lessonHistory.slice(0, 4),
    qualification: state.progress.qualification
  };
}

function summarizeSessionForAPI(content) {
  return {
    id: content.id,
    level: content.level,
    title: content.title,
    summary: content.summary,
    focus: content.focus,
    points: content.points,
    grammar: content.grammar,
    challenges: (content.challenges || []).slice(0, 6).map((challenge) => ({
      id: challenge.id || null,
      type: challenge.type || "choice",
      prompt: challenge.prompt,
      skill: challenge.skill,
      answer: challenge.answer,
      acceptedAnswers: challenge.acceptedAnswers || [challenge.answer],
      options: challenge.options || null,
      placeholder: challenge.placeholder || null,
      explanation: challenge.explanation
    }))
  };
}

function buildSessionChallengeQueue(content, options = {}) {
  let challenges = content.challenges.map((challenge, index) => ({
    ...challenge,
    id: challenge.id || `${content.id}-${index}`
  }));

  if (options.reviewMode && options.reviewSkills?.length) {
    const skillPriority = options.reviewSkills;
    challenges = [...challenges].sort((left, right) => {
      return skillPriority.indexOf(left.skill) - skillPriority.indexOf(right.skill);
    });
  }

  if (!options.reviewMode) {
    return challenges;
  }

  const focusSet = new Set(options.reviewSkills || []);
  const focused = challenges.filter((challenge) => focusSet.has(challenge.skill));
  return focused.length ? [...focused, ...challenges].slice(0, 6) : challenges;
}

function getRecommendation() {
  for (const level of cefrLevels) {
    if (!isLevelUnlocked(level)) {
      break;
    }

    if (qualificationTests[level] && canTakeQualification(level) && !state.progress.qualification[level]?.passed) {
      return {
        kind: "qualification",
        id: qualificationTests[level].id,
        level,
        title: qualificationTests[level].title,
        summary: qualificationTests[level].summary,
        focus: qualificationTests[level].focus,
        reason: `You have enough lesson progress in ${level}. A qualification test can unlock ${getNextLevel(level) || "the next band"}.`
      };
    }

    if (qualificationTests[level] && state.progress.qualification[level]?.passed) {
      continue;
    }

    const candidate = selectLessonForLevel(level);
    if (candidate) {
      return candidate;
    }
  }

  return {
    kind: "lesson",
    id: lessons[lessons.length - 1].id,
    level: "B2",
    title: "B2 review loop",
    summary: "You have reached the current edge of the local course. Keep reinforcing higher-level patterns.",
    focus: ["reading", "grammar", "speaking"],
    reason: "The current content library tops out at B2 for now, so the app is cycling review around your weakest advanced skills."
  };
}

function selectLessonForLevel(level) {
  const weakest = getOrderedSkills().map(([skill]) => skill);
  const levelLessons = lessons.filter((lesson) => lesson.level === level);
  const incomplete = levelLessons.filter((lesson) => !state.progress.completedLessons[lesson.id]);
  const pool = incomplete.length ? incomplete : levelLessons;

  if (!pool.length) {
    return null;
  }

  const ranked = [...pool].sort((left, right) => rankLesson(right, weakest) - rankLesson(left, weakest));
  const best = ranked[0];
  const hasCompleted = !!state.progress.completedLessons[best.id];

  return {
    kind: "lesson",
    id: best.id,
    level: best.level,
    title: best.title,
    summary: best.summary,
    focus: best.focus,
    reason: hasCompleted
      ? `You have finished the core ${level} lessons, but your weaker skills still point back to this lesson for reinforcement.`
      : `This lesson best targets your weakest live skills: ${best.focus.map((skill) => skillLabels[skill].toLowerCase()).join(", ")}.`
  };
}

function rankLesson(lesson, weakestSkills) {
  return lesson.focus.reduce((sum, skill) => {
    const weaknessRank = weakestSkills.indexOf(skill);
    const weaknessBonus = weaknessRank === -1 ? 0 : weakestSkills.length - weaknessRank;
    const completionBonus = state.progress.completedLessons[lesson.id] ? 0 : 6;
    return sum + weaknessBonus + completionBonus;
  }, 0);
}

function getCurrentBand() {
  if (state.progress.aiEstimate?.overallLevel) {
    return state.progress.aiEstimate.overallLevel;
  }

  for (const level of cefrLevels) {
    if (!isLevelUnlocked(level)) {
      return getPreviousLevel(level) || "A1";
    }

    if (!state.progress.qualification[level]?.passed) {
      return level;
    }
  }

  return "C1";
}

function isLevelUnlocked(level) {
  const index = cefrLevels.indexOf(level);
  if (index <= 0) {
    return true;
  }

  const previousLevel = cefrLevels[index - 1];
  return !!state.progress.qualification[previousLevel]?.passed;
}

function canTakeQualification(level) {
  if (!qualificationTests[level] || !isLevelUnlocked(level)) {
    return false;
  }

  const levelLessons = lessons.filter((lesson) => lesson.level === level);
  const completed = levelLessons.filter((lesson) => state.progress.completedLessons[lesson.id]);
  if (!levelLessons.length || completed.length / levelLessons.length < 0.75) {
    return false;
  }

  const averageScore =
    completed.reduce((sum, lesson) => sum + state.progress.completedLessons[lesson.id].score, 0) / completed.length;
  const focusSkills = [...new Set(levelLessons.flatMap((lesson) => lesson.focus))];
  const focusAverage =
    focusSkills.reduce((sum, skill) => sum + state.progress.skillScores[skill], 0) / focusSkills.length;

  return averageScore >= 78 && focusAverage >= 60;
}

function getLevelStatus(level) {
  const unlocked = isLevelUnlocked(level);
  const passed = state.progress.qualification[level]?.passed;
  const levelLessons = lessons.filter((lesson) => lesson.level === level);

  if (!unlocked) {
    return {
      title: `${level} locked`,
      detail: `Pass ${getPreviousLevel(level)} qualification to unlock this band.`,
      percent: 0,
      stateLabel: "Locked",
      stateClass: ""
    };
  }

  if (!levelLessons.length) {
    return {
      title: `${level} roadmap`,
      detail: "Curriculum content not added yet.",
      percent: level === "C1" ? 10 : 0,
      stateLabel: passed ? "Passed" : "Planned",
      stateClass: passed ? "pass" : ""
    };
  }

  const completed = levelLessons.filter((lesson) => state.progress.completedLessons[lesson.id]);
  const completionPercent = Math.round((completed.length / levelLessons.length) * 70);
  const averageLessonScore = completed.length
    ? completed.reduce((sum, lesson) => sum + state.progress.completedLessons[lesson.id].score, 0) / completed.length
    : 0;
  const percent = passed ? 100 : Math.min(92, completionPercent + Math.round(averageLessonScore * 0.22));
  let detail = `${completed.length}/${levelLessons.length} lessons completed.`;
  let stateLabel = "In progress";
  let stateClass = "";

  if (passed) {
    detail = "Qualification passed. Next band unlocked.";
    stateLabel = "Qualified";
    stateClass = "pass";
  } else if (canTakeQualification(level)) {
    detail = "Qualification test ready.";
    stateLabel = "Test ready";
    stateClass = "ready";
  }

  return {
    title: `${level} progression`,
    detail,
    percent,
    stateLabel,
    stateClass
  };
}

function buildSkillBreakdown(answers) {
  const breakdown = {};

  answers.forEach((answer) => {
    if (!breakdown[answer.skill]) {
      breakdown[answer.skill] = {
        total: 0,
        correct: 0
      };
    }

    breakdown[answer.skill].total += 1;
    breakdown[answer.skill].correct += answer.correct ? 1 : 0;
  });

  return breakdown;
}

function updateSkillScores(skillBreakdown) {
  Object.entries(skillBreakdown).forEach(([skill, stats]) => {
    const accuracy = (stats.correct / stats.total) * 100;
    const current = state.progress.skillScores[skill] ?? 50;
    state.progress.skillScores[skill] = clamp(Math.round(current * 0.7 + accuracy * 0.3), 20, 98);
  });
}

function allSkillBreakdownsAbove(skillBreakdown, threshold) {
  return Object.values(skillBreakdown).every((stats) => (stats.correct / stats.total) * 100 >= threshold);
}

function getStrongSkillsFromBreakdown(skillBreakdown) {
  return Object.entries(skillBreakdown)
    .map(([skill, stats]) => [skill, Math.round((stats.correct / stats.total) * 100)])
    .sort((left, right) => right[1] - left[1])
    .slice(0, 2)
    .map(([skill, score]) => `${skillLabels[skill]} ${score}%`);
}

function getWeakSkillsFromBreakdown(skillBreakdown) {
  return Object.entries(skillBreakdown)
    .map(([skill, stats]) => [skill, Math.round((stats.correct / stats.total) * 100)])
    .sort((left, right) => left[1] - right[1])
    .slice(0, 2)
    .map(([skill, score]) => `${skillLabels[skill]} ${score}%`);
}

function getWeakSkillKeys(skillBreakdown) {
  return Object.entries(skillBreakdown)
    .map(([skill, stats]) => [skill, (stats.correct / stats.total) * 100])
    .sort((left, right) => left[1] - right[1])
    .slice(0, 2)
    .map(([skill]) => skill);
}

function getOrderedSkills() {
  return Object.entries(state.progress.skillScores).sort((left, right) => left[1] - right[1]);
}

function findLessonById(id) {
  return lessons.find((lesson) => lesson.id === id);
}

function createChip(label) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = label;
  return chip;
}

function getNextLevel(level) {
  const index = cefrLevels.indexOf(level);
  return cefrLevels[index + 1] || null;
}

function getPreviousLevel(level) {
  const index = cefrLevels.indexOf(level);
  return index > 0 ? cefrLevels[index - 1] : null;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
