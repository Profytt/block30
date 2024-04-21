import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchBooks from "./components/Books";
import bookLogo from "./assets/books.png";
import Navigation from "./components/Navigations";
import HomePage from "./components/HomePage";

function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<FetchBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
