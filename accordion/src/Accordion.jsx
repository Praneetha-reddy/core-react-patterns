// Accordion.jsx: Accordion parent component
// Manages open/close state and renders AccordionItem components
import { useState } from "react";
import AccordionItem from "./AccordionItem";

// Sample curriculum data for the Accordion
const udemyCurriculum = [
  {
    id: 1,
    title: "Section 1: React Fundamentals & Architecture",
    lectures: [
      { id: 101, title: "Welcome to the Course!", duration: "02:15" },
      { id: 102, title: "Understanding the Virtual DOM", duration: "08:42" },
      { id: 103, title: "Components vs. Elements", duration: "12:05" },
    ],
  },
  {
    id: 2,
    title: "Section 2: State and UI Management",
    lectures: [
      { id: 201, title: "Lifting State Up (SDE-2 Pattern)", duration: "15:20" },
      {
        id: 202,
        title: "Controlled vs Uncontrolled Inputs",
        duration: "11:10",
      },
      { id: 203, title: "Immutable Array Updates", duration: "09:35" },
    ],
  },
  {
    id: 3,
    title: "Section 3: Building the 'Far Away' App",
    lectures: [
      {
        id: 301,
        title: "App Architecture & Component Tree",
        duration: "06:50",
      },
      { id: 302, title: "Building the Packing List", duration: "18:22" },
      { id: 303, title: "Derived State & Stats Footer", duration: "14:15" },
    ],
  },
];

// Accordion: Parent component for the FAQ/curriculum accordion
// - Manages which item is open via state
// - Renders a list of AccordionItem components
export default function Accordion() {
  // State: Tracks the currently open item by its id (null means all are closed)
  const [isOpen, setIsOpen] = useState(null);

  // handleToggle: Toggles open/close for a given item id
  // If the clicked item is already open, close it; otherwise, open it
  function handleToggle(id) {
    setIsOpen((isOpen) => (isOpen === id ? null : id));
  }
  // Render the Accordion UI
  // - Each AccordionItem receives its data, toggle handler, open state, and children (lecture list)
  return (
    <div className="accordion">
      <ul>
        {udemyCurriculum.map((item, index) => (
          <AccordionItem
            item={item} // Section data
            number={index + 1} // Section number
            handleToggle={handleToggle} // Toggle handler
            isOpen={isOpen} // Currently open item id
            key={item.id}
          >
            {/* Children: List of lectures for this section */}
            <ul>
              {item.lectures.map((lecture) => (
                <li key={lecture.id}>{lecture.title}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </ul>
    </div>
  );
}
