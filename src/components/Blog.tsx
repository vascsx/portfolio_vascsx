import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>THE BLOG</h1>
      </header>
      <section className="recent-posts">
        <h2>Recent blog posts</h2>
        <div className="posts-grid">
          <div className="post-card">
            <img src="path/to/image1.jpg" alt="UX review presentations" />
            <div className="post-content">
              <p className="post-date">Sunday, 1 Jan 2023</p>
              <h3>UX review presentations</h3>
              <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              <div className="tags">
                <span className="tag">Design</span>
                <span className="tag">Research</span>
                <span className="tag">Presentation</span>
              </div>
            </div>
          </div>
          <div className="post-card">
            <img src="path/to/image2.jpg" alt="Migrating to Linear 101" />
            <div className="post-content">
              <p className="post-date">Sunday, 1 Jan 2023</p>
              <h3>Migrating to Linear 101</h3>
              <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
              <div className="tags">
                <span className="tag">Design</span>
                <span className="tag">Research</span>
              </div>
            </div>
          </div>
          <div className="post-card">
            <img src="path/to/image3.jpg" alt="Building your API Stack" />
            <div className="post-content">
              <p className="post-date">Sunday, 1 Jan 2023</p>
              <h3>Building your API Stack</h3>
              <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
              <div className="tags">
                <span className="tag">Design</span>
                <span className="tag">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;