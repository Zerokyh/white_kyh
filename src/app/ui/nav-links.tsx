"use client";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "../data/data";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((menuItem) => (
        <div key={menuItem.title}>
          <ListItem
            sx={{
              color: "#E8E3D2",
              fontSize: "12px",
              gap: "10px",
            }}
          >
            <menuItem.icon />
            {menuItem.title}
          </ListItem>
          {menuItem.links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                passHref
                style={{ textDecoration: "none" }}
              >
                <ListItemButton
                  sx={{
                    ":hover": { color: "#1dc4e9" },
                    color: pathname === link.href ? "#1dc4e9" : "#9FB3D0",
                  }}
                >
                  <ListItemIcon>
                    <LinkIcon
                      sx={{
                        color: pathname === link.href ? "#1dc4e9" : "#9FB3D0",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </Link>
            );
          })}
        </div>
      ))}
    </>
  );
}
