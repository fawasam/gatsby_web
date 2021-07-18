import { Link } from "@reach/router"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({data}) {
  return (
  <Layout>
  <section className={styles.header}> 
    <div>
      <h2>Design</h2>
      <h3>Develop & Deploy</h3>
      <p>UX designer & web developer based in India .</p>
      <Link className={styles.btn} to="/projects">Check Portfolio</Link>
    </div>
    <Img fluid={data.file.childImageSharp.fluid}/>
    {/* <img src="/banner.png" alt="site banner images" style={{maxWidth:"100%"}} /> */}
    
  </section>
  </Layout>
)
}

export const query= graphql `
query banner {
  file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}


`
