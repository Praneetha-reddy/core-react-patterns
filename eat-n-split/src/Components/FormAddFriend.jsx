// FormAddFriend component allows users to add a new friend to the list.
// Props:
// - onAddFriend: Function to add a new friend object to the parent state
import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  // State for friend's name input
  const [friendName, setFriendName] = useState("");
  // State for image URL input, default avatar base
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48?u=");

  // Handle form submission to add a new friend
  function handleSubmit(e) {
    e.preventDefault();
    // Validate input fields
    if (!friendName || !imageURL) {
      alert("Input fields cannot be empty");
      return;
    }
    // Generate unique ID for friend
    const uniqueID = crypto.randomUUID();
    // Create new friend object
    const newData = {
      id: uniqueID,
      name: friendName,
      image: `${imageURL}${uniqueID}`,
      balance: 0,
    };
    // Call parent handler to add friend
    onAddFriend(newData);
  }

  return (
    // Form for adding a new friend
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* Friend name input */}
      <label>Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      {/* Image URL input */}
      <label>Image URL</label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      {/* Add button */}
      <Button>Add</Button>
    </form>
  );
}
