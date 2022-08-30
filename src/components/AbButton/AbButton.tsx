import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { AbButtonProps } from "./types";
import styles from "./styles";

const AbButton = ({
  onClick,
  label,
  selected,
  disabled,
  variation = "voice",
}: AbButtonProps) => {
  const style = styles[variation];

  return (
    <ThemeProvider theme={style.theme}>
      <Button
        variant={selected ? "contained" : "outlined"}
        disabled={disabled}
        color="secondary"
        onClick={onClick}
        sx={{ borderColor: !selected && disabled ? "rgba(0,0,0,0)" : null }}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
};

export default AbButton;
