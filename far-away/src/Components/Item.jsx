// Item Component
// --------------
// Renders a single packing list item with a checkbox to toggle packed status,
// a description with quantity, and a delete button.
// Props:
// - item: The item object to display
// - deleteItem: Function to delete this item
// - onModifyItem: Function to toggle packed status

export default function Item({ item, deleteItem, onModifyItem }) {
  return (
    <li>
      {/* Checkbox to toggle packed status */}
      <input type="checkbox" onChange={() => onModifyItem(item.id)}></input>
      {/* Show item description and quantity, strike through if packed */}
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      {/* Button to delete this item */}
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
