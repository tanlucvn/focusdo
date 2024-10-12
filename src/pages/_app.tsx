import type { AppProps } from "next/app"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={cn("font-sans antialiased")} suppressHydrationWarning>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
