import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="main_bar">
        <h1><Link id="clean_text" to="/" >Parker Pond</Link></h1>
        <div className="inner_bar">
          <h2><Link className="inner_bar_link" to="/about_me"> About Me </Link></h2>
          <h2 ><Link className="inner_bar_link" to="/contact_me"> Contact Me</Link></h2>
        </div>
      </div>
    </>
  );
}

// ABOUT ME, MESSAGE ME, HOMEPAGE
