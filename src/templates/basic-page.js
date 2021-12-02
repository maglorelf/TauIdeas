import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";


 import Layout from "../components/layout";
 import Seo from "../components/seo";
 import Content, { HTMLContent } from "../components/content";

// eslint-disable-next-line
export const BasicPageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PageContent = contentComponent ;

  return (
    <section className="section">      
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}  
            </h1>
            <p>{description}</p>
            <PageContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BasicPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};


const BasicPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const siteTitle = post.frontmatter.title || `Title`
  const location = post.fields.slug
  return (
    <Layout location={location} title={siteTitle}>
    <Seo title={siteTitle} />  
     <BasicPageTemplate
       content={post.html}
       contentComponent={HTMLContent}
       description={post.frontmatter.description}
       helmet={
         <Helmet titleTemplate="%s">
           <title>{`${post.frontmatter.title}`}</title>
           <meta
             name="description"
             content={`${post.frontmatter.description}`}
           />
         </Helmet>
       }
       tags={post.frontmatter.tags}
       title={post.frontmatter.title}
     />
   </Layout>
  );
};

BasicPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BasicPage;

export const pageQuery = graphql`
  query basicPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description       
      }
      fields {
        slug
      }
    }
  }
`;
