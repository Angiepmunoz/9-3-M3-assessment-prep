import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/search">Search</Link>
      <br/>
      <Link to="/characters">Characters</Link>
    </nav>
  );
}
