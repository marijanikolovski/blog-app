import "./App.css";
import { Link } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/add">Add New Post</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>
  );
}

export default App;
