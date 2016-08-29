# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `PATCH /api/users`

## Session
- `POST /api/session`
- `GET /api/session`
- `DELETE /api/session`

## Notes
- `GET /api/notes`
  - Notes index/search
  - accepts pagination params [if have time]
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

## Notebooks
- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `PATCH /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`

## Tags
- `GET /api/tags`
- `POST /api/notes/:id/tags`
- `DELETE /api/notes/:id/tags/:tag_name`
