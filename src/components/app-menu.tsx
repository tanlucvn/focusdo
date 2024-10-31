import { evolu } from "@/services/evolu/client"
import {
  ArrowUpRightIcon,
  MenuIcon,
  PaletteIcon,
  StickyNoteIcon,
  TrashIcon,
} from "lucide-react"

import { appVersion, iconSize } from "@/lib/constants"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

import AppHeader from "./app-header"
import AppLogo from "./app-logo"
import ThemeSettings from "./settings/theme-settings"

const Menu = () => {
  const handleResetOwnerClick = () => {
    if (confirm("Are you sure? It will delete all your local data.")) {
      evolu.resetOwner()
    }
  }

  return (
    <div className="flex w-full items-center justify-between px-5">
      <AppHeader />

      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon">
            <MenuIcon size={iconSize} />
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[505px] bg-secondary px-4 sm:rounded-3xl">
          <ScrollArea className="rounded-3xl py-3">
            <div className="flex flex-col items-center space-y-6 py-2">
              <div className="flex w-full items-center justify-start gap-4 rounded-3xl bg-background p-3 font-medium">
                <div className="grid size-20 place-items-center text-clip rounded-full border-2">
                  <AppLogo />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-muted-foreground">
                    Version {appVersion.toFixed(1)}
                  </p>
                </div>
                <div className="ml-auto">
                  <Button
                    className="flex items-center justify-center gap-1 text-muted-foreground"
                    variant="link"
                  >
                    Source code
                    <ArrowUpRightIcon size={iconSize} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col space-y-2">
                <p className="self-start text-lg font-bold">Appearance</p>
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col items-center space-y-2 rounded-3xl bg-background p-3 font-medium text-foreground/80"
                >
                  <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger>
                      <div className="flex items-center space-x-3">
                        <PaletteIcon size={18} />
                        <p>Color Theme</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ThemeSettings />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Button
                onClick={handleResetOwnerClick}
                className="flex w-full items-center justify-center space-x-3 rounded-2xl px-6 py-4 font-medium transition-colors"
              >
                <TrashIcon size={iconSize} />
                <p>Delete data</p>
              </Button>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Menu
