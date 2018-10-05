import React from "react";
import PropTypes from "prop-types";

import {
  Section,
  SectionTitle
} from "../../components/styled";

const Who = (props) => {
  
  const {
    theme
  } = props;

  // const {
  //   who: { edges: who }
  // } = data;

  return (
    <Section id="who">
      <SectionTitle theme={theme}>Who?</SectionTitle>
      <p>TODO: Who am I?</p>
    </Section>
  );
};

Who.propTypes = {
  theme: PropTypes.object.isRequired // data: PropTypes.object.isRequired
};

export default Who;

//eslint-disable-next-line no-undef
export const whoQuery = graphql`
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
`;