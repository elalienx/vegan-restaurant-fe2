// NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Category from "pages/Category";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Product from "pages/Product";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
