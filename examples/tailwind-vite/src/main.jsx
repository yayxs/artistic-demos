import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import './main.css'

const TransformScale75 = () => {
  return <div className="relative">
    <div className="absolute"></div>
    <div className="relative z-10 scale-75">
      <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" alt="" />
    </div>
  </div>
};

// const App = () => {
//   return (
//     <div>
//       <TransformScale75></TransformScale75>
//     </div>
//   );
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
