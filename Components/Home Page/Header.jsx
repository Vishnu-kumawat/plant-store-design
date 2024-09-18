import { Store, Circle, ShoppingCart, CircleUser } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-around bg-black text-white py-4'>

      <div className='flex '>
        <p className='mt-1'> <Store /> </p>
        <p className='ml-5 text-xl font-bold'> Store </p>
      </div>

      <div className='flex'>
        <Link to="/">Home</Link>
        <Link to="/shop" className='ml-7'>Shop</Link>
        <Link to="/about" className='ml-7'>About</Link>
        <Link to="/faq" className='ml-7'>FAQ</Link>
        <Link to="/contact" className='ml-7'>Contact</Link>
        <Link to="/blog" className='ml-7'>Blog</Link>
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
