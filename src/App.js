import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
    <h1>My books</h1>
      <nav style={{ borderBottom: "1px solid", paddingBottom: '1rem' }}>
        <Link to="/books">books</Link>{" "} <Link to="/about">about</Link>
      </nav>
        <Outlet />
    </div>
  );
}

export default App;
