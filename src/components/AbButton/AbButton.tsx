import React from "react";
import Stack from "@mui/material/Stack";
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
      <Stack spacing={2} direction="row">
        <Button variant={variant} disabled={disabled} onClick={onClick}>
          {label}
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export default AbButton;
