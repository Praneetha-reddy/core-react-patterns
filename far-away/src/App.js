// App Component
// -------------
// The main component for the packing list application.
// Manages the state for all items and provides handlers for adding, deleting, modifying, and clearing items.
// Renders the Form, PackingList, and Stats components.

import { useState } from "react";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

function App() {
  // State: array of packing items
  const [items, setItems] = useState([]);

  // Add a new item to the list
  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  // Delete an item by its id
  function handleDeleteItem(itemId) {
    setItems((prev) => {
      return prev.filter((item) => item.id !== itemId);
    });
  }

  // Toggle the packed status of an item by its id
  function handleModifyItem(itemId) {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    });
  }

  // Clear the entire list after confirmation
  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (!confirm) return;
    setItems([]);
  }

  // Render the main app UI
  return (
    <div className="app">
      <h1>FAR AWAY</h1>
      {/* Form for adding new items */}
      <Form onAddItem={handleAddItem}></Form>
      {/* List of items with sorting and actions */}
      <PackingList
        items={items}
        deleteItem={handleDeleteItem}
        onModifyItem={handleModifyItem}
        onClearList={handleClearList}
      ></PackingList>
      {/* Statistics about packed items */}
      <Stats items={items}></Stats>
    </div>
  );
}

export default App;
