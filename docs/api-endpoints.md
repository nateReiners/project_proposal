# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Follows

- `GET /api/follows`
- `POST /api/follows`
- `GET /api/follows/:id`
- `DELETE /api/follows/:id`
- `GET /api/follows/:id/follow`


### Tags

- `GET /api/tags`
- `POST /api/photos/:photo_id/tags`
- `DELETE /api/photos/:photo_id/tags/:tag_name`
