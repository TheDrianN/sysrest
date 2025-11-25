import Link from "next/link";
import { Button } from "@mui/material";

export default function ButtonContained({
  text,
  borderRadius = 2,
  href,
  fontWeight,
  size,
  Bgcolor = "#F76F30",
  textColor = "white",
  fontSize = "1rem",
  sx,
}) {
  return href ? (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        size={size}
        sx={{
          textTransform: "none",
          backgroundColor: Bgcolor,
          color: textColor,
          px: 5,
          py: 1.5,
          borderRadius: borderRadius,
          fontSize: { xs: "0.875rem", md: fontSize },
          fontWeight: fontWeight,
          display: "inline-flex", // evita que ocupe 100%
          width: "auto",          // crucial
          "&:hover": {
            backgroundColor: "#F76F30",
            opacity: 0.8,
            color: "white",
          },
          ...sx,
        }}
      >
        {text}
      </Button>
    </Link>
  ) : (
    <Button
      variant="contained"
      size={size}
      sx={{
        textTransform: "none",
        backgroundColor: Bgcolor,
        color: textColor,
        px: 5,
        py: 1.5,
        borderRadius: borderRadius,
        fontSize: { xs: "0.875rem", md: fontSize },
        fontWeight: fontWeight,
        display: "inline-flex",
        width: "auto",
        "&:hover": {
          backgroundColor: "#F76F30",
          opacity: 0.8,
          color: "white",
        },
        ...sx,
      }}
    >
      {text}
    </Button>
  );
}
