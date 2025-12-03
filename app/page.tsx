import { Button } from "@/components/ui/button";
import WorshipsDay from "@/src/components/worshipsDay";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-center">A paz de Deus</h1>
      <p className="text-1xl font-medium text-center mt-4">Crie o calendário para os porteiros de sua comum de forma automática</p>
      
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-center">Quais são os dias de culto na sua comum?</h2>
        <WorshipsDay days={["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]} />
      </div>

      <Button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 cursor-pointer mt-8">
        Proximo
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
