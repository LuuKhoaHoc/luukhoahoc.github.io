"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar as ResizableNavbar,
  NavbarButton,
  NavBody,
  NavItems,
} from "@/components/ui/ResizableNavbar";
import { DATA } from "@/data/resume";

import { HoverBorderGradient } from "./ui/HoverBorderGradient";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    ...DATA.navbar.map((item) => ({
      name: item.label,
      link: item.href,
      isActive: pathname === item.href,
    })),
  ];

  // Social links
  const socialLinks = Object.entries(DATA.contact.social)
    .filter(([_, social]) => social.navbar)
    .map(([name, social]) => ({
      name,
      link: social.url,
      icon: social.icon,
    }));

  return (
    <ResizableNavbar className="top-2">
      {/* Desktop Navbar */}
      <NavBody>
        {/* Logo */}
        <Logo />

        {/* Navigation Items */}
        <NavItems
          items={navItems}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Right section: Social + CTA */}
        <div className="flex items-center gap-2">
          {/* Social Icons */}
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-300 transition-colors hover:text-white"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}

          {/* CTA Button */}
          <Link href={DATA.contact.social.email.url}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
            >
              Contact
            </HoverBorderGradient>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* Nav Items */}
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={
                item.isActive
                  ? "font-semibold text-neutral-50 transition-colors"
                  : "text-neutral-300 transition-colors hover:text-white"
              }
            >
              {item.name}
            </Link>
          ))}

          {/* Social Links */}
          <div className="mt-4 flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link href={DATA.contact.social.email.url} className="w-full">
            <HoverBorderGradient
              containerClassName="rounded-full w-full"
              as="div"
              className="flex items-center justify-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
            >
              Contact
            </HoverBorderGradient>
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src={DATA.avatarUrl}
        alt={DATA.name}
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="font-medium text-black dark:text-white">
        {DATA.englishName}
      </span>
    </Link>
  );
};
