import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface IActionButton extends ButtonProps {
  // text?: String;
  children?: React.ReactNode;
}

const ActionButton = ({ children }: IActionButton) => {
  return (
    <Button
      sx={{
        backgroundColor: "rgb(216, 125, 74)",
        color: "#FFF",
        boxShadow: "none",
        borderRadius: 0,
        "&:hover": {
          backgroundColor: "rgb(251, 175, 133)",
          boxShadow: "none",
        },
      }}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default ActionButton;
