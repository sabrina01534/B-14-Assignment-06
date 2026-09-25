'use client'

import { createContext, ReactNode, useState } from "react";



const CardContext =createContext ({})

    const CardProvider=({children}:{children:ReactNode})=>{
        
    const [saveCard,setsaveCard]=useState([]);
    const [todayplan,settodayPlan]=useState([]);

    const sharedData={
        saveCard,
        setsaveCard,
        todayplan,
        settodayPlan
    }
    return (
        <div>
          <CardContext.Provider value={sharedData}>{children}</CardContext.Provider>
        </div>
    );
};

export default CardContext;