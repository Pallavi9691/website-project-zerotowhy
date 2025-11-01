import React, { useState } from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Gallery from "../components/Gallery"
import Blog from "../components/Blog"

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 1rem;
`

const Question = styled.div`
  background-color: #f1f5f9;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e2e8f0;
  }
`

const Answer = styled.div`
  background-color: #f8fafc;
  padding: 1rem 1.5rem;
  border-left: 4px solid #3b82f6;
  border-radius: 0 8px 8px 0;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: ${({ open }) => (open ? "block" : "none")};
`

const BlogPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is ZeroToWhy about?",
      answer:
        "ZeroToWhy is a platform that provides courses and resources to help learners understand fundamentals of AI, ML, and other technologies from scratch.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "To enroll, visit the Courses page, select a course, and follow the enrollment instructions. Some courses may require creating an account.",
    },
    {
      question: "Do you provide certificates?",
      answer:
        "Yes, upon successful completion of certain courses, we provide verified certificates.",
    },
    {
      question: "Can I access content offline?",
      answer:
        "Currently, our platform is online-only. However, downloadable resources may be available for some courses.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team via the Contact page or email us directly at support@zerotowhy.com.",
    },
  ]

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <Layout>
        <Blog/>
        <Gallery/>
      <FAQContainer>
        <h1 style={{ textAlign: "center", color: "#0f172a", marginBottom: "2rem" }}>
          ❓ Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </Question>
            <Answer open={openIndex === index}>{faq.answer}</Answer>
          </div>
        ))}
      </FAQContainer>
    </Layout>
  )
}

export default BlogPage
