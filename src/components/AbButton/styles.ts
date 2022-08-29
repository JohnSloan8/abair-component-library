import themes from "../../theme/themes";
import { Themes } from "../../theme/types";
import { AbButtonStyles } from "./types";

const styles: { [name: string]: AbButtonStyles } = {
  voice: {
    color: "primary",
    padding: 2,
    theme: themes.abair as Themes,
  },
};

export default styles;
