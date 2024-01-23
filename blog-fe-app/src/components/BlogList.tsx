import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    // Navigate to the edit page or show a modal
    navigate(`/edit-blog/${id}`);
  };

  const handleDelete = (id: number) => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmDelete) {
      // Call the backend API to delete the blog

      try {
        axios.delete(`http://localhost:5000/blogs/${id}`).then(() => {
          // Update the blogs state after successful deletion
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
        });
      } catch (error: any) {
        console.error("error", error.message);
      }
    }
  };

  useEffect(() => {
    // Fetch blogs from the API
    axios.get("http://localhost:5000/blogs").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <Box sx={{ textAlign: "center", mt: 1 }}>
      <Button variant="outlined" sx={{ mr: 80 }} onClick={() => navigate("/")}>
        Back
      </Button>
      <Typography variant="h4">All Blogs</Typography>
      <List
        sx={{
          border: "1px solid darkblue",
          borderRadius: "5px",
          width: "50%",
          m: "auto",
        }}
      >
        {blogs.map((blog) => (
          <ListItem key={blog.id}>
            <ListItemText>
              Topic: <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </ListItemText>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(blog.id)}
              sx={{ mr: "10px" }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BlogList;
