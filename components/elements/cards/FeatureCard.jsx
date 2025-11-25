"use client";
import * as Icons from "@mui/icons-material";
import { Card, Typography, Box } from "@mui/material";

export default function FeatureCard({ icon, title, description, color, iconColor }) {
  const IconComponent = Icons[icon];

  return (
    <Card
      sx={{
        p: 2,
        width: "100%",
        height: "230px",
        borderRadius: 4,
        boxShadow: 3,
        textAlign: "left",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 8,
        }
      }}
    >
      <Box
        sx={{
          background: color,
          display: "inline-flex",
          p: 2,
          borderRadius: "50%",
          mb: 2,
          transition: "transform .25s ease",
          "&:hover": {
            transform: "scale(1.15)"
          }
        }}
      >
        {IconComponent && (
          <IconComponent sx={{ fontSize: 32, color: iconColor }} />
        )}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Card>
  );
}
