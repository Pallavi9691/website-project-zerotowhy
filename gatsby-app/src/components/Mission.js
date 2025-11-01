// src/components/Mission.js
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import missionImg from "../images/mission.jpg" // 🖼️ Make sure this image exists in /src/images/

const Section = styled.section`
  background: #f9fafb;
  padding: 6rem 2rem;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
`

const TextContainer = styled(motion.div)`
  flex: 1 1 500px;

  h2 {
    font-size: 2rem;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #374151;
    line-height: 1.7;
  }
`

const ImageContainer = styled(motion.div)`
  flex: 1 1 400px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 480px;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;
  }

  img:hover {
    transform: scale(1.03);
  }
`

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const Mission = () => {
  return (
    <Section id="mission">
      <Container>
        {/* 🟩 Text Section */}
        <TextContainer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower learners with a strong foundation in math and science — 
            the core building blocks of Artificial Intelligence and Machine Learning. 
            We aim to simplify complex topics into easy-to-understand concepts and 
            inspire curiosity that leads to innovation.
          </p>
        </TextContainer>

        {/* 🟦 Image Section */}
        <ImageContainer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={missionImg} alt="Our Mission" />
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default Mission
