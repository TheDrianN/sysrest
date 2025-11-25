import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SysrestLogo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img style={{ width: 150 }} src="/assets/images/SYSTREST.png" alt="Logo" />
  </Box>
);

const SysrestFooter = () => {
  const backgroundColor = '#212529'; // Un color gris oscuro similar al de la imagen
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ bgcolor: backgroundColor, color: 'text.secondary', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          
          {/* Columna 1: Logo y Descripción */}
          <Grid item xs={12} sm={3}>
            <SysrestLogo />
            <Typography variant="body2" sx={{ mt: 1, color: '#A0A0A0' }}>
              Sistema integral de administración de restaurantes
            </Typography>
          </Grid>

          {/* Columna 2: Enlaces */}
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              Enlaces
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" color="inherit" underline="hover" variant="body2" sx={{ mb: 0.5, color: '#A0A0A0' }}>
                Términos y Condiciones
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2" sx={{ mb: 0.5, color: '#A0A0A0' }}>
                Soporte
              </Link>
              <Link href="#" color="inherit" underline="hover" variant="body2" sx={{ mb: 0.5, color: '#A0A0A0' }}>
                Política de Privacidad
              </Link>
            </Box>
          </Grid>

          {/* Columna 3: Contacto */}
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5, color: '#A0A0A0' }}>
              WhatsApp: +51 999 999 999
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5, color: '#A0A0A0' }}>
              Email: info@sysrest.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
              Lima, Perú
            </Typography>
          </Grid>

          {/* Columna 4: Síguenos */}
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="facebook" sx={{ p: 0.5, color: '#A0A0A0', "&:hover": { color: '#FA8C16' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="instagram" sx={{ p: 0.5, color: '#A0A0A0', "&:hover": { color: '#FA8C16' } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="whatsapp" sx={{ p: 0.5, color: '#A0A0A0', "&:hover": { color: '#FA8C16' } }}>
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Separador (Línea Horizontal) */}
        <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', my: 4 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: '#A0A0A0' }}>
            © {year} SYSREST. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SysrestFooter;