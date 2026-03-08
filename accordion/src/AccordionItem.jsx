// AccordionItem.jsx: Single item in the Accordion
// Props:
// - item: Section data (id, title, lectures)
// - number: Section number
// - handleToggle: Function to toggle open/close state
// - isOpen: Currently open item id
// - children: Content to render when open (lecture list)
export default function AccordionItem({
  item,
  number,
  handleToggle,
  isOpen,
  children,
}) {
  // Determine if this item is currently open
  const isOpened = isOpen === item.id;
  return (
    <div
      className={`item ${isOpened ? "open" : ""}`}
      onClick={() => handleToggle(item.id)} // Toggle open/close on click
    >
      {/* Section number, padded with 0 if < 10 */}
      <span className="number">{`${number < 10 ? "0" : ""}${number}`}</span>
      {/* Section title */}
      <p className="title">{item.title}</p>
      {/* Icon for expand/collapse (could be dynamic) */}
      <span className="icon">{isOpened ? "-" : "+"}</span>
      {/* Render children (lecture list) only if this item is open */}
      {isOpened && <div className="content-box">{children}</div>}
    </div>
  );
}
