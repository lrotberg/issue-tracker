"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

const ContentRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <NavBar />
      <main>{children}</main>
    </Theme>
  );
};

export default ContentRoot;
