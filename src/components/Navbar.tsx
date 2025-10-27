"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/src/provider/ThemeProvider"

const NAV_ITEMS = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Contato", href: "#" },
]

export function PillNavbar() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-6">
                    {NAV_ITEMS.map((item, idx) => (
                        <Button className="rounded-full px-4 py-4 cursor-pointer" variant="ghost" key={idx} >
                            {item.label}
                        </Button>
                    ))}
                    <div className="h-6 w-px bg-border" />

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full h-9 w-9 cursor-pointer"
                        aria-label="Alternar tema"

                    >
                        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    </Button>
                </div>
            </div>
        </nav>
    )
}
