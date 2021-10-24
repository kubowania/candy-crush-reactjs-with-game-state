# Candy Crush In React

This project is in support of the video tutorials found [here for Part 1](https://www.youtube.com/watch?v=PBrEq9Wd6_U) and Part 2 coming soon. In Part 1 we creact the ReactJS game, and in Part 2 we connect to a database in order to be able to save highscores.

## To start this project

In the project directory, you need to:

### `npm i `

Install all the packages

### create a `.env` file

Create a .env file in the root of your project and get the following token from Datastax Astra.

```
ASTRA_TOKEN={astra_token)
URL={astra_url}
```

### `npm run start:backend `

Starts the backend. This part is needed if you want to be able to get all the saved high scores and be able to add new ones.\

### `npm run start:frontend `

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
