import React from "react";
import { Box, Typography } from "@mui/material";

export default function Preloader() {
  return (
    <Box
      id="preloader"
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      {/* Spinner */}
      <Box
        sx={{
          width: 60,
          height: 60,
          border: "6px solid #F76F30",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          mb: 3,
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />

      {/* Letras animadas */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mb: 2,
        }}
      >
        {["S", "Y", "S", "R", "E", "S", "T"].map((letter, idx) => (
          <Typography
            key={idx}
            sx={{
              fontSize: 24,
              fontWeight: "bold",
              color: "primary.main",
              animation: `fadeBounce 1.2s ease-in-out infinite`,
              animationDelay: `${idx * 0.1}s`,
              "@keyframes fadeBounce": {
                "0%, 80%, 100%": { transform: "scale(0)", opacity: 0 },
                "40%": { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            {letter}
          </Typography>
        ))}
      </Box>

      <Typography sx={{ fontSize: 16, color: "#555" }}>Cargando</Typography>

     
    </Box>
  );
}
