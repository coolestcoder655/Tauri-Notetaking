import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BrowseFiles from "./pages/BrowseFiles";
import Editor from "./pages/Editor";


// <Route path="/" element={<Home />} />
// <Route path="/editor/:noteId" element={<Editor />} />

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BrowseFiles />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  </BrowserRouter>
);
