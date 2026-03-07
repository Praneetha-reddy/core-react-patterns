// FormSplitBill component allows splitting a bill with a selected friend.
// Props:
// - friendSelected: Object containing selected friend's details (name, balance)
// - updateFriendBill: Function to update friend's balance after splitting
import { useState } from "react";

export default function FormSplitBill({ friendSelected, updateFriendBill }) {
  // State for bill value
  const [bill, setBill] = useState("");
  // State for user's expense
  const [yourExpense, setYourExpense] = useState("");
  // State for bill payer ("You" or friend's name)
  const [billPayer, setBillPayer] = useState("You");

  // Calculate friend's expense as remainder of bill
  const friendExpense = bill - yourExpense;

  // Handle form submission to split bill and update balance
  function handleSplitBill(e) {
    e.preventDefault();
    // Calculate new balance based on who paid
    let currBalance =
      billPayer === "You" ? bill - yourExpense : friendExpense - bill;
    let totalBalance = currBalance + friendSelected.balance;
    updateFriendBill(totalBalance);
  }

  return (
    // Form for splitting bill
    <form className="form-split-bill " onSubmit={handleSplitBill}>
      <h2>Split a bill with {friendSelected.name}</h2>
      {/* Bill value input */}
      <label>Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      {/* Your expense input */}
      <label>Your expense</label>
      <input
        type="number"
        value={yourExpense}
        onChange={(e) => setYourExpense(Number(e.target.value))}
      />
      {/* Friend's expense, calculated and read-only */}
      <label>{friendSelected.name}'s expense</label>
      <input type="text" value={friendExpense} readOnly />
      {/* Select who paid the bill */}
      <label>Who is paying the bill?</label>
      <select value={billPayer} onChange={(e) => setBillPayer(e.target.value)}>
        <option value="You">You</option>
        <option value={friendSelected.name}> {friendSelected.name}</option>
      </select>
      {/* Submit button */}
      <button className="button">Split Bill</button>
    </form>
  );
}
