"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface BaseProps {
  children: React.ReactNode
}

interface RootFocusDoProps extends BaseProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface FocusDoProps extends BaseProps {
  className?: string
  asChild?: true
}

const desktop = "(min-width: 768px)"

const ModalContext = React.createContext<
  | {
      isDesktop: boolean
      open: boolean
      setOpen: React.Dispatch<React.SetStateAction<boolean>>
      // eslint-disable-next-line no-mixed-spaces-and-tabs
    }
  | undefined
>(undefined)

const FocusDoModal = ({
  children,
  open = false,
  onOpenChange,
}: RootFocusDoProps) => {
  const isDesktop = useMediaQuery(desktop)
  const [modalOpen, setModalOpen] = React.useState(open)

  React.useEffect(() => {
    setModalOpen(open)
  }, [open])

  React.useEffect(() => {
    if (onOpenChange) {
      onOpenChange(modalOpen)
    }
  }, [modalOpen, onOpenChange])

  return (
    <ModalContext.Provider
      value={{ isDesktop, open: modalOpen, setOpen: setModalOpen }}
    >
      {isDesktop ? (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          {children}
        </Dialog>
      ) : (
        <Drawer open={modalOpen} onOpenChange={setModalOpen}>
          {children}
        </Drawer>
      )}
    </ModalContext.Provider>
  )
}

const FocusDoTrigger = ({ className, children, ...props }: FocusDoProps) => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("FocusDoTrigger must be used within FocusDoModal")
  }
  const { isDesktop } = context

  return isDesktop ? (
    <DialogTrigger className={className} {...props}>
      {children}
    </DialogTrigger>
  ) : (
    <DrawerTrigger className={className} {...props}>
      {children}
    </DrawerTrigger>
  )
}

const FocusDoClose = ({ className, children, ...props }: FocusDoProps) => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("FocusDoClose must be used within FocusDoModal")
  }
  const { isDesktop } = context

  return isDesktop ? (
    <DialogClose className={className} {...props}>
      {children}
    </DialogClose>
  ) : (
    <DrawerClose className={className} {...props}>
      {children}
    </DrawerClose>
  )
}

const FocusDoContent = ({ className, children, ...props }: FocusDoProps) => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("FocusDoContent must be used within FocusDoModal")
  }
  const { isDesktop } = context

  return isDesktop ? (
    <DialogContent className={className} {...props}>
      {children}
    </DialogContent>
  ) : (
    <DrawerContent className={className} {...props}>
      {children}
    </DrawerContent>
  )
}

const FocusDoDescription = ({
  className,
  children,
  ...props
}: FocusDoProps) => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("FocusDoDescription must be used within FocusDoModal")
  }
  const { isDesktop } = context

  return isDesktop ? (
    <DialogDescription className={className} {...props}>
      {children}
    </DialogDescription>
  ) : (
    <DrawerDescription className={className} {...props}>
      {children}
    </DrawerDescription>
  )
}

const FocusDoHeader = ({ className, children, ...props }: FocusDoProps) => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("FocusDoHeader must be used within FocusDoModal")
  }
  const { isDesktop } = context

  return isDesktop ? (
    <DialogHeader className={className} {...props}>
      {children}
    </DialogHeader>
  ) : (
    <DrawerHeader className={className} {...props}>
      {children}
    </DrawerHeader>
  )
}

const FocusDoTitle = ({ className, children, ...props }: FocusDoProps) => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("FocusDoTitle must be used within FocusDoModal")
  }
  const { isDesktop } = context

  return isDesktop ? (
    <DialogTitle className={className} {...props}>
      {children}
    </DialogTitle>
  ) : (
    <DrawerTitle className={className} {...props}>
      {children}
    </DrawerTitle>
  )
}

const FocusDoBody = ({ className, children, ...props }: FocusDoProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  )
}

const FocusDoFooter = ({ className, children, ...props }: FocusDoProps) => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("FocusDoFooter must be used within FocusDoModal")
  }
  const { isDesktop } = context

  return isDesktop ? (
    <DialogFooter className={className} {...props}>
      {children}
    </DialogFooter>
  ) : (
    <DrawerFooter className={className} {...props}>
      {children}
    </DrawerFooter>
  )
}

export {
  FocusDoModal,
  FocusDoTrigger,
  FocusDoClose,
  FocusDoContent,
  FocusDoDescription,
  FocusDoHeader,
  FocusDoTitle,
  FocusDoBody,
  FocusDoFooter,
}
