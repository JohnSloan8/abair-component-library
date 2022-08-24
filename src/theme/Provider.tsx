import { ThemeProvider, createTheme } from "@mui/material/styles";
import themes from "./themes";

import type { CustomThemeProviderProps, Themes } from "./types";

function CustomThemeProvider(
  { children }: CustomThemeProviderProps,
  theme: Themes
) {
  return (
    <ThemeProvider theme={createTheme(themes[theme])}>{children}</ThemeProvider>
  );
}

export default CustomThemeProvider;
