"use client";

import PlanCard from "../elements/cards/PlanCard";
import { planes } from "@/data/planes";
import { Grid, Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PricingSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box component="section" id="pricing" sx={{ mb: 2 }}>
        <Container sx={{ py: 8 }}>
          {/* Título y descripción */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#000000",
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2rem" },
              }}
            >
              Planes diseñados para crecer contigo
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              Elige el plan que mejor se adapte a tus necesidades y comienza a crecer.
            </Typography>
          </Box>

          {/* Grid de planes */}
          <Grid container spacing={4}>
            {planes.map((plan, index) => (
              <Grid item key={plan.id} size={{ xs: 12, sm: 6, md: 4 }}>
                {/* Animación individual por tarjeta */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                >
                  <PlanCard plan={plan} isPopular={plan.id === 2} />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Mensaje de oferta debajo */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#FF6600",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              "Oferta exclusiva por lanzamiento Noviembre 2025"
            </Typography>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}
