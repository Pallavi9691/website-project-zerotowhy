import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import aboutImage from "../images/about.jpg" // 👈 Add your image here (place it in src/images/)

const Hero = styled.section`
  background-color: #f3f4f6;
  padding: 6rem 2rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #334155;
`

// 🟦 About Section
const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const AboutImage = styled(motion.img)`
  width: 420px;
  max-width: 90%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
`

const AboutText = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  color: #334155;
`

const AboutTitle = styled.h2`
  color: #1e3a8a;
  font-size: 2rem;
  margin-bottom: 1rem;
`

const AboutParagraph = styled.p`
  line-height: 1.8;
  font-size: 1.1rem;
`

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const IndexPage = () => (
  <>
    {/* 🟨 Hero */}
    <Hero>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Title>Learn AI, ML, and More</Title>
        <Subtitle>Master the fundamentals of Maths & Science</Subtitle>
      </motion.div>
    </Hero>

    {/* 🟩 About Section */}
    <AboutSection>
      <AboutImage
        src={aboutImage}
        alt="About ZeroToWhy"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <AboutText
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutTitle>About Us</AboutTitle>
        <AboutParagraph>
          At <strong>ZeroToWhy</strong>, we are passionate about helping
          students master the essential fundamentals of Mathematics and Science
          that serve as the foundation for Artificial Intelligence and Machine
          Learning.
          <br />
          <br />
          Our mission is to make complex topics simple and engaging, enabling
          every learner to go from zero to “why” with confidence.
        </AboutParagraph>
      </AboutText>
    </AboutSection>

  </>
)

export default IndexPage
