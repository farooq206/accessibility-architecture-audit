# Accessibility & Architecture Audit

## 1. Project Overview

This project is a focused accessibility and architecture audit of the UMANG public service website.

The audit uses Lighthouse results and keyboard-only navigation testing to identify accessibility improvements and document a maintainable full-stack project foundation.

## 2. Website Audited

- **Website:** UMANG
- **URL:** https://web.umang.gov.in/
- **Tested page:** Haryana Police Department page

## 3. Lighthouse Results

| Category | Score |
|---|---:|
| Performance | 43 |
| Accessibility | 81 |
| Best Practices | 92 |
| SEO | 92 |

*Scores are from the second Lighthouse run and may vary between runs.*

## 4. Keyboard Accessibility Testing

| Test | Result |
|---|---|
| Focus highlighting | Needs improvement |
| Tab order | Pass |
| Tested buttons reachable | Pass |
| Enter key | Pass |
| Shift + Tab | Pass |

## 5. Project Structure

```text
accessibility-architecture-audit/
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
├── docs/
│   ├── accessibility-audit.md
│   ├── architecture-analysis.md
│   ├── issue-register.csv
│   └── screenshots/
│       ├── lighthouse-run-1.png
│       ├── lighthouse-run-2.png
│       ├── accessibility-findings.png
│       └── best-practices-findings.png
├── tests/
│   ├── server.test.js
│   └── README.md
├── README.md
└── .gitignore
```

## 6. Documentation

- **accessibility-audit.md:** Accessibility audit report.
- **architecture-analysis.md:** Proposed application architecture.
- **issue-register.csv:** Register of five identified issues.
- **screenshots/:** Lighthouse evidence screenshots.

## 7. Technologies

**Currently implemented:**
- Frontend: HTML, CSS and JavaScript.
- Backend: Node.js and Express.js.
- Testing: Node.js built-in test runner.

**Planned technologies:**
- React for frontend development.
- PostgreSQL for database management.

## 8. Setup and Running Instructions

### Backend Setup

1. Open a terminal in the project directory.
2. Navigate to the server folder:

```bash
cd server
```

3. Install dependencies:

```bash
npm install
```

4. Start the backend:

```bash
npm start
```

The server runs at:

http://localhost:5000

### API Endpoints

- `GET /` – Returns the API welcome message.
- `GET /api/health` – Checks server health.

### Frontend Setup

Open `client/index.html` in a web browser to view the frontend starter application.

### Run Automated Tests

Open a separate terminal in the `server` folder and run:

```bash
npm test
```

**Expected result:** 2 tests passed and 0 failed.

## 9. Project Goals

1. Identify accessibility issues.
2. Understand client-server architecture.
3. Document evidence and remediation priorities.
4. Build a maintainable full-stack foundation.
5. Encourage accessible web development practices.

## 10. Project Status

- [✔️] Project folder structure created.
- [✔️] Accessibility audit documentation completed.
- [✔️] Architecture analysis documented.
- [✔️] Issue register created.
- [✔️] Lighthouse screenshots collected.
- [✔️] Frontend starter application created and tested.
- [✔️] Backend API created and tested.
- [✔️] Automated backend tests completed successfully (2 passed, 0 failed).

The initial full-stack project foundation is ready for further development and verification.