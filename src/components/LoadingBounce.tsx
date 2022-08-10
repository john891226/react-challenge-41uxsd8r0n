import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../stores/global/GlobalContext";

function LoadingBounce() {
  const global = useGlobalContext();

  return (
    <>
      {global.state.loading && (
        <Box
          sx={{
            display: "flex",
            position: "fixed",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
          }}
          bgcolor="#e6e8e9ad"
        >
          <CircularProgress size={50} />
        </Box>
      )}
    </>
  );
}

export default LoadingBounce;
