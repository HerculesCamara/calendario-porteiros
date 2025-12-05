"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Circle } from "lucide-react";

interface WorshipsDayProps {
  days: string[]; // ["Domingo", "Segunda", ...]
  selectedDays: string[]; // ["0", "3"] (Indices como string)
  onSelectionChange: (days: string[]) => void; // Função que atualiza o estado do Pai
}

export default function WorshipsDay({ days, selectedDays, onSelectionChange }: WorshipsDayProps) {
  
  return (
    <ToggleGroup 
    type="multiple" 
    value={selectedDays}
    onValueChange={onSelectionChange}
    className="flex flex-row flex-wrap justify-center mt-3"
    >
      {days.map((day, index) => (
        <ToggleGroupItem 
          key={index} value={index.toString()} 
          className="data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:*:[svg]:fill-white px-4 py-2 rounded-md border-white border-2"
        >
          <Circle className="w-4 h-4" />
          <span className="text-white">{day}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}