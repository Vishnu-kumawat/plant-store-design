import { Store, Circle, ShoppingCart, CircleUser, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white py-4 px-5">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Store />
          <p className="ml-2 text-xl font-bold">Store</p>
        </div>

        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </div>

        <div className={`flex-col lg:flex lg:flex-row lg:items-center absolute lg:relative top-16 left-0 right-0 bg-black lg:bg-transparent lg:top-0 lg:flex lg:static ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-7 p-5 lg:p-0">
            <Link to="/" className="mt-2 lg:mt-0">Home</Link>
            <Link to="/shop" className="mt-2 lg:mt-0">Shop</Link>
            <Link to="/about" className="mt-2 lg:mt-0">About</Link>
            <Link to="/faq" className="mt-2 lg:mt-0">FAQ</Link>
            <Link to="/contact" className="mt-2 lg:mt-0">Contact</Link>
            <Link to="/blog" className="mt-2 lg:mt-0">Blog</Link>
          </div>
        </div>

        {/* Icons Section */}
        <div className="hidden lg:flex space-x-7">
          <Circle />
          <ShoppingCart />
          <CircleUser />
        </div>
      </div>
    </div>
  );
}

export default Header;
