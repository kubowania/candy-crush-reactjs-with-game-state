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


### MIT Licence

Copyright (c) 2020 Ania Kubow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*Translation: Ofcourse you can use this for you project! Just make sure to say where you got this from :)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
