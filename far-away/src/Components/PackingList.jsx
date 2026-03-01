// PackingList Component
// ---------------------
// This component displays a list of packing items, allows sorting by input order, description, or packed status,
// and provides actions to modify, delete, or clear items. It ensures sorting is done immutably for React best practices.
// Props:
// - items: Array of item objects to display
// - deleteItem: Function to delete an item
// - onModifyItem: Function to modify an item
// - onClearList: Function to clear all items

import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  deleteItem,
  onModifyItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  // Determine the sorted list based on the selected sort option
  let sortedItems;

  if (sortBy === "input") {
    // No sorting, show items in the order they were input
    sortedItems = items;
  } else if (sortBy === "description") {
    // Create a new array and sort alphabetically by description
    // Using spread operator to avoid mutating the original array (React best practice)
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description),
    );
  } else {
    // Sort by packed status (boolean): true (1) comes before false (0)
    // [...items] ensures we do not mutate the original array
    sortedItems = [...items].sort((a, b) => b.packed - a.packed);
    // If you want false (unpacked) items first, use: (a, b) => a.packed - b.packed
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              onModifyItem={onModifyItem}
            ></Item>
          );
        })}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input" key="input">
            Sort By Input Order
          </option>
          <option value="description" key="description">
            Sort By Description
          </option>
          <option value="packed" key="packed">
            Sort By Packed Status
          </option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
