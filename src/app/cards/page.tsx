import SingleCard from '@/components/shared/SingleCard';
import { Icard } from '@/types/cardtypes';


const getCard= async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data=await res.json();
    return data;
}

const Card =async () => {
    const cardData=await getCard();
    return (
        <section className='container mx-auto py-10'>
            <div className='mb-10'>
                <h1 className='text-4xl font-bold text-white'>THE LIBRARY</h1>
                <p className='text-white'>Twelve lifts covering every major muscle group.</p>
            
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
               cardData.slice(0,6).map((card:Icard)=>(
<SingleCard key={card.id} card={card}/>
               ))}

        </div>
        </section>
    );
};

export default Card;