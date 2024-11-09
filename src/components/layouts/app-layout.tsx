// components/layouts/RootLayout.tsx

import { ReactNode, Suspense } from "react"
import { evolu } from "@/services/evolu/client"
import { EvoluProvider } from "@evolu/react"

import FocusdoProvider from "@/lib/providers/focusdo"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import Loading from "@/components/loading"
import { ThemeProvider } from "@/components/theme-provider"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
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
            <div className={cn("font-sans antialiased")}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </FocusdoProvider>
        </EvoluProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}
