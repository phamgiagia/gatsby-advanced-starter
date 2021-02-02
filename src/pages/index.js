import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import './index.sass'
import Header from '../components/Header'
import Bottom from "../components/Bottom";

function Home({ data }) {
    
    const postEdges = data.allMarkdownRemark.edges;
    console.log(postEdges)
    return (
        <Layout>
            <div className="landing-container">
                <div className="posts-container">
                    <Helmet title={config.siteTitle} />
                    <SEO />
                </div>
                <PostListing postEdges={postEdges} />
            </div>
        </Layout>
    );
}

export default Home;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
