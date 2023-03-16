import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { Manrope } from "next/font/google";

interface IActionButton extends ButtonProps {
  children?: React.ReactNode;
}

const manropeScript = Manrope({ subsets: ["latin"] });

const style = {
  backgroundColor: "rgb(216, 125, 74)",
  color: "#FFF",
  boxShadow: "none",
  borderRadius: 0,
  fontWeight: "bold",
  paddingBlock: "19px",
  paddingInline: "31px",
  letterSpacing: "1px",
  fontSize: "13px",
  fontFamily: manropeScript.style,

  "&:hover": {
    backgroundColor: "rgb(251, 175, 133)",
    boxShadow: "none",
  },
};

const ActionButton = ({ children }: IActionButton) => {
  return (
    <Button sx={style} variant="contained" className={manropeScript.className}>
      {children}
    </Button>
  );
};

export default ActionButton;
