import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function Menu({ navigation }) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {navigation.map((item, index) => {
        const isHash = item.path.startsWith("#"); // link interno

        return isHash ? (
          <Button
            key={index}
            component="a"
            href={item.path}
            sx={{
              textTransform: "none",
              color: "#FFFFFF",          // texto blanco
              fontWeight: "bold",
              fontSize: "0.9rem",
              transition: "color 0.3s, transform 0.2s",
              "&:hover": {
                color: "#000000",        // texto negro al hover
                transform: "scale(1.05)",
              },
            }}
          >
            {item.name}
          </Button>
        ) : (
          <Button
            key={index}
            component={Link}
            href={item.path}
            sx={{
              textTransform: "none",
              color: "#FFFFFF",          // texto blanco
              fontWeight: "bold",
              fontSize: "0.9rem",
              transition: "color 0.3s, transform 0.2s",
              "&:hover": {
                color: "#000000",        // texto negro al hover
                transform: "scale(1.05)",
              },
            }}
          >
            {item.name}
          </Button>
        );
      })}
    </Box>
  );
}
