import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";

interface BlogDetailParams {
  id: string | undefined;
  [key: string]: string | undefined;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<BlogDetailParams>();
  const [blog, setBlog] = useState<{ title: string; content: string } | null>(
    null
  );

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
    <Box>
      <Typography variant="h2">{blog.title}</Typography>
      <Typography variant="body1">{blog.content}</Typography>
    </Box>
  );
};

export default BlogDetail;
