# Eat-n-Split

Eat-n-Split is a React application designed to help users manage shared expenses among friends. The app allows users to add friends, select a friend, and split bills, updating balances accordingly.

## Features

- **Add Friends:** Easily add new friends to your list with their name and avatar.
- **Select Friend:** Click on a friend to select them for splitting a bill.
- **Split Bill:** Enter bill details and split the amount, updating the balance for the selected friend.
- **Dynamic UI:** Responsive interface with sidebar for friend management and main area for bill splitting.

## Concepts Learned

### 1. React Component Structure

- Built reusable components: `FriendList`, `Friend`, `FormAddFriend`, `FormSplitBill`, and `App`.
- Used props to pass data and functions between components.

### 2. State Management

- Utilized `useState` hook to manage lists, selected friend, and form visibility.
- Lifted state up to the `App` component for centralized control.

### 3. Conditional Rendering

- Rendered forms and components based on state (e.g., show add friend form or split bill form).

### 4. Event Handling

- Handled user actions like adding friends, selecting friends, and splitting bills with callback functions.

### 5. Data Flow

- Demonstrated unidirectional data flow: parent components manage state and pass it down to children.

### 6. Key Prop Usage

- Used unique `key` props when rendering lists to optimize React rendering.

## How It Works

1. **Add a Friend:** Click "Add Friend" and fill out the form. The friend is added to the sidebar list.
2. **Select a Friend:** Click on a friend to select them. The split bill form appears.
3. **Split a Bill:** Enter the bill amount and who paid. The balance updates for the selected friend.

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the app.

## Folder Structure

- `src/Components/` - Contains all React components.
- `src/App.js` - Main application logic.
- `public/` - Static assets and HTML template.

## License

This project is for educational purposes.

## Credits

This project is inspired by Jonas Schmedtmann's React course. Special thanks to Jonas for his clear teaching and practical examples.
