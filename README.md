# API Template with Typescript, Express.js, and Prisma

This README file provides a comprehensive guide to help you get started with the API template using Typescript, Express.js, and Prisma. This template provides a solid foundation for building robust and scalable APIs. By following the instructions below, you will be able to set up the development environment, understand the project structure, and start programming efficiently.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- Node.js
- NPM or Yarn
- Any database engine supported by [Prisma](https://www.prisma.io/docs/concepts/database-connectors)

## Installation

To get started with the API template, follow these steps:

- Clone this repository

  ```
  git clone https://github.com/Halgom/express-typescript-prisma.git
  ```

- Change to the project directory
  
  ```
  cd express-typescript-prisma
  ```

- Install dependencies

  ```
  npm install
  ```

## Project Structure

The project structure is designed to promote modularity and maintainability. Here is an overview of the important files and directories:

```
├── prisma/
│   ├── migrations/        # Database migrations
│   ├── schema.prisma      # Prisma database schema file
│   └── seed.ts            # Database seeding script (optional)
├── src/
│   ├── controllers/       # Contains the API route controllers/handlers
│   ├── middlewares/       # Defines middlewares
│   ├── routes/            # Defines API routes
│   ├── services/          # Business logic layer and external service integration
│   ├── app.ts             # Entry point of the application
│   └── prisma.client.ts   # Prisma client instanciation
└── .env                   # Environment variables
```

## Database Setup

- Create a new PostgreSQL database for your project (for SQLite, the database file is creted automatically)
- Update the database connection URL in the .env file
- Run database migrations using Prisma, if you have a seeding script, it will run automatically :
  ```
  npx prisma migrate dev
  ```

## Start the development server

```
npm run dev
```

## Build the app

```
npm run build
```

## Run the compiled app
```
npm run start
```
