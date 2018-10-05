import React from "react";
import PropTypes from "prop-types";

import {
  Section,
  SectionTitle,
  ListItem,
  UnorderedList
} from "../../components/styled";

import { technologies } from "../../data/technologies";

const Technologies = props => {

  const { theme } = props;

  return (
    <Section id="technologies">
      <SectionTitle theme={theme}>Technologies / Tools used 🛠</SectionTitle>
      <UnorderedList>
        <ListItem theme={theme}>
          <p>{technologies.join(", ")}.</p>
        </ListItem>
      </UnorderedList>
    </Section>
  );
};

Technologies.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Technologies;
