// Friend component displays a single friend's information and allows selection.
// Props:
// - friend: Object containing friend's details (name, image, balance, id)
// - onClickSelect: Function to handle selecting/closing a friend
// - friendSelected: Currently selected friend object
export default function Friend({ friend, onClickSelect, friendSelected }) {
  const { name, image, balance } = friend;
  // Calculate absolute balance for display
  const absBalance = Math.abs(balance);
  // Description based on balance:
  //   - Positive: friend owes you
  //   - Zero: even
  //   - Negative: you owe friend
  const description =
    balance > 0
      ? `${name} owes you ${absBalance}`
      : balance === 0
        ? `You and ${name} are even`
        : `You owe ${name} ${absBalance}`;
  // Check if this friend is currently selected
  const isSelected = friendSelected?.id === friend.id;

  return (
    // List item for friend, highlights if selected
    <li className={isSelected && "selected"}>
      {/* Friend's avatar */}
      <img src={image} alt={name} />
      {/* Friend's name */}
      <h3>{name}</h3>
      {/* Balance description, color-coded */}
      <p className={`${balance > 0 ? "green" : balance === 0 ? "" : "red"}`}>
        {description}
      </p>
      {/* Button to select/close friend */}
      <button onClick={() => onClickSelect(friend)} className="button">
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
