// Form Component
// --------------
// Renders a form to add new items to the packing list.
// Manages local state for quantity and description, and calls onAddItem with a new item object.
// Props:
// - onAddItem: Function to add a new item to the list

import { useState } from "react";

function Form({ onAddItem }) {
  // State for the quantity and description fields
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return; // Prevent adding empty items
    const newItem = {
      id: Date.now(), // Unique id for the item
      description,
      quantity,
      packed: false, // New items are not packed by default
    };

    onAddItem(newItem); // Call parent handler
    // Reset form fields
    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      {/* Dropdown to select quantity (1-20) */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      {/* Input for item description */}
      <input
        placeholder="Item.."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></input>
      {/* Button to add the item */}
      <button>ADD</button>
    </form>
  );
}

export default Form;
