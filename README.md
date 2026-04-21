# Deutsch Trainer

A lightweight German learning app that now supports a local Node backend and optional OpenAI-powered session generation, grading, and level estimation.

## What it includes

- Adaptive lesson recommendation based on your weakest and strongest skills
- Session grading after each lesson or milestone test
- CEFR roadmap progress across A1, A2, B1, B2, and C1
- Qualification tests that unlock the next level when you are ready
- Live OpenAI-backed lesson generation when `OPENAI_API_KEY` is configured
- AI grading for typed answers and AI level estimation after a session
- Browser-saved learner progress with local fallback when the API is unavailable

## Run it

For the full app, run the local server from this folder:

```bash
npm start
```

Then visit `http://localhost:3000`.

To enable live OpenAI features, copy `.env.example` values into your shell environment before starting:

```bash
export OPENAI_API_KEY=your_key_here
export OPENAI_MODEL=gpt-5-mini
```

If you open `index.html` directly with `file://`, the app will still work in local fallback mode, but live AI lesson generation and grading will stay off.

## Deploy on Railway

This app is ready to deploy on Railway as a Node web service.

### What Railway needs

- A GitHub repository connected to Railway, or a CLI deploy with `railway up`
- A service variable for `OPENAI_API_KEY`
- The default `PORT` variable from Railway

The project includes a [`railway.toml`](./railway.toml) file that sets:

- `startCommand = "npm start"`
- `healthcheckPath = "/api/status"`

### GitHub deploy flow

1. Push this project to GitHub.
2. In Railway, create a new project and choose `Deploy from GitHub repo`.
3. Select this repository.
4. In the Railway service variables UI, add:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL=gpt-5-mini`
5. Deploy the staged changes.
6. In Railway networking settings, generate a public domain.

### Notes

- Do not commit `.env`. It is ignored by `.gitignore`.
- Railway automatically injects `PORT`, and the server already listens on it.
- Railway healthchecks require an HTTP `200` response; this app exposes that on `/api/status`.
- Learner profiles are stored server-side by email. For durable storage on Railway, attach a volume.
- Recommended Railway volume mount path: `/data`
- The app automatically uses `RAILWAY_VOLUME_MOUNT_PATH` when Railway provides it, so `DATA_DIR` is optional on Railway.
- If you prefer a custom mount path, set `DATA_DIR` to match it.

## Next ideas

- Add realtime speaking practice with the Realtime API
- Replace the JSON learner store with SQLite or Postgres for stronger multi-user durability
- Add teacher review tools and analytics for weak grammar patterns
- Add email verification and passwordless sign-in when identity needs to be trusted
