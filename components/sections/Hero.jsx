"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "80vh", md: "90vh" },
        backgroundColor: "transparent",
        backgroundImage: "url('/assets/images/BACKGROUND KEYREST.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // evita parpadeos
      }}
    >
      {/* Contenido central */}
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
          color: "white",
          py: { xs: 8 },
        }}
      >
        {/* Columna de texto */}
        <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
          {/* Título animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "2rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              El mejor Sistema para Gestionar tu Restaurante
            </Typography>
          </motion.div>

          {/* Descripción animada con blur */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
                maxWidth: 500,
              }}
            >
              Optimiza tus operaciones, aumenta tus ventas y deleita a tus clientes
              con la solución todo en uno para la gestión de restaurantes.
            </Typography>
          </motion.div>

          {/* Botón animado */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Button
              variant="outlined"
              color="white"
              size="large"
              href="#features"
              sx={{
                textTransform: "none",
                px: 6,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#F76F30",
                  color: "white",
                },
                py: 1.5,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              Empezar Ahora
            </Button>
          </motion.div>
        </Box>

        {/* Columna de imagen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src="/assets/images/rest.png"
            alt="Hero Image"
            sx={{
              width: { xs: "80%", md: "100%" },
              maxWidth: 600,
            }}
          />
        </motion.div>
      </Container>
    </Box>
  );
}
