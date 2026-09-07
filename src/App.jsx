import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import PostDetail from "./pages/PostDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
