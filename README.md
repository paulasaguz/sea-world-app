## Welcome to Sea World App

### Challenge:

In this challenge, we want you to create a web application with React in which the user will be
presented with a small sea world where the user can build islands.
This tiny world will be represented by a grid that starts as all sea and then the user can click on
the world and add or remove land and create tiny islands. The user will need to be able to
change the size of this tiny world and have data displayed about this world.

### `Description:`

<img src="src/assets/grid.png" alt="My cool logo"/>

In this app you will find a fun game to build a grid with the columns and rows that are required in the principal path, from there you will be redirected to our beautiful sea map where you can create all the islands that you want, you will also find a counter of the existing islands.

<img src="src/assets/config.png" alt="My cool logo"/>

if you want to change the distribution between rows and columns you can do it from the path `http://localhost:3000/grid?columns={columnValue}&rows={rowValue}`

### `Features`

- Create the sea grid with a dinamical values of rows and columns
- Build Islands when the user click on the cell
- Island counter following the instructions
- Random color for the Islands

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
