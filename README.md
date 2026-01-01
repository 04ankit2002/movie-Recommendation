# Movie Recommendation App

Short description
This is a full‑stack movie recommendation app: a React + Vite frontend that sends user input to a Node.js backend which uses an AI service and a database to generate and persist movie recommendations.

What this project does
- Accepts user preferences (via [Frontend/src/components/movieForm.jsx](Frontend/src/components/movieForm.jsx))
- Sends requests to the backend API ([Backend/src/routes/recommendation.route.js](Backend/src/routes/recommendation.route.js))
- Backend uses AI logic ([Backend/src/config/ai.js](Backend/src/config/ai.js)) and stores results in the DB ([Backend/src/models/recommendation.model.js](Backend/src/models/recommendation.model.js))
- Controller/service responsibilities are in [Backend/src/controllers/recommendation.controller.js](Backend/src/controllers/recommendation.controller.js) and [Backend/src/services/recommendation.service.js](Backend/src/services/recommendation.service.js)


## Repository layout

- Backend
  - Server entry: [Backend/src/index.js](Backend/src/index.js)
  - Config: [Backend/src/config/db.js](Backend/src/config/db.js), [Backend/src/config/ai.js](Backend/src/config/ai.js)
  - Routes: [Backend/src/routes/recommendation.route.js](Backend/src/routes/recommendation.route.js)
  - Controllers: [Backend/src/controllers/recommendation.controller.js](Backend/src/controllers/recommendation.controller.js)
  - Models: [Backend/src/models/recommendation.model.js](Backend/src/models/recommendation.model.js)
  - Services: [Backend/src/services/recommendation.service.js](Backend/src/services/recommendation.service.js), [Backend/src/services/errorHandler.service.js](Backend/src/services/errorHandler.service.js)
  - Env: [Backend/.env](Backend/.env)

- Frontend
  - Vite config: [Frontend/vite.config.js](Frontend/vite.config.js)
  - App entry: [Frontend/src/main.jsx](Frontend/src/main.jsx), [Frontend/src/App.jsx](Frontend/src/App.jsx)
  - Components: [Frontend/src/components/movieForm.jsx](Frontend/src/components/movieForm.jsx)
  - API client: [Frontend/src/services/api.js](Frontend/src/services/api.js)

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
