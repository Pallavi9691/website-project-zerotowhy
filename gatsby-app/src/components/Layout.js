import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: #f7f8fa;
    color: #1e293b;
  }
  a {
    text-decoration: none;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
        <Navbar />
    <main>   {children} {/* Allows page content to take full width */}
</main>
    <Footer />
  </>
)

export default Layout
