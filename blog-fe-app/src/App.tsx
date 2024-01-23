import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import axios from "axios";
import EditBlog from "./components/EditBlog";

const App: React.FC = () => {
  const handlePublish = (title: string, content: string) => {
    try {
      axios
        .post("http://localhost:5000/blogs", { title, content })
        .then((response) => {
          console.log("Blog published:", response.data);
        });
    } catch (error: any) {
      console.log("Error:", error.message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogForm onPublish={handlePublish} />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
