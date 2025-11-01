import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

// animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem;
  min-height: 90vh;
  background: linear-gradient(135deg, #6d7075ff, #3a3b3bff); /* blue gradient */
  color: white;
`

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: #e0e7ff;
`

const Button = styled(motion.button)`
  padding: 0.9rem 2rem;
  background-color: #ffffff;
  color: #1e3a8a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #818183ff;
    transform: translateY(-4px);
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        Unlock the Wonders of Science
      </HeroTitle>

      <HeroSubtitle
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        Explore engaging blogs and videos on mathematics, physics, and groundbreaking discoveries.
      </HeroSubtitle>

      <Button
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        onClick={() => {
          window.location.href = "/courses";
        }}
      >
        Explore Courses
      </Button>
    </HeroSection>
  )
}

export default Hero
