import React from "react"
import Layout from "../components/Layout"

import Hero from "../components/Hero"
import About from "../components/About"
import Mission from "../components/Mission"
import Gallery from "../components/Gallery"
import Courses from "../components/Courses"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Mission />
    <Gallery />
    <Courses />
    <Blog />

  </Layout>
)

export default IndexPage
