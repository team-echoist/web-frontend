'use client'
import StyledComponentsRegistry from './registry'
import React from 'react'
import { lightTheme, darkTheme } from '@/shared/styles/index'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '@/shared/lib/theme'
import GlobalStyle from '@/shared/styles/GlobalStyles'

const defaultValue = {
    theme: 'dark',
    onChangeTheme: () => {},
}

export const CustomThemeContext = React.createContext(defaultValue)

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const themeProps = useTheme()
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
                    <ThemeProvider theme={themeProps.theme === 'light' ? lightTheme : darkTheme}>
                        <GlobalStyle />
                        <StyledComponentsRegistry>
                            <div className="container">{children}</div>
                        </StyledComponentsRegistry>
                    </ThemeProvider>
                </CustomThemeContext.Provider>
            </body>
        </html>
    )
}
