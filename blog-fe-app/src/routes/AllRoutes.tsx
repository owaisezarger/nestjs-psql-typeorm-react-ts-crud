import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import EditBlog from "../components/EditBlog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const AllRoutes = () => {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogForm />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
};

export default AllRoutes;
