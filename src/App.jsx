// NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import NavigationBar from "components/NavigationBar";
import Category from "pages/Category";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Product from "pages/Product";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:category" element={<Category />} />
          <Route path="/product/:product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
