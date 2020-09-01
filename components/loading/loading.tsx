import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

const Loading = ({ text = "" }) => {
  return (
    <div
      style={{
        transition: "opacity 2s ease-out",
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: "center",
        width: "inherit",
        backgroundColor: "transparent !important",
      }}
    >
      <CircularProgress
        size="10%"
        color="primary"
        thickness={2}
        variant="indeterminate"
      />

      <Typography variant="h6" style={{ color: "#fff" }}>
        {text || ""}
      </Typography>
    </div>
  );
};
export default Loading;
