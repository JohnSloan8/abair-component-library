import { Themes } from "../../theme/types";

interface AbButtonProps {
  disabled: boolean;
  label: string;
  variant: "text" | "outlined" | "contained" | undefined;
  variation: "voice";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface AbButtonStyles {
  color: string;
  padding: number;
  theme: Themes;
}

export type { AbButtonProps, AbButtonStyles };
