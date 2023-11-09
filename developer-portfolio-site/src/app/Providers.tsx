"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import React from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
