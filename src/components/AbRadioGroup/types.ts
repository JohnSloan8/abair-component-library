interface AbRadioGroupProps {
  name: string;
  getter: string;
  setter: () => void;
  options: string[];
  variation: "large" | "small";
}

interface AbRadioGroupStyles {
  typography: "body1" | "body2" | "h6" | "h5";
  buttonSize: "medium" | "small";
}

export type { AbRadioGroupProps, AbRadioGroupStyles };
