import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => {
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Success" />
        <h1>Thank You For Your Submition</h1>
        <p>You Will Recieve and Email With Further Instructions</p>
      </>
    </MuiThemeProvider>
  );
};

export default Success;
