import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handlePublish = (title: string, content: string): void => {
    try {
      axios
        .post("http://localhost:5000/blogs", { title, content })
        .then((response) => {
          console.log("Blog published:", response.data);
          setTitle("");
          setContent("");
        });
    } catch (error: any) {
      console.log("Error:", error.message);
    }
  };

  const handleRedirect = () => {
    navigate("/blogs");
  };

  return (
    <Box sx={{ width: "50%", m: "auto", textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRedirect}
          sx={{ ":hover": { bgcolor: "darkcyan" }, mt: "1em" }}
        >
          All Blogs
        </Button>
      </Box>
      <Typography variant="h4">Create a Blog</Typography>

      <Box>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ my: "1em" }}
        />
      </Box>
      <Box>
        <TextField
          label="Content"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ mb: "1em" }}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handlePublish(title, content)}
      >
        Publish
      </Button>
    </Box>
  );
};

export default BlogForm;
