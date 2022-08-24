import { Themes } from "../../theme/types";

interface CardStyles {
  titleVariant: "h5" | "h6";
  color: string;
  padding: number;
  bottom?: number;
  minWidth: number;
  maxWidth: number;
  image: string;
  theme: string;
}

interface AbClickableCardProps {
  image?: string;
  title?: string;
  description?: string;
  handleClickEvent?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  variation: "main" | "app";
  theme: Themes;
}

export type { CardStyles, AbClickableCardProps };
