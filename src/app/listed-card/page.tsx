'use client'


import CardContext from '@/context/CardContext';
import React, { useContext } from 'react';

const ListedPage = () => {

    const {saveCard,todayplan}=useContext(CardContext);
    console.log(saveCard,todayplan, "readBooks")
    return (
        <div>
          <h2>This is listed card.<br/>Total save card:{saveCard.length}<br/>Total todayplan{todayplan.length}</h2>  
        </div>
    );
};

export default ListedPage;