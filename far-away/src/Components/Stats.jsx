// Stats Component
// ---------------
// Displays statistics about the packing list: total items, packed items, and percentage packed.
// Shows a message when all items are packed or when the list is empty.
// Props:
// - items: Array of item objects to analyze

export default function Stats({ items }) {
  // If there are no items, prompt the user to add some
  if (items.length === 0) {
    return (
      <p className="stats">Start adding some items to your packing list</p>
    );
  }

  // Calculate derived statistics
  let numItems = items.length; // Total number of items
  let packedItems = items.filter((item) => item.packed).length; // Number of packed items
  let percentage = Math.floor((packedItems / items.length) * 100); // Percentage packed

  // Show a congratulatory message if all items are packed, otherwise show stats
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything, Ready to go.`
          : `You have ${numItems} items on your list, and You already packed ${packedItems} (${percentage} %)`}
      </em>
    </footer>
  );
}
