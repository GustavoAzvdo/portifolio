'use client';

import TextPressure from "@/components/TextPressure";
import { PillNavbar } from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleDot, Download, LayoutGridIcon } from "lucide-react";
import { useTheme } from "@/src/provider/ThemeProvider";
import About from "@/components/About/About";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-center">

      <PillNavbar />
      <div className="grid grid-cols-12  h-full items-center">
        <section
          className="col-span-10 col-start-2 flex flex-col items-center justify-center"
          style={{ position: 'relative', height: '50vh' }}
        >
          <div>
            <Badge className="px-2">
              <CircleDot className="mx-2 animate-pulse" size={20} />
              <span className="text-base pr-1">Disponivel para trabalhos!</span>
            </Badge>
          </div>

          <TextPressure
            text="gustavo azevedo"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor={theme === "dark" ? "#f5f5f5" : "#1a1a1a"}
            strokeColor={theme === "dark" ? "#1a1a1a" : "#f5f5f5"}
            minFontSize={30}

          />
          <div>
            <h1 className="text-2xl md:text-2xl font-medium mt-4 text-center">
              Desenvolvedor Web Front-end & Designer UI/UX
            </h1>
          </div>
          <div>
            <div className="flex gap-5  mt-10">
              <Button size="lg" variant='outline'>
                Ver Projetos
                <LayoutGridIcon />
              </Button>
              <Button size="lg">
                Baixar CV
                <Download />
              </Button>
            </div>
       
            {/* <div>
                <About />
            </div> */}
          </div>
        </section>
      </div>
      <About />
    </div>
  )
}