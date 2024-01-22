import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Fetch blogs from the API
    axios.get("http://localhost:5000/blogs").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <Box>
      <Typography variant="h4">All Blogs</Typography>
      <List>
        {blogs.map((blog) => (
          <ListItem key={blog.id}>
            <ListItemText>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BlogList;
