/**
 * NavigationBar
 * Simple wrapper for navigation/header content.
 * Props:
 * - children: React nodes to render inside the nav bar.
 */
export default function NavigationBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
