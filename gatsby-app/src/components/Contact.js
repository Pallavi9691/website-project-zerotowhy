import React from "react"
import styled from "styled-components"

const Section = styled.section`
  padding: 4rem 1rem;
  background: #f1f5f9;
  text-align: center;
`

const Contact = () => (
  <Section id="contact">
    <h2>Contact Us</h2>
    <p>info@mysite.com</p>
    <p>+91 98765 43210</p>
  </Section>
)

export default Contact
