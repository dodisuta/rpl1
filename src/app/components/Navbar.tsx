"use client"
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, Images, User } from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home />
    },
    {
      name: "Siswa",
      link: "#siswa",
      icon: <User />
    },
    {
      name: "Galery",
      link: "#galery",
      icon: <Images />
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems}  />
    </div>
  );
};

export default Navbar;
