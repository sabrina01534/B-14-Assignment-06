import Image from 'next/image';
import logo from"@/assets/logo.png";

const Footer = () => {
    return (
        <div className='container mx-auto flex justify-between border-t mt-3'>
               <div className='flex gap-2 items-center mt-2'>
          <Image src={logo} alt='book-icon'/>

          FITLOG
            </div>  
            <p className='mt-2'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;
