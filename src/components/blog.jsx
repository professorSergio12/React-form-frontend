import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../css/blog.css'; // Include the updated CSS from the previous answer

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = useCallback(async () => {
    if (loading) return; // Avoid duplicate requests
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _page: page, _limit: 10 }
      });
      setBlogs(prevBlogs => [...prevBlogs, ...response.data]);
      setHasMore(response.data.length > 0); // Check if there are more blogs to load
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, page]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
    fetchBlogs();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="blog-container">
      <h1 className="blog-header">Blogs</h1>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img
              className="blog-card-image"
              src={`https://picsum.photos/seed/${blog.id}/400/200`}
              alt={`Blog ${blog.id}`}
            />
            <div className="blog-card-content">
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <a className="read-more" href="#">Read more</a>
            </div>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}
      {!hasMore && <div className="loading">No more blogs to load</div>}
    </div>
  );
};

export default Blog;
