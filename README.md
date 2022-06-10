# filmonk-backend-assessment

This is a basic server used store and retrive posts from the backend built with express and mongodb.

### Prerequisites

- Ensure you have mongodb server installed on your local machine and it is configured to run as a service or download here [Mongodb](https://www.mongodb.com/try/download/community)

- Ensure you have node and npm installed as the server is built using the Javascript runtime engine `node`

### Steps To Start The server

- Clone the project locally to your machine

- Run the `npm install` command to download the `node_modules` required

- Run the `npm run dev` script to start the server locally

## API Reference

#### Get all posts

```http
  GET localhost:8080/getDetails
```

#### Add a post

```http
  POST localhost:8080/getDetails
```

| Body   | Type     | Description  |
| :----- | :------- | :----------- |
| `name` | `string` | **Required** |
| `age`  | `Number` | **Required** |

### Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Adetayo1999/filmonk-backend-assessment my-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
