import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from 'gatsby'

import {
  Section,
  SectionTitle
} from "../../components/styled";

const Who = (props) => {
  
  const {
    theme
  } = props;

  return (
    <StaticQuery
      query={
        graphql`
          query WhoQuery {
            who: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "//parts/who/" } }
            ) {
              edges {
                node {
                  html
                }
              }
            }
          }
      `}
      render={ data => (
        <Section id="who">
          <SectionTitle theme={theme}>Who?</SectionTitle>
          {data.who}
        </Section>
      )}
    />
  );
};

Who.propTypes = {
  theme: PropTypes.object.isRequired, // data: PropTypes.object.isRequired
  data: PropTypes.shape({
    who: PropTypes.object.isRequired
  }).isRequired,
};

export default Who;
