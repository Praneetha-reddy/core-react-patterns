// Import the Friend component to render individual friends
import Friend from "./Friend";


/**
 * FriendList component
 * Renders a list of friends using the Friend component.
 *
 * Props:
 * - friendList: Array of friend objects to display
 * - onClickSelect: Function to handle selecting a friend
 * - friendSelected: The currently selected friend
 */
export default function FriendList({
  friendList,
  onClickSelect,
  friendSelected,
}) {
  return (
    <ul>
      {/* Iterate over friendList and render a Friend component for each friend */}
      {friendList.map((friend) => {
        return (
          <Friend
            friend={friend}
            friendSelected={friendSelected}
            onClickSelect={onClickSelect}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}
