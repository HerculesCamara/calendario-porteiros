'use client'
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { TeamMember } from "@/app/page"; // Importando do pai
import { Trash2, ChevronLeft, ChevronRight } from "lucide-react"; // Importe os ícones

// Mantive suas cores (só ajustei o amarelo para ficar mais legível)
const CORES = [
  "#25aceb", // Azul
  "#16A34A", // Verde
  "#D97706", // Laranja
  "#DC2626", // Vermelho (Ajustei levemente)
  "#7C3AED", // Roxo
  "#dbd827", // Amarelo/Rosa
];

interface StepTeamProps {
  team: TeamMember[];
  onTeamChange: (team: TeamMember[]) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function StepTeam({ team, onTeamChange, onBack, onNext }: StepTeamProps) {
  const [nameInput, setNameInput] = useState('')

  function handleAddMember() {
    if (!nameInput.trim()) return;

    const color = CORES[team.length % CORES.length];

    const newMember: TeamMember = {
      id: crypto.randomUUID(),
      name: nameInput,
      color: color
    };

    onTeamChange([...team, newMember]);
    setNameInput('')
  }

  // Nova função para remover
  function handleRemoveMember(id: string) {
      onTeamChange(team.filter(member => member.id !== id));
  }
  
  return (
    <div className="w-full max-w-md mx-auto"> 
      <h1 className="text-3xl font-bold text-center mb-6">
        Quem são os porteiros?
      </h1>

      <div className="space-y-4">
        <div className="flex gap-2 items-end">
            <div className="w-full">
                <Label>Nome do porteiro</Label>
                <Input 
                    placeholder="Ex: Irmão João"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddMember()} // Adiciona com Enter
                />
            </div>
            <Button onClick={handleAddMember}>Adicionar</Button>
        </div>

        {/* Lista Visual Melhorada */}
        <ul className="mt-4 space-y-2">
            {team.map((member) => (
                <li key={member.id} className="flex items-center justify-between bg-slate-100 p-3 rounded-md">
                    <div className="flex items-center gap-3">
                        {/* A Bolinha Colorida */}
                        <div 
                            className="w-4 h-4 rounded-full shadow-sm border border-black/10" 
                            style={{ backgroundColor: member.color }} 
                        />
                        <span className="font-medium">{member.name}</span>
                    </div>
                    
                    <button 
                        onClick={() => handleRemoveMember(member.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </li>
            ))}
        </ul>
      </div>

      {/* Botões de Navegação no Rodapé */}
      <div className="flex justify-between mt-8 pt-4 border-t">
          <Button variant="outline" onClick={onBack}>
              <ChevronLeft className="w-4 h-4 mr-2"/> Voltar
          </Button>
          
          <Button 
            onClick={onNext} 
            disabled={team.length === 0} // Trava se não tiver ninguém
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
              Gerar Calendário <ChevronRight className="w-4 h-4 ml-2"/>
          </Button>
      </div>
    </div>
  )
}