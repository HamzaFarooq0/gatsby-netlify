import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Home:React.FC = () => {
  return (
    <Layout>
    <div style={{ color: `purple` }}>
      <h1>Home Gatsby!</h1>
      <p>What a world.</p>
      {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
   
    </div>
    </Layout>
  )
}

export default Home;