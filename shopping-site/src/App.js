import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
// components
import Nav from "./components/navigation/Nav";
import Hero from "./components/hero/Hero";
import Products from "./components/product/Products";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route path="/" exact component={Hero} />
      <Route path="/" component={Products} />
    </div>
  );
}

export default App;
