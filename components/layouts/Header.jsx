"use client";

import Link from "next/link";
import { AppBar, Toolbar, Box, Typography, IconButton, Button, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../layouts/menu";
import { navigation } from "../layouts/dashboard-navigation";
import EmailIcon from '@mui/icons-material/Email';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ButtonContained from "../elements/butons/ButtonContained";
import { useState, useEffect } from "react";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sysrest@gmail.com";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "987654321";
const LoginUrl = process.env.NEXT_PUBLIC_URL_LOGIN || "#";

export default function Header({ scroll, isOffCanvas, handleOffCanvas }) {
    const [hideTop, setHideTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setHideTop(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <AppBar
      position={scroll ? "sticky" : "static"}
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #eee" }}
    >
      {/* Top bar */}
      <Toolbar
        variant="dense"
        sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            bgcolor: "#1E1E1E",
            color: "white",
            px: 0,
            minHeight: hideTop ? "0px" : "36px", // cambia la altura
            height: hideTop ? "0px" : "36px",
            overflow: "hidden",                  // para que no ocupe espacio
            transition: "all 0.9s ease",
            opacity: hideTop ? 0 : 1,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 0.5,
            gap: 2,
          }}
        >
          {/* Email */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              "&:hover": { color: "primary.main", cursor: "pointer" },
            }}
          >
            <EmailIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
            <Link href={`mailto:${email}`} style={{ textDecoration: "none", color: "inherit" }}>
              {email}
            </Link>
          </Box>

          {/* Promoción */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              fontWeight: "bold",
              "&:hover": { color: "primary.main", cursor: "pointer" },
            }}
          >
            <LocalOfferIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
            <Typography component="span">
              Por tiempo limitado 20% dscto. en planes anuales
            </Typography>
          </Box>

          {/* Botón solicitar demo */}
          <Button
            variant="text"
            href="#contact"
            startIcon={<LocalPhoneIcon />}
            sx={{
              textTransform: "none",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              px: 1.5,
              py: 0.5,
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Solicitar Demo
          </Button>
        </Container>
      </Toolbar>

      {/* Main header */}
      <Toolbar sx={{ justifyContent: "center", background: "linear-gradient(90deg, #F76F30, #F35525, #F76F30)", px: 0 }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
         <Box>
            <Link href="/" passHref>
                <Box
                component="img"
                src="/assets/images/SYSTREST.png"
                alt="logo"
                sx={{
                    width: 200,
                    height: 40,
                    objectFit: "contain", // mantiene proporción de la imagen
                }}
                />
            </Link>
        </Box>


          {/* Menu + login */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 2 }}>
            <Menu navigation={navigation} />
          </Box>

          <Box sx={{ display: { lg: "flex" }, alignItems: "center", gap: 1 }}>
            <ButtonContained
                sx={{ display: { xs: "none", lg: "flex" } }}
                text="Ingresar"
                href={LoginUrl}
                size="large"
                Bgcolor="#FFFFFF"
                textColor="#F45B28"
                fontWeight="bold"
                fontSize="0.8rem"
                borderRadius={5}
            />


            {/* Hamburger para mobile */}
            <IconButton
              sx={{ display: { lg: "none" } }}
              onClick={handleOffCanvas}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

        </Container>
      </Toolbar>
    </AppBar>
  );
}
