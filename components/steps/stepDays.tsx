import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import WorshipsDay from "../worshipsDay";

// 1. Definimos o contrato: O que esse componente precisa pra funcionar?
interface StepDaysProps {
  selectedDays: string[];
  onSelectionChange: (days: string[]) => void;
  onNext: () => void; // Função para avisar o pai para mudar de tela
}

// 2. Recebemos as props aqui nos parênteses
export default function StepDays({ selectedDays, onSelectionChange, onNext }: StepDaysProps) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">A paz de Deus</h1>
      <p className="text-xl font-medium text-center mt-4">Crie o calendário para os porteiros de sua comum de forma automática</p>
      
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-center">Quais são os dias de culto na sua comum?</h2>
        {/* Usamos as props que chegaram */}
        <WorshipsDay 
          days={["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]} 
          selectedDays={selectedDays} 
          onSelectionChange={onSelectionChange} 
        />
      </div>

      <Button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 cursor-pointer mt-8"
        disabled={selectedDays.length === 0}
        onClick={onNext} // <--- 3. Ao clicar, chama a função do pai
      >
        Proximo
        <ChevronRight className="w-4 h-4" />
      </Button>
    </>
  )
}