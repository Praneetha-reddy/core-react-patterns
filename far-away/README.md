# Far Away Packing List App

A simple React application to help you organize and track items for your trip. Add, modify, sort, and clear your packing list with ease.

## Purpose

- Organize travel packing efficiently
- Track which items are packed or unpacked
- Demonstrate core React patterns and best practices

## Features

- Add new items with quantity and description
- Mark items as packed/unpacked
- Sort items by input order, description, or packed status
- Delete individual items or clear the entire list
- View statistics on packing progress

## React Patterns & Approaches Used

- **Component Composition:** The app is split into reusable components (`App`, `Form`, `PackingList`, `Item`, `Stats`).
- **State Management with Hooks:** Uses `useState` for local and shared state.
- **Immutability:** State updates (e.g., sorting, adding, deleting) always create new arrays/objects instead of mutating existing state.
- **Controlled Components:** Form fields and select elements are controlled via React state.
- **Derived State:** Statistics (like packed percentage) are computed from current state, not stored separately.
- **Prop Drilling:** Functions and data are passed down as props to child components for communication.
- **Conditional Rendering:** UI changes based on state (e.g., empty list message, packed status message).
- **Event Handling:** Button clicks, form submissions, and input changes are handled with event handlers.
- **Confirmation Dialogs:** Uses `window.confirm` for user confirmation before clearing the list.
- **Separation of Concerns:** Each component has a clear, single responsibility.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation & Build Steps

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd far-away
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```sh
npm run build
```

This will create an optimized production build in the `build/` directory.

## Credits

This project is inspired by and based on the teachings from Jonas Schmedtmann's Udemy React course. Special thanks to Jonas for his clear explanations and practical examples.

## License

This project is for educational purposes.
