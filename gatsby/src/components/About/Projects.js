import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

import {
  Wrapper,
  Link,
  Title,
  Points,
  Point,
  GithubUnderlinedLink
} from "../../components/styled";
import { Section, SectionTitle } from "../../components/styled";

import { projects } from "../../data/projects";

const Projects= props => {

  const { theme } = props;

  return (
    <Section>
      <SectionTitle theme={theme}>Projects 👨‍💻📱</SectionTitle>
      <Wrapper theme={theme}>
        {projects.map(project => (
          <div key={project.title}>
            <Link theme={theme} target="_blank" href={project.link} rel="noopener">
              <Title theme={theme}>{project.title}</Title>
            </Link>
            <Points>
              <Point theme={theme}>
                Type: {project.type}{" "}
                {project.type === "Open Source"
                  ? null
                  : `for ${project.client}`}{" "}
                <GithubUnderlinedLink theme={theme}
                  href={
                    project.github.githubHref === null
                      ? null
                      : project.github.githubHref
                  }
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener"
                >
                  {project.github.name === null ? null : (
                    <FaGithub style={{ fontSize: "30px" }} />
                  )}
                </GithubUnderlinedLink>
              </Point>
              <Point theme={theme}>
                {project.description}{" "}
                {project.extra === null ? null : `${project.extra}`}
              </Point>
              <Point theme={theme}>{project.techStack}</Point>
            </Points>
          </div>
        ))}
      </Wrapper>
    </Section>
  );
};

Projects.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Projects;
