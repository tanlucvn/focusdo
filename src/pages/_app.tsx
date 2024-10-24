import type { AppProps } from "next/app"

import "@/styles/globals.css"

import { Suspense } from "react"
import { evolu } from "@/services/evolu/client"
import { EvoluProvider } from "@evolu/react"

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
      <EvoluProvider value={evolu}>
        <div className={cn("font-sans antialiased")} suppressHydrationWarning>
          <Suspense>
            <Component {...pageProps} />
          </Suspense>
        </div>
      </EvoluProvider>
    </ThemeProvider>
  )
}
