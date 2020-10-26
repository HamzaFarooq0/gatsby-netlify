import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import ProductOne from "../components/product1"
import ProductTwo from "../components/product2"
import Main from "../components/main"

const App = () => {
  return (
    <Layout>
      <Router basepath="/product">
        <ProductOne path="/page1" />
        <ProductTwo path="/page2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default App;