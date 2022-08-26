import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { useState } from "react";
import { AbRadioGroupProps } from "./types";

const AbRadioGroup = ({
  name = "synthesis",
  getter = "male",
  handleChangeEvent = (e) => {
    console.log("setter fired");
  },
  options = ["male", "female"],
  variation = "large",
}: AbRadioGroupProps) => {
  const style = styles[variation];
  const [val, setVal] = useState(getter);
  handleChangeEvent = (e) => {
    setVal(e.target.value);
  };
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ typography: style.typography }}
      >
        {name}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={val}
        onChange={(e) => {
          handleChangeEvent(e);
        }}
      >
        {options.map((o: string, i: number) => (
          <FormControlLabel
            key={i}
            value={o}
            control={<Radio size={style.buttonSize} />}
            label={<Typography fontSize={style.buttonSize}>{o}</Typography>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default AbRadioGroup;
