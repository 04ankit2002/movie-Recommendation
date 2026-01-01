# 🎬 Movie Recommendation 

An AI-powered full-stack movie recommendation application built with React (Vite) on the frontend and Node.js (Fastify) on the backend. Users enter their movie preferences, and the system generates personalized movie recommendations using an AI service while persisting results in a database.

## ✨ Features

- 🎥 Accepts natural-language movie preferences (e.g., “action movies with a strong female lead”)
- 🤖 Generates 3–5 AI-powered movie recommendations
- 💾 Stores user input and recommendations in a database
- ⚡ Fast and lightweight backend using Fastify
- 🎨 Modern frontend built with React + Vite

What this project does
- Accepts user preferences (via [Frontend/src/components/movieForm.jsx](Frontend/src/components/movieForm.jsx))
- Sends requests to the backend API ([Backend/src/routes/recommendation.route.js](Backend/src/routes/recommendation.route.js))
- Backend uses AI logic ([Backend/src/config/ai.js](Backend/src/config/ai.js)) and stores results in the DB ([Backend/src/models/recommendation.model.js](Backend/src/models/recommendation.model.js))
- Controller/service responsibilities are in [Backend/src/controllers/recommendation.controller.js](Backend/src/controllers/recommendation.controller.js) and [Backend/src/services/recommendation.service.js](Backend/src/services/recommendation.service.js)

```bash
## Repository layout

├── Backend
│   ├── src
│   │   ├── index.js                # Server entry point
│   │   ├── config
│   │   │   ├── db.js               # Database configuration
│   │   │   └── ai.js               # AI service configuration
│   │   ├── routes
│   │   │   └── recommendation.route.js
│   │   ├── controllers
│   │   │   └── recommendation.controller.js
│   │   ├── services
│   │   │   ├── recommendation.service.js
│   │   │   └── errorHandler.service.js
│   │   └── models
│   │       └── recommendation.model.js
│   └── .env                        # Environment variables
│
└── Frontend
    ├── vite.config.js
    ├── src
    │   ├── main.jsx
    │   ├── App.jsx
    │   ├── components
    │   │   └── movieForm.jsx
    │   └── services
    │       └── api.js
```

## Prerequisites

- Node.js (LTS)
- npm

## Setup & Run

Backend
1. cd Backend
2. npm install
3. Create or update environment variables in [Backend/.env](Backend/.env)
4. Start the server using the startup script defined in [Backend/package.json](Backend/package.json) (e.g. `npm start`, `npm run dev`, or `node src/index.js`)

Frontend
1. cd Frontend
2. npm install
3. Start dev server: `npm run dev` (see [Frontend/package.json](Frontend/package.json))
4. Open the app in the browser (Vite typically uses `http://localhost:5173`)

## API

See route definitions in [Backend/src/routes/recommendation.route.js](Backend/src/routes/recommendation.route.js) for available endpoints and the corresponding controller logic in [Backend/src/controllers/recommendation.controller.js](Backend/src/controllers/recommendation.controller.js). The frontend API client is at [Frontend/src/services/api.js](Frontend/src/services/api.js).

## Development notes

- Database configuration is in [Backend/src/config/db.js](Backend/src/config/db.js).
- Error handling logic lives in [Backend/src/services/errorHandler.service.js](Backend/src/services/errorHandler.service.js).
- Model for recommendations is [Backend/src/models/recommendation.model.js](Backend/src/models/recommendation.model.js).

## Contributing

- Open a branch, add tests, and send a PR.

## License

Add a license file if desired.
