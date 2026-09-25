import { Icard } from "@/types/cardtypes";
import Image from "next/image";
import { CiCalendarDate, CiSaveDown2 } from "react-icons/ci";

interface ICardDetailsProps{
    params:Promise<{
        id:string
    }>
}

const getCard= async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data=await res.json();
    return data;
}

const CardDetailspage =async ({params}:ICardDetailsProps) => {
    const{id}=await params;
    const cardData=await getCard();
    const card=cardData.find((card:Icard)=>
    String(card.id)===String(id))as Icard
console.log(card,"card")
    return (
        <div className="container mx-auto card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <Image
      src={card.image} width={400} height={250}
      alt="Album" />
  </figure>
  <div className="card-body">
  <div>
      <h2 className="card-title">{card.name}</h2>
    <p className="mt-2">{card.description}</p>
    <div className='flex gap-3 mt-2'>
    <button className="btn btn-xs bg-[#C2F800] font-bold text-black rounded-3xl">{card.muscleGroups}</button>
   <button className="btn btn-xs bg-[#C2F800] font-bold text-black rounded-3xl">{card.equipment}</button>
   
   </div>
   
    <div className="mt-3 mb-4">
<table className="w-full">
<tbody >
<tr className="border border-gray-600 flex justify-between">
  <th className="px-4 py-3 text-left">EQUIPMENT</th>
<td className="mt-2 items-center pr-3">{card.equipment}</td>
</tr>
<tr className="border  border-gray-600 flex justify-between">
  <th className="px-4 py-3 text-left">DIFFICULTY</th>
<td className="mt-2 items-center pr-3">{card.difficulty}</td>
</tr>
<tr className="border  border-gray-600 flex justify-between">
  <th className="px-4 py-3 text-left">SETS</th>
<td className="mt-2 items-center pr-3">{card.sets}</td>
</tr>
<tr className="border border-gray-600 flex justify-between">
  <th className="px-4 py-3 text-left">REPS</th>
<td className="mt-2 items-center pr-3">{card.reps}</td>
</tr>
<tr className="border  border-gray-600 flex justify-between">
  <th className="px-4 py-3 text-left">DURATION</th>
<td className="mt-2 items-center pr-3">{card.duration}</td>
</tr>
<tr className="border  border-gray-600 flex justify-between">
  <th className="px-4 py-3 text-left">CALORIES</th>
<td className="mt-2 items-center pr-3">{card.caloriesBurned}</td>
</tr>
<tr className="border  border-gray-600 flex justify-between">
  <th className="px-4 py-3 text-left">RATING</th>
<td className="mt-2 items-center pr-3">{card.rating}</td>
</tr>
</tbody>
</table>
    </div>
    <div>
        <h1 className="text-2xl font-bold mb-2">INSTRUCTIONS</h1>
        
            <ol className="list-decimal pl-3 mb-4">
  <li>Lie on the bench with your feet planted.</li>
  <li>Unrack the bar with locked elbows.</li>
  <li>Lower the bar to your chest.</li>
  <li>Press the bar back up.</li>
</ol>
        
    </div>
     <div className="flex gap-5">
      <button className="btn btn-primary bg-[#C2F800] text-black border-none"><CiCalendarDate />Add to today's plan</button>
      <button className="btn border-gray-100"><CiSaveDown2 />Save for later</button>
    </div>
   
  </div>
  </div>
</div>
    );
};

export default CardDetailspage;