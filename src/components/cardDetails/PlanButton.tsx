'use client'

import { useCardContext } from '@/context/CardContext';
import { Icard } from '@/types/cardtypes';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { toast } from 'react-toastify';

const PlanButton = ({card}:{card:Icard}) => {
    const {todayplan,settodayPlan}=useCardContext()
    const handlePlanCard=()=>{

        const havePlaned=todayplan.some((item)=>item.id===card.id)

        if(havePlaned){
            toast.warning("It's already in your plan")
            return
        }
        settodayPlan([...todayplan,card])
        toast.success(`you have planed "${card.name}"`)
    }
    return (
        <div>

           <button className="btn btn-primary bg-[#C2F800] text-black border-none" onClick={()=>handlePlanCard()}><CiCalendarDate />Add to today's plan</button>
        </div>
    );
};

export default PlanButton;