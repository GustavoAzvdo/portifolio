import TextPressure from "@/components/TextPressure";
import { PillNavbar } from "../components/Navbar";
import { Button } from "@/components/ui/button";
import {Badge}  from "@/components/ui/badge";
import { Download, LayoutGridIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-center">

      <PillNavbar />
      <div className="grid grid-cols-12  h-full items-center">
        <div>
        <Badge asChild />
          <span>Disponivel para trabalhos!</span>

        </div>
        <div
          className="col-span-10 col-start-2 flex flex-col items-center justify-center"
          style={{ position: 'relative', height: '50vh' }}
        >
        
          <TextPressure
            text="gustavo azevedo"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000"
            strokeColor="#ff0000"
            minFontSize={30}

          />
          <div>
            <h1 className="text-2xl md:text-2xl font-medium mt-4 text-center">
              Desenvolvedor Web Front-end & Designer UI/UX
            </h1>
          </div>
          <div>
            <div className="flex gap-5  mt-10">
              <Button  size="lg" variant='outline'>
                Ver Projetos
                <LayoutGridIcon />
              </Button>
              <Button  size="lg">
                Baixar CV
                <Download />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}