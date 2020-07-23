import { colors } from "./colors";
import typography from "./typography";

const theme = {
  colors,
  typography,

  media: {
    phone: "@media (max-width: 480px)",
    littleTablet: "@media (max-width: 768px)",
    tablet: "@media (max-width: 1080px)",
    desktop: "@media (min-width: 1080px)",
  },

  responsive: {
    tablet: "1024px",
    tabletVertical: "768px",
    mobile: "640px",
    mobileMid: "480px",
    mobileVertical: "360px",
  },

  regularSection: "1080px",
};
export default theme;
