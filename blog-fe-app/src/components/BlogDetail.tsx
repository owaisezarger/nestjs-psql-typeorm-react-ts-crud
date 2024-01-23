import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";

interface BlogDetailParams {
  id: string | undefined;
  [key: string]: string | undefined;
}

interface Blog {
  title: string;
  content: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<BlogDetailParams>();
  const [blog, setBlog] = useState<Blog | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch individual blog from the API
    axios.get(`http://localhost:5000/blogs/${id}`).then((response) => {
      setBlog(response.data);
    });
  }, [id]);

  if (!blog) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box sx={{ m: "auto", width: "80%" }}>
      <Button
        variant="outlined"
        sx={{ mt: 1 }}
        onClick={() => navigate("/blogs")}
      >
        Back
      </Button>
      <Typography variant="h2" sx={{ textAlign: "center", mt: 2 }}>
        {blog.title}
      </Typography>
      <Typography variant="body1" sx={{ border: "1px solid black", p: 2 }}>
        {blog.content}
      </Typography>
    </Box>
  );
};

export default BlogDetail;
