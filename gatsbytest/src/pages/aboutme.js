import React from "react";
import DevStack from "../components/About/DevStack";
import Technologies from "../components/About/Technologies";
import Who from "../components/About/Who";
import Social from "../components/About/Social";
import Article from "../components/Article";
import { RightSideHome } from "../components/styled";

require("core-js/fn/array/find");

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
            <RightSideHome>
              <Who theme={theme} />
              <DevStack theme={theme} />
              <Technologies theme={theme} />
              <Social theme={theme} />
            </RightSideHome>
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

export default AboutMePage;
