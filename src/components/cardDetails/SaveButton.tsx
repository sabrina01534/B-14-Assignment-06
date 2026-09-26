'use client'

import { useCardContext } from '@/context/CardContext';
import { Icard } from '@/types/cardtypes';
import { CiSaveDown2 } from 'react-icons/ci';
import { toast } from 'react-toastify';

const SaveButton = ({card}:{card:Icard}) => {
    const {saveCard,setsaveCard}=useCardContext()
    const handleSaveCard=()=>{
            const haveSaved=saveCard.some((item)=>item.id===card.id)
        
                if(haveSaved){
                    toast.warning("It's already saved")
                    return
                }
        setsaveCard([...saveCard,card])
        toast.success(`you have saved "${card.name}"`)
    }
    return (
        <div>
           
           <button className="btn border-gray-100" onClick={()=>handleSaveCard()}><CiSaveDown2 />Save for later</button>
        </div>
    );
};

export default SaveButton;