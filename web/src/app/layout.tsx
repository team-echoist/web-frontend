"use client";
import StyledComponentsRegistry from "./registry";
import type { Metadata } from "next";
import React from "react";
import { lightTheme, darkTheme } from "@/shared/styles/index";
import { ThemeProvider } from "styled-components";
import { useTheme } from "@/shared/lib/theme";

export const metadata: Metadata = {
  title: "Linkedout",
  description: "개인의 성장과 자기 이해를 돕는 에세이 작성 플랫폼",
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "icon", url: "/icon-192x192.png", sizes: "192x192" },
    { rel: "icon", url: "/icon-256x256.png", sizes: "256x256" },
    { rel: "icon", url: "/icon-384x384.png", sizes: "384x384" },
    { rel: "icon", url: "/icon-512x512.png", sizes: "512x512" },
  ],
};
const defaultValue = {
  theme: "dark",
  onChangeTheme: () => {},
};

export const CustomThemeContext = React.createContext(defaultValue);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeProps = useTheme();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/icon-256x256.png" sizes="256x256" />
        <link rel="icon" href="/icon-384x384.png" sizes="384x384" />
        <link rel="icon" href="/icon-512x512.png" sizes="512x512" />
      </head>
      <body>
        <CustomThemeContext.Provider value={themeProps}>
          <ThemeProvider
            theme={themeProps.theme === "light" ? lightTheme : darkTheme}
          >
            <StyledComponentsRegistry>
              <div className="container">{children}</div>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </CustomThemeContext.Provider>
      </body>
    </html>
  );
}
