import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";

// eslint-disable-next-line
export const BasicPageTemplate = ({  data, location  }) => {
  const post = data.markdownRemark    
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {siteTitle}
              </h2>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

BasicPageTemplate.propTypes = {
  data: PropTypes.string,  
  location: PropTypes.string.isRequired,
};

const BasicPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BasicPageTemplate
       
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

BasicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BasicPage;

export const basicPageQuery = graphql`
  query BasicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
