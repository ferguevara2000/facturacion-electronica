"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, LogOut } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className="fixed top-0 right-0 left-0 bg-background z-40 h-16 flex items-center justify-end px-4 border-b">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@usuario" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <span>Usuario Nombre</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Mi Perfil</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Cerrar Sesión</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}