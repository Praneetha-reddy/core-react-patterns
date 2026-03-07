// Import React hooks and child components
import { useState } from "react";
import FriendList from "./Components/FriendList";
import FormSplitBill from "./Components/FormSplitBill";
import FormAddFriend from "./Components/FormAddFriend";

// Initial list of friends with their details
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

/**
 * App component
 * Main application component for Eat-n-Split.
 * Manages the state for friends, selected friend, and form visibility.
 */
function App() {
  // State for the list of friends
  const [friendList, setFriendList] = useState(initialFriends);
  // State to control visibility of the add friend form
  const [isOpen, setIsOpen] = useState(false);
  // State for the currently selected friend
  const [friendSelected, setFriendSelected] = useState(null);

  /**
   * Adds a new friend to the list and closes the add friend form
   * @param {Object} newFriend - The new friend object to add
   */
  function handleAddFriend(newFriend) {
    setFriendList((friendList) => [...friendList, newFriend]);
    setIsOpen((isOpen) => !isOpen);
  }

  /**
   * Handles selecting a friend for splitting the bill
   * If the same friend is clicked again, deselects them
   * @param {Object} friend - The friend object to select
   */
  function handleOpenForm(friend) {
    setFriendSelected((friendSelected) => {
      return friendSelected && friendSelected.id === friend.id ? null : friend;
    });
  }

  /**
   * Updates the balance for the selected friend after splitting the bill
   * @param {number} balance - The new balance for the friend
   */
  function updateFriendBill(balance) {
    setFriendList((friendList) => {
      return friendList.map((friend) =>
        friend.id === friendSelected.id
          ? { ...friend, balance: balance }
          : friend,
      );
    });
    setFriendSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/* Render the list of friends */}
        <FriendList
          friendList={friendList}
          onClickSelect={handleOpenForm}
          friendSelected={friendSelected}
        ></FriendList>
        {/* Show the add friend form if isOpen is true */}
        {isOpen && <FormAddFriend onAddFriend={handleAddFriend} />}
        {/* Button to toggle add friend form */}
        <button
          className="button"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? "Close" : "Add Friend"}
        </button>
      </div>
      {/* Show the split bill form if a friend is selected */}
      {friendSelected !== null && (
        <FormSplitBill
          friendSelected={friendSelected}
          updateFriendBill={updateFriendBill}
        ></FormSplitBill>
      )}
    </div>
  );
}

// Export the App component as default
export default App;
