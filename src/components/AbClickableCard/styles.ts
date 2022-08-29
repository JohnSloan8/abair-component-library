import themes from "../../theme/themes";
import { Themes } from "../../theme/types";
import { AbClickableCardStyles } from "./types";

const styles: { [name: string]: AbClickableCardStyles } = {
  main: {
    titleVariant: "h6",
    color: "primary",
    padding: 2,
    bottom: 0,
    minWidth: 280,
    maxWidth: 280,
    image: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
    theme: themes.abair as Themes,
  },
  app: {
    titleVariant: "h6",
    color: "secondary",
    padding: 1,
    bottom: undefined,
    minWidth: 164,
    maxWidth: 164,
    image: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
    theme: themes.abair as Themes,
  },
  sCapp: {
    titleVariant: "h6",
    color: "secondary",
    padding: 1,
    bottom: undefined,
    minWidth: 164,
    maxWidth: 164,
    image: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
    theme: themes.scéalaí as Themes,
  },
};

export default styles;
