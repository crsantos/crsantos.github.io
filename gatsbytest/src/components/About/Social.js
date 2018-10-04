import React from "react";

import PropTypes from "prop-types";

import config from "../../../content/meta/config";

import { FaGithub } from "react-icons/fa/";
import { FaFacebook } from "react-icons/fa/";
import { FaTwitter } from "react-icons/fa/";
import { FaLink } from "react-icons/fa/";

import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../components/styled";

const Social = props => {

  const { theme } = props;

  const SocialIcon = props => {

    const { type, size } = props;

    switch (type) {

      case 'github':
        return <FaGithub size={size} />
      case 'twitter':
        return <FaTwitter size={size} />
      case 'facebook':
        return <FaFacebook size={size} />
      default:
        return <FaLink size={size} />
    }
  }

  return (
    <Section id="Social">
      <SectionTitle theme={theme}>Where can you find me?</SectionTitle>
      <UnorderedList>
        {config.authorSocialLinks.map(link => (
          <ListItem key={link.url} theme={theme}>
            <UnderlinedLink theme={theme} target="_blank" href={link.url} rel="noopener">
            <SocialIcon type={link.name} size={18}/>
            {link.name}
            </UnderlinedLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
};

Social.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Social;