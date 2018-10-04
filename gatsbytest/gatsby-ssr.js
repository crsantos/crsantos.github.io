import flush from "styled-jsx/server";

const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const css = flush();

    setHeadComponents([css]);
  }
};

export default onRenderBody;