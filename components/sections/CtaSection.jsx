"use client";

import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import ButtonContained from "../elements/butons/ButtonContained";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CtaSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      component="section"
      sx={{
        backgroundImage: "url('/assets/images/fondo 2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        color: "white",
        mt: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" ref={ref} spacing={4}>
          {/* Columna izquierda */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Box sx={{ textAlign: "center", p: { xs: 5, md: 2 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 1,
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  ¿Buscas ahorrar más?
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.1rem" } }}
                >
                  Hazte con un PLAN ANUAL y{" "}
                  <span style={{ fontWeight: "bold" }}>
                    disfruta un 20% de ahorro extra todo el año
                  </span>
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <ButtonContained
                    text="Quiero mi Descuento"
                    fontWeight="bold"
                    href="#"
                    size="large"
                    Bgcolor="white"
                    textColor="#F76F30"
                    fontSize="1rem"
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Columna derecha */}
          <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/assets/images/chef.png"
                  alt="Chef"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    transform: "scaleX(-1)",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CtaSection;
