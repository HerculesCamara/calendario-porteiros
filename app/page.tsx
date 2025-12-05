'use client';

import StepDays from "@/components/steps/stepDays";
import StepTeam from "@/components/steps/stepTeam";
import { useState } from "react";

export interface TeamMember {
  id: string;
  name: string;
  color: string;
}

export default function Home() {
  const [meusDias, setMeusDias] = useState<string[]>([])
  const [step, setStep] = useState(1)
  const [team, setTeam] = useState<TeamMember[]>([])

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {step === 1 && (
        <StepDays 
          selectedDays={meusDias}
          onSelectionChange={setMeusDias}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <StepTeam 
          team={team}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          onTeamChange={setTeam}
        />
      )

      }
    </div>
  );
}
