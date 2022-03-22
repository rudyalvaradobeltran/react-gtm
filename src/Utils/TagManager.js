import TagManager from "react-gtm-module";

export const args = {
  gtmId: "",
};

export const init = (args) => {
  TagManager.initialize({ args });
};

export const createDataLayer = (event, path, user) => {
  TagManager.dataLayer({
    dataLayer: {
      event,
      path,
      user,
    },
  });
};
