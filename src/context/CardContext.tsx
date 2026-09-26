'use client'

import { Icard } from "@/types/cardtypes";
import { createContext, ReactNode, useContext, useState } from "react";

export type CardContextType = {
  saveCard: Icard[];
  setsaveCard: React.Dispatch<React.SetStateAction<Icard[]>>;
  todayplan: Icard[];
  settodayPlan: React.Dispatch<React.SetStateAction<Icard[]>>;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [saveCard, setsaveCard] = useState<Icard[]>([]);
  const [todayplan, settodayPlan] = useState<Icard[]>([]);

  const sharedData = {
    saveCard,
    setsaveCard,
    todayplan,
    settodayPlan,
  };

  return (
    <div>
      <CardContext.Provider value={sharedData}>
        {children}
      </CardContext.Provider>
    </div>
  );
};

export { CardContext };
export default CardProvider;