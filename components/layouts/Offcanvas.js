"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/components/layouts/dashboard-navigation";
import { SOCIAL_NETWORKS } from "@/data/redesSociales";

import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import ButtonContained from "../elements/butons/ButtonContained";

const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+51 999 999 999";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sysrest@gmail.com";
const LoginUrl = process.env.NEXT_PUBLIC_URL_LOGIN || "#";

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
  return (
    <>
      {/* Drawer (Offcanvas) */}
      <Drawer
        anchor="right"
        open={isOffCanvas}
        onClose={handleOffCanvas}
        PaperProps={{
          sx: {
            width: { xs: "85%", sm: "400px" },
            bgcolor: "background.paper",
            p: 2,
          },
        }}
      >
        {/* Top: Logo + Close */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Link href="/">
              <Box
                component="img"
                src="/assets/images/SYSTREST2.png"
                alt="logo"
                sx={{ width: 160, height: "auto" }}
              />
            </Link>
          </Box>

          <IconButton onClick={handleOffCanvas}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <MobileMenu navigation={navigation} />
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Contact Information */}
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Información de Contacto
        </Typography>

        <Stack spacing={2} sx={{ mb: 2 }}>
          {/* Dirección */}
          <Stack direction="row" spacing={2} alignItems="center">
            <LocationOnIcon color="primary" />
            <Link href="#" target="_blank">
              Av. Antenor Orrego 930, Chiclayo - Perú
            </Link>
          </Stack>

          {/* Email */}
          <Stack direction="row" spacing={2} alignItems="center">
            <EmailIcon color="primary" />
            <Link href={`mailto:${email}`}>{email}</Link>
          </Stack>

          {/* Horario */}
          <Stack direction="row" spacing={2} alignItems="center">
            <AccessTimeIcon color="primary" />
            <Typography>Lunes a Viernes, 09am - 05pm</Typography>
          </Stack>

          {/* Teléfono */}
          <Stack direction="row" spacing={2} alignItems="center">
            <PhoneIcon color="primary" />
            <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          </Stack>
        </Stack>

        {/* Button */}

        <ButtonContained
          href={LoginUrl}
          text="Ingresar"
          color="white"
          fontSize="2rem"
        />

        {/* Social Icons */}
        <Stack direction="row" justifyContent="flex-start" spacing={2} mt={4}>
          {SOCIAL_NETWORKS.map((social) => (
            <Link key={social.name} href={social.url}>
              <Box
                component="i"
                className={social.icon}
                sx={{ fontSize: 20, color: "text.secondary" }}
              />
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
