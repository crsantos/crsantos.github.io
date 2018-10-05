import React from "react";
import DevStack from "../components/About/DevStack";
import Technologies from "../components/About/Technologies";
import Who from "../components/About/Who";
import Social from "../components/About/Social";
import Article from "../components/Article";
import { Timeline } from "../components/styled";

import { ThemeContext } from "../layouts";

import Headline from "../components/Article/Headline";

const AboutMePage = props => {

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="About me" theme={theme} />
            </header>            
            <Timeline>
              <Who theme={theme} />
              <DevStack theme={theme} />
              <Technologies theme={theme} />
              <Social theme={theme} />
            </Timeline>
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

export default AboutMePage;
