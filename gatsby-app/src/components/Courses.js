import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { fadeInUp } from "../utils/animations"
// Import your course images
import mathImg from "../images/maths.jpg"
import physicsImg from "../images/physics.jpg"


// Styled components
const Section = styled.section`
  padding: 4rem 1rem;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: #1e3a8a;
  }

  p {
    font-size: 0.95rem;
    color: #334155;
    text-align: left;
  }
`


const Courses = () => {
  const courses = [
    {
      title: "Are you afraid of Mathematical Operators",
      desc: "Mathematics isn’t just numbers — it's a language to understand the universe. In this story-driven explainer, we explore how humans evolved from observing natural forces to building powerful systems of thought using mathematical operators. From variables like x and y, to sigma notation (Σ), derivatives (dy/dx), and argmax — each operator is a tool created not to confuse, but to simplify, abstract, and reveal the invisible patterns of nature. Whether you're a student of AI, data science, physics, or just curious about how math works under the hood, this video will change how you view mathematical notation. 🧠 No fear. No formulas thrown at you. Just meaning, story, and clarity",
      image: mathImg,
       slug: "mathematical-operators",
    },
    {
      title: "Exploring the Wonders of Mathematics and Physics",
      desc: "Dive into the fascinating world of mathematics and physics with our engaging blogs. Discover stories that simplify complex concepts and learn about key scientists and their groundbreaking discoveries. Join us on a journey from zero to understanding why these subjects matter.",
      image: physicsImg,
      slug: "math-physics-wonders",
    },
  ]

  return (
    <motion.div
      id="courses"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Section>
        <h2>Our Courses</h2>
        <Grid>
          {courses.map((course, index) => (
            <Card
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </motion.div>
  )
}

export default Courses
