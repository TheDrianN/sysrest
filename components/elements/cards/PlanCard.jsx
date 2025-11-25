"use client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip
} from "@mui/material";

export default function PlanCard({ plan, isPopular = false }) {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      {/* Etiqueta de más popular */}
      {isPopular && (
        <Chip
          label="Recomendado"
          color="warning"
          sx={{
            position: "absolute",
            top: -16,
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: "bold",
            zIndex: 2,
            boxShadow: 2
          }}
        />
      )}

      <Card
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          height: "100%",          // asegura que ocupe todo el espacio del contenedor
          minHeight: { xs: "480px", sm: "420px" }, // mínimo responsive
          boxShadow: isPopular ? 8 : 3,
          border: isPopular ? "2px solid #fa8c16" : "1px solid #eee",
          transition: "transform .25s ease, box-shadow .25s ease",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 12,
          }
        }}
      >
        {/* Encabezado naranja */}
        

        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {plan.nombre}
            </Typography>
          </Box>
          {/* Precio */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "foreground" }}
            >
              S/ {plan.precio.toFixed(2)}
            </Typography>

            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "#a1a1a1" }}
            >
              Precio Regular S/ {plan.precioRegular.toFixed(2)}
            </Typography>
          </Box>

          {/* Características */}
          <Box sx={{ mt: 3 }}>
            {plan.caracteristicas.map((c, idx) => {
              const check = <span style={{ color: "#FA8C16", marginRight: 4 }}>✔</span>;

              if (c.type === "bonus_range") {
                return (
                  <Box key={idx} sx={{ mb: 1 }}>
                    <Typography variant="body1">
                      {check}
                      <span style={{ textDecoration: "line-through", color: "#C62828" }}>
                        {c.original_value}
                      </span>
                      -{c.current_value} {c.text}{" "}
                      <strong>{c.note}</strong>
                    </Typography>
                  </Box>
                );
              }

              return (
                <Typography key={idx} variant="body1" sx={{ mb: 2 }}>
                  {check} {c.text}
                </Typography>
              );
            })}
          </Box>

          {/* Ahorro */}
          <Box
            sx={{
              mt: 3,
              cursor: "pointer",
              backgroundColor: isPopular ? "#E65100" : "#FEF6F4",
              p: 2,
              textAlign: "center",
              borderRadius: 2,
              transition: "background-color .25s ease",
              "&:hover": {
                backgroundColor: isPopular ? "#FF6D00" : "#FEF6F4"
              } 
            }}
          >
            <Typography sx={{ color: isPopular ? "white" : "#E65100", fontWeight: "bold" }}>
              Empezar Ahora
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
