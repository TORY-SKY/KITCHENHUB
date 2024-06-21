import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Route path="/" element={<Header />}></Route>;
    </>
  );
}

export default App;
