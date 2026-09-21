# Curriculum Compass

Curriculum Compass is an independent IB Computer Science teaching planner for the course with first assessment in 2027. Teachers can create SL and HL classes, track curriculum completion, and record planned and taught hours.

The site is configured for GitHub Pages at:

`https://ostromaj.github.io/curriculum-compass/`

## Free Firebase setup

This project uses only services available on Firebase's free Spark plan: Google Authentication and Cloud Firestore. Do not enable billing or upgrade to Blaze.

1. In the [Firebase console](https://console.firebase.google.com/), create a project. Leave Google Analytics off if you do not need it.
2. Open **Build → Authentication → Get started → Google**, enable Google as a sign-in provider, choose a support email, and save.
3. Open **Authentication → Settings → Authorized domains** and add `ostromaj.github.io`.
4. Open **Build → Firestore Database → Create database**. Choose Production mode and a nearby US location.
5. In Firestore, open **Rules**, replace the rules with the contents of `firestore.rules`, and publish them.
6. Open **Project settings → General → Your apps**, add a Web app, and copy its Firebase configuration values.
7. In this GitHub repository, open **Settings → Secrets and variables → Actions → Variables** and add these repository variables:

| GitHub variable | Firebase value |
| --- | --- |
| `FIREBASE_API_KEY` | `apiKey` |
| `FIREBASE_AUTH_DOMAIN` | `authDomain` |
| `FIREBASE_PROJECT_ID` | `projectId` |
| `FIREBASE_STORAGE_BUCKET` | `storageBucket` |
| `FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` |
| `FIREBASE_APP_ID` | `appId` |

Firebase web configuration is designed to be public; access is protected by Authentication and the Firestore rules, not by hiding these values.

## GitHub Pages

Open **Settings → Pages** and set **Source** to **GitHub Actions**. Every push to `main` then builds and publishes the site automatically. You can also run the workflow manually from **Actions → Deploy Curriculum Compass to GitHub Pages → Run workflow**.

## Local development

Copy `.env.example` to `.env.local`, add the Firebase web configuration, and run:

```bash
corepack enable
pnpm install
pnpm dev
```

Run `pnpm build` to verify the static GitHub Pages export.
