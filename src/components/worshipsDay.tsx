"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Circle } from "lucide-react";

interface WorshipsDayProps {
  days: string[];
}

export default function WorshipsDay({ days }: WorshipsDayProps) {
  return (
    <ToggleGroup type="multiple" className="flex flex-row flex-wrap justify-center mt-3">
      {days.map((day) => (
        <ToggleGroupItem 
          key={day} value={day} 
          className="data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:*:[svg]:fill-white px-4 py-2 rounded-md border-white border-2"
          onClick={() => {
            console.log(day);
          }}
        >
          <Circle className="w-4 h-4" />
          <span className="text-white">{day}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}