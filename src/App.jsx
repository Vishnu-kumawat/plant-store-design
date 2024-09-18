import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Home Page/Header';
import Footer from '../Components/Home Page/Footer';
import Body from '../Components/Home Page/Body';
import Shop from '../Components/Shop page/Shop';
import About from '../Components/About';
import Faq from '../Components/Faq';
import { Contact } from 'lucide-react';
import Blog from '../Components/Blog';
import ShopByCategory from '../Components/Home Page/ShopByCategory';
import Feedback from '../Components/Home Page/Feedback';
import PlantsList from '../Components/PlantList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Body /> <PlantsList /> <ShopByCategory /> <Feedback /> </>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
