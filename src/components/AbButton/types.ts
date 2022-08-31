import { Themes } from "../../theme/types";

interface AbButtonProps {
  disabled?: boolean;
  label: string;
  selected: boolean;
  variation: "voice";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface AbButtonStyles {
  color: string;
  theme: Themes;
}

export type { AbButtonProps, AbButtonStyles };
