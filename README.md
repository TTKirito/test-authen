

## Install requirement

- **Nodejs**: 16 
- **Mysql**: > 5.7.25

## Development environments

- **develop**: develop environment

## Install project và run server

- **Step 1:** Clone git repository:
- **Step 2:** Install packages:
  `yarn install`
- **Step 3:** In env: change .env.example to .env and change config

- **Step 4:** Running server
  - Normal run: `yarn start`


## Create docker mysql
 - `run docker compose up -d`

## Create database
  - migrate: `yarn knex:migrate`
  - rollback:  `yarn knex:rollback`
## Run test
  - `yarn test`

## curl 

- **Sign up:** 
`
  curl --location 'http://localhost:3000/api/users/sign-up' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "email": "thuanton98@gmail.com",
      "password": "123323331",
      "firstName": true,
      "lastName": "333"
}'
`
- **Response:** 

`
  {
    "success": true,
    "result": {
        "id": 466,
        "firstName": "true",
        "lastName": "333",
        "email": "thuanton981@gmail.com",
        "displayName": "true 333"
    }
  }
`

- **Sign in:** 
`
  curl --location 'http://localhost:3000/api/users/sign-in' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "email": "thuanton98@gmail.com",
      "password": "123323331"
  }'
`
- **Response:** 
`
  {
    "success": true,
    "result": {
        "user": {
            "firstName": "true",
            "lastName": "333",
            "displayName": "true 333",
            "email": "thuanton98@gmail.com",
            "id": 465
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0cnVlIiwibGFzdE5hbWUiOiIzMzMiLCJkaXNwbGF5TmFtZSI6InRydWUgMzMzIiwiZW1haWwiOiJ0aHVhbnRvbjk4QGdtYWlsLmNvbSIsImlkIjo0NjUsImlhdCI6MTY5NTg5Mjk2NSwiZXhwIjoxNjk1ODk2NTY1fQ.cS2M5haTLCvc_LOK0oSACbKF_s0NxCGGO9Z0Rx0zHtY",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0cnVlIiwibGFzdE5hbWUiOiIzMzMiLCJkaXNwbGF5TmFtZSI6InRydWUgMzMzIiwiZW1haWwiOiJ0aHVhbnRvbjk4QGdtYWlsLmNvbSIsImlkIjo0NjUsImlhdCI6MTY5NTg5Mjc5NywiZXhwIjoxNjk4NDg0Nzk3fQ.6TtgGFWwzqjUmeqFWvTtm_ucIBR2sEChfOjdBa3hEpo"
    }
  }

`
- **Sign out:** 

`
  curl --location --request POST 'http://localhost:3000/api/users/sign-out' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0cnVlIiwibGFzdE5hbWUiOiIzMzMiLCJkaXNwbGF5TmFtZSI6InRydWUgMzMzIiwiZW1haWwiOiJ0aHVhbnRvbjk4QGdtYWlsLmNvbSIsImlkIjo0NjUsImlhdCI6MTY5NTg5Mjc3MSwiZXhwIjoxNjk1ODk2MzcxfQ.bIsycxZTxtD-vcoHQhBsU8WsM2wWSeLBs36AuiUugow'
`

- **refresh token:** 
`
  curl --location 'http://localhost:3000/api/tokens/refresh-token' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0cnVlIiwibGFzdE5hbWUiOiIzMzMiLCJkaXNwbGF5TmFtZSI6InRydWUgMzMzIiwiZW1haWwiOiJ0aHVhbnRvbjk4QGdtYWlsLmNvbSIsImlkIjo0NjUsImlhdCI6MTY5NTg5Mjc3MSwiZXhwIjoxNjk1ODk2MzcxfQ.bIsycxZTxtD-vcoHQhBsU8WsM2wWSeLBs36AuiUugow' \
  --data '{
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0cnVlIiwibGFzdE5hbWUiOiIzMzMiLCJkaXNwbGF5TmFtZSI6InRydWUgMzMzIiwiZW1haWwiOiJ0aHVhbnRvbjk4QGdtYWlsLmNvbSIsImlkIjo0NjUsImlhdCI6MTY5NTg5Mjc5NywiZXhwIjoxNjk4NDg0Nzk3fQ.6TtgGFWwzqjUmeqFWvTtm_ucIBR2sEChfOjdBa3hEpo"
  }'
`
- **Response:** 

`
{
    "success": true,
    "result": {
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0cnVlIiwibGFzdE5hbWUiOiIzMzMiLCJkaXNwbGF5TmFtZSI6InRydWUgMzMzIiwiZW1haWwiOiJ0aHVhbnRvbjk4QGdtYWlsLmNvbSIsImlkIjo0NjUsImlhdCI6MTY5NTg5Mjc5NywiZXhwIjoxNjk4NDg0Nzk3fQ.6TtgGFWwzqjUmeqFWvTtm_ucIBR2sEChfOjdBa3hEpo",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6InVuZGVmaW5lZCB1bmRlZmluZWQiLCJpYXQiOjE2OTU4OTI4MDcsImV4cCI6MTY5NTg5NjQwN30.b22vW5bs9tE6z5cfad6StI3e1TGVzrPqLxZ1Dk4QIPs"
    }
}
`