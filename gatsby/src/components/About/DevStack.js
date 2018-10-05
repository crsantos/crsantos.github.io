import React from "react";
import PropTypes from "prop-types";

import {
  Section,
  SectionTitle,
  ListItem,
  UnorderedList
} from "../../components/styled";

import { devstack } from "../../data/technologies";

const DevStack = props => {

  const { theme } = props;

  return (
    <Section id="dev-stack">
      <SectionTitle theme={theme}>Current dev stack </SectionTitle>
      <UnorderedList>
        {devstack.map(item => <ListItem key={item.name} theme={theme}>{item.name}</ListItem>)}
      </UnorderedList>
    </Section>
  );
};

DevStack.propTypes = {
  theme: PropTypes.object.isRequired
};

export default DevStack;