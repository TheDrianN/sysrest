"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import FeatureCard from "../elements/cards/FeatureCard";
import { caracteristicas } from "@/data/caracteristicas";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FeaturesCarousel() {
  // Autoplay plugin
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  // Carrusel config
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      skipSnaps: false,
    },
    [autoplay.current]
  );

  // Intersection Observer para animación
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box component="section" id="features" sx={{ mb: 3, mt: 3 }}>
      <Container>
        {/* Contenedor animado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box width="100%" textAlign="center">
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={1}
              sx={{ color: "foreground", fontSize: { xs: "1.8rem", md: "2rem" } }}
            >
              ¿Por qué elegir SYSREST?
            </Typography>

            <Typography
              variant="body1"
              mb={4}
              sx={{ color: "foreground", opacity: 0.7, maxWidth: 600, mx: "auto", fontSize: { xs: "0.95rem", md: "1rem" } }}
            >
              SYSREST hace tu trabajo más fácil, tu equipo más productivo y tu negocio más competitivo.
            </Typography>

            <Box ref={emblaRef} sx={{ overflow: "hidden" }}>
              <Box
                sx={{
                  display: "flex",
                  touchAction: "pan-y pinch-zoom",
                }}
              >
                {caracteristicas.map((feature, i) => (
                  <Box
                    key={i}
                    className="embla__slide"
                    sx={{
                      p: 2,
                      flex: {
                        xs: "0 0 100%", // 1 por slide móvil
                        md: "0 0 50%",  // 2 en tablet
                        lg: "0 0 33.33%", // 3 en desktop
                      },
                    }}
                  >
                    <FeatureCard
                      icon={feature.icono}
                      title={feature.titulo}
                      description={feature.descripcion}
                      color={feature.color}
                      iconColor={feature.iconColor}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
