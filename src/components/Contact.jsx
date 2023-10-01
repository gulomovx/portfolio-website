import { MdLocalPhone } from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-950 flex justify-center items-center p-4 flex-row'>
      <div className='border grid grid-cols-1  rounded-lg sm:px-16  py-8 text-center '>
      <h1 className='text-white text-4xl :text-2xl'>Get in touch!</h1>
      <br />
      <div>
          <div className='grid lg:flex p-5 -center text-white text-3xl gap-8 '>
            <div className='flex  items-center'>
            <MdLocalPhone />
          <span>+998 90 777 77 77 </span>
            </div>
            <div className='flex  items-center  gap-2'>
            <FaTelegramPlane/>
          <span><a href="#">Telegram</a> </span>
            </div>
          
       </div>
      </div>
      </div>
        
    </div>
  )
}

export default Contact