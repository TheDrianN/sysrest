"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { preguntas } from "@/data/preguntas";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box component="section" id="faq" sx={{ width: "100%", py: 8, px: 2, color: "foreground" }}>
      <Container maxWidth="lg">
        {/* Contenedor animado del título y descripción */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 1,
            }}
          >
            Preguntas y respuestas más frecuentes
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              opacity: 0.7,
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.05rem" },
              mb: 4,
            }}
          >
            Encuentra aquí las respuestas a las dudas más comunes sobre SYSREST,
            su uso, configuración y beneficios para tu negocio gastronómico.
          </Typography>
        </motion.div>

        {/* ACCORDIONS con animación individual */}
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          {preguntas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Accordion
                disableGutters
                elevation={0}
                sx={{ backgroundColor: "transparent" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 3,
                    py: 2,
                    "& .MuiAccordionSummary-content": {
                      fontWeight: 600,
                      fontSize: "1.05rem",
                    },
                  }}
                >
                  {item.pregunta}
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: 3,
                    pb: 2,
                    opacity: 0.85,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.respuesta}
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
