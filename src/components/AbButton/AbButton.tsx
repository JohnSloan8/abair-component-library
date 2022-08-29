import React from "react";
import Button from "@mui/material/Button";
import ThemeProvider from "../../theme/Provider";
import { AbButtonProps } from "./types";
import styles from "./styles";

const AbButton = ({
  onClick,
  label,
  variant,
  disabled,
  variation,
}: AbButtonProps) => {
  const style = styles[variation];
  return (
    <ThemeProvider>
      <Button variant={variant} disabled={disabled} onClick={onClick}>
        {label}
      </Button>
    </ThemeProvider>
  );
};

export default AbButton;
