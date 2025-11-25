"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import ButtonContained from "../elements/butons/ButtonContained";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CustomSolutionsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        component="section"
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 }, // padding vertical responsivo
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            p: { xs: 3, md: 5 },
          }}
        >
          <Grid container spacing={3} alignItems="center">
            {/* Columna izquierda */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  mb: 2,
                }}
              >
                ¿Necesitas más?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  opacity: 0.7,
                }}
              >
                Brindamos soluciones de software a medida para empresas públicas y privadas.
              </Typography>
            </Grid>

            {/* Columna derecha */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <ButtonContained
                text="Contáctanos"
                fontWeight="bold"
                href="#contact"
                size="large"
                Bgcolor="white"
                textColor="#F76F30"
                fontSize="1rem"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default CustomSolutionsSection;
