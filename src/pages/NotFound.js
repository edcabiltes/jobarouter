import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
    </div>
  );
}