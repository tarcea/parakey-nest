# Demo for Parakey API

- `git clone https://gitlab.com/gheorghe3/parakey-nest.git`

- create `.env` file and populate it like in `env.example`

- `yarn start:dev`

- GET on [http://localhost:3001/keys](http://localhost:3001/keys) - all available keys for the given domain id

- POST on `http://localhost:3001/keys` - create key for a certain access id (door)

example request body:

```json
{
  "email": "user@flowpass.co", // a valid email address
  "accessId": "aaaaaaaaaa", // a valid access id (a door or a group of doors)
  "startDate": "2023-01-01T07:30:00.000Z", // a valid starting date
  "expirationDate": "2023-01-01T17:30:00.000Z" // a valid expiration date
}
```

If you are not registered in Parakey app with the email address from the request, you will receive an email from Parakey

- DELETE on `http://localhost:3001/keys`

example request body:

```json
{
  "email": "user@flowpass.co", // a valid email address
  "accessId": "aaaaaaaaaa", // a valid access id (a door or a group of doors)
  "startDate": "2023-01-01T07:30:00.000Z", // a valid starting date
  "expirationDate": "2023-01-01T17:30:00.000Z" // a valid expiration date
}
```
