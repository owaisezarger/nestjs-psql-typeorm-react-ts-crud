// EditBlog.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

interface EditBlogProps {
  // Add any other props if needed
}

const EditBlog: React.FC<EditBlogProps> = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    // Fetch the blog details using the ID
    axios.get(`http://localhost:5000/blogs/${id}`).then((response) => {
      setBlog(response.data);
    });
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleUpdate = () => {
    // Make an API call to update the blog
    axios.put(`http://localhost:5000/blogs/${id}`, blog).then(() => {
      // Redirect to the blog details page after successful update
      navigate(`/blogs/${id}`);
    });
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        Edit Blog
      </Typography>
      <Box sx={{ width: "50%", m: "auto" }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          name="title"
          value={blog.title}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Content"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          name="content"
          value={blog.content}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          sx={{ mr: 2 }}
        >
          Update
        </Button>
        <Button variant="contained" onClick={() => navigate(`/blogs`)}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default EditBlog;
