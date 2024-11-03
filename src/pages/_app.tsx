import type { AppProps } from "next/app"

import "@/styles/globals.css"

import { Suspense } from "react"
import { evolu } from "@/services/evolu/client"
import { EvoluProvider } from "@evolu/react"

import FocusdoProvider from "@/lib/providers/focusdo"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import Loading from "@/components/loading"
import { ThemeProvider } from "@/components/theme-provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <EvoluProvider value={evolu}>
          <FocusdoProvider>
            <div
              className={cn("font-sans antialiased")}
              suppressHydrationWarning
            >
              <Suspense fallback={<Loading />}>
                <Component {...pageProps} />
              </Suspense>
            </div>
          </FocusdoProvider>
        </EvoluProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}
