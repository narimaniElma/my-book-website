import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import About from "./routes/About";
import Books from "./routes/Books";
import Book from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={<main style={{ padding: "1rem" }}>Welcome</main>}
          />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  chose a book that you want.
                </main>
              }
            />
            <Route path=":id" element={<Book />} />
          </Route>
          <Route
            path="*"
            element={<div style={{ padding: "2rem 1rem" }}>Not found</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
