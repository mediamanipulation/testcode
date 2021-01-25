import React from "react";
import ReactDOM from "react-dom";
import Documentation from './pages/Documentation'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Documentation/>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

export default App;
