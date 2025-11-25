"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function MobileMenu({ navigation }) {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <List disablePadding>
        {navigation.map((item, idx) => {
          const hasChildren = Boolean(item.children?.length);

          return (
            <Box key={idx}>
              {/* Item principal */}
              <ListItem
                disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 0.5,
                }}
              >
                <Link
                  href={item.path || "#"}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "text.primary",
                      transition: "0.2s",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>

                {hasChildren && (
                  <IconButton
                    size="small"
                    onClick={() => toggleItem(idx)}
                    sx={{
                      color: activeItem === idx ? "primary.main" : "text.secondary",
                      transition: "0.2s",
                    }}
                  >
                    {activeItem === idx ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                )}
              </ListItem>

              {/* Submenú */}
              {hasChildren && (
                <Collapse in={activeItem === idx} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 3 }}>
                    {item.children.map((child, cIdx) => (
                      <ListItem key={cIdx} disableGutters sx={{ py: 0.3 }}>
                        <Link
                          href={child.path || "#"}
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <Typography
                            sx={{
                              fontSize: 15,
                              fontWeight: 400,
                              color: "text.secondary",
                              transition: "0.2s",
                              "&:hover": {
                                color: "primary.main",
                              },
                            }}
                          >
                            {child.name}
                          </Typography>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );
}
