import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from 'gatsby'

import {
  Section,
  SectionTitle
} from "../../components/styled";

const Who = (props) => {
  
  const {
    theme
  } = props;

  return (
    <StaticQuery query={graphql`
      query WhoQuery {
        who: markdownRemark(
          fileAbsolutePath: { regex: "//parts/who/" }
        ) {
          html
        }
      }
    `}
      render = { data => {

          const {
            who: { html: whoHTML },
          } = data;

          return (
            <Section id="who">
              <SectionTitle theme={theme}>Who?</SectionTitle>
              <div className="bodytext" dangerouslySetInnerHTML={{ __html: whoHTML }} />
            </Section>
          )
        }
      }
    />
  );
};

Who.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.shape({
    edges: PropTypes.shape({
      node: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired
};



export default Who;