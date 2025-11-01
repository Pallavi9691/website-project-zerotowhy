// src/components/Footer.js
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Mail, Phone, Send } from "lucide-react"

const FooterWrapper = styled.footer`
  background-color: #13151dff;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`

const ContactInfo = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #93c5fd;
  }

  p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  svg {
    color: #93c5fd;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
`

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  resize: none;
  height: 100px;
`

const Button = styled.button`
  background-color: #2244a0ff;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #0f121dff;
  }
`

const BottomNote = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #93c5fd;
`

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const Footer = () => {
  return (
    <FooterWrapper>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FooterGrid>
          {/* 🟩 Contact Info */}
          <ContactInfo>
            <h3>Contact Us</h3>
            <p>
              <Mail size={18} /> info@zerotowhy.com
            </p>
            <p>
              <Phone size={18} /> +91 98765 43210
            </p>
            <p>Stay updated with our latest insights and learning resources.</p>
          </ContactInfo>

          {/* 🟦 Contact Form */}
          <ContactForm
            onSubmit={e => {
              e.preventDefault()
              alert("Thanks for contacting us! We’ll get back soon.")
            }}
          >
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Your Message" required />
            <Button type="submit">
              <Send size={18} /> Send Message
            </Button>
          </ContactForm>
        </FooterGrid>

        <BottomNote>
          © {new Date().getFullYear()} ZeroToWhy. All rights reserved.
        </BottomNote>
      </motion.div>
    </FooterWrapper>
  )
}

export default Footer
