import { Store , Circle , ShoppingCart , CircleUser   } from 'lucide-react';

function Header() {
  return (
    <div className='flex justify-around bg-black text-white py-4'>

      <div className='flex '>
        <p className='mt-1'> <Store/> </p>
        <p className='ml-5 text-xl font-bold'> Store </p>
      </div>

      <div className='flex'>
        <p>Home</p>
        <p className='ml-7'>Shop</p>
        <p className='ml-7'>About</p>
        <p className='ml-7'>FAQ</p>
        <p className='ml-7'>Contact</p>
        <p className='ml-7'>Blog</p>
      </div>

      <div className='flex'>
        <p> <Circle />  </p>
        <p className='ml-7'> <ShoppingCart /> </p>
        <p className='ml-7'> <CircleUser /> </p>
      </div>
    </div>
  )
}

export default Header
