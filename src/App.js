import "./App.css";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ProductList from "./store/ProductList";

function App() {
  return (
    <ProductList />
  );
}

export default App;
