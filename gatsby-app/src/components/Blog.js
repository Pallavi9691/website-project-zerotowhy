import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 60px 2rem;
  max-width: 1700px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #111;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2.5rem;
`;

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const BlogCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 500px;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.8rem;
`;

const BlogDesc = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.GATSBY_STRAPI_API_URL}/api/blogs?populate=image`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.map((item) => ({
          id: item.id,
          title: item.title,
          // Extract the description text safely
          description:
            item.description?.[0]?.children?.[0]?.text ||
            "No description available",
          // Get the image URL
          image: item.image?.[0]?.url
            ? `${process.env.GATSBY_STRAPI_API_URL}${item.image[0].url}`
            : null,
        }));
        setBlogs(formatted);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <Section>
      <Title>Blogs</Title>
      <Subtitle>Explore insights in mathematics and physics</Subtitle>

      <BlogContainer>
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            {blog.image && <BlogImage src={blog.image} alt={blog.title} />}
            <BlogContent>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDesc>{blog.description}</BlogDesc>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogContainer>
    </Section>
  );
};

export default Blog;
