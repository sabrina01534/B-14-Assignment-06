'use client'

import { Icard } from "@/types/cardtypes";
import { createContext, ReactNode, useState } from "react";

type CardContextType={
     saveCard: Icard[];
  setsaveCard: React.Dispatch<React.SetStateAction<Icard[]>>;
  todayplan: Icard[];
  settodayPlan: React.Dispatch<React.SetStateAction<Icard[]>>;
}


 const CardContext =createContext <CardContextType | undefined>(undefined)

    const CardProvider=({children}:{children:ReactNode})=>{
        
    const [saveCard,setsaveCard]=useState<Icard[]>([]);
    const [todayplan,settodayPlan]=useState<Icard[]>([]);

    const sharedData={
        saveCard,
        setsaveCard,
        todayplan,
        settodayPlan
    }
    return (
        <div>
          <CardContext.Provider value={sharedData}>
            {children}</CardContext.Provider>
        </div>
    );
};

export {CardContext};
export default CardProvider;