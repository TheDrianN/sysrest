"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SunatSection = () => {
  // Intersection Observer
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
          backgroundColor: "#f0eded",
          width: "100%",
          height: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ px: 2 }}>
          {/* TÍTULO PRINCIPAL */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "foreground",
              fontSize: { xs: "1.8rem", md: "2rem" },
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            Emite Comprobantes Electrónicos Sin Complicaciones
          </Typography>

          {/* SUNAT + TEXTO */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mb: 1.5,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#2563EB",
                fontSize: { xs: "1rem", md: "1.1rem" },
                opacity: 0.9,
              }}
            >
              Autorizados por
            </Typography>

            <Box
              component="img"
              src="/assets/images/sunatlogo.png"
              alt="Sunat"
              sx={{
                width: 100,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* SUBTEXTO */}
          <Typography
            variant="body2"
            sx={{
              color: "foreground",
              opacity: 0.7,
              fontSize: { xs: "0.85rem", md: "1rem" },
            }}
          >
            Certificación oficial para facturación electrónica
          </Typography>
        </Container>
      </Box>
    </motion.div>
  );
};

export default SunatSection;
