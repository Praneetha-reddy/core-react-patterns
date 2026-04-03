# Classy Weather

## Purpose

Classy Weather is a simple React application that allows users to search for a location and view the upcoming weather forecast. It demonstrates how to build a weather dashboard using class-based React components, fetch data from public APIs, and manage user input with debouncing for a smooth user experience.

## Concepts Used

- **React Class Components**: The app is built using class-based components (`App`, `Cards`, `Card`).
- **State Management**: Uses component state to manage user input, loading, error, and weather data.
- **Lifecycle Methods**: Employs `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` for side effects and cleanup.
- **Debouncing**: Implements debouncing with `setTimeout` and `clearTimeout` to avoid excessive API calls while the user types.
- **API Fetching**: Fetches geocoding and weather data from the Open-Meteo APIs.
- **Local Storage**: Persists the last searched location using `localStorage`.
- **Error Handling**: Handles API/network errors and displays user-friendly messages.
- **Component Composition**: Breaks UI into reusable components (`Cards`, `Card`).

## Best Practices

- **Separation of Concerns**: Logic for fetching, formatting, and displaying data is separated into functions and components.
- **Edge Case Handling**: Handles empty/short/invalid input, API errors, and cleans up timers to prevent memory leaks.
- **Accessibility**: Uses semantic HTML and clear input placeholders.
- **Code Comments**: Includes detailed comments explaining the purpose and edge cases of each component.
- **Performance**: Debounces API calls and uses unique keys for list rendering.

## Credits

This project is inspired by and based on the React course by Jonas Schmedtmann. For more in-depth React learning, check out his excellent course materials and tutorials.

---

_Developed as a learning project. Weather data provided by [Open-Meteo](https://open-meteo.com/)._

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
