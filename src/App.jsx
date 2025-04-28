import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/Shop/Shop';
import Family from './components/Families/Family';
import Teamwear from './components/Teamwear/Teamwear';
import Athlete from './components/Athlete/Athlete';
// import Blog from './components/blog/Blog'; // Create these components
// import Search from './components/search/Search'; // Create these components
// import Favourites from './components/favourites/Favourites'; // Create these components
// import Cart from './components/cart/Cart'; // Create these components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/families" element={<Family />} />
        <Route path="/teamwear" element={<Teamwear />} />
        <Route path="/athletes" element={<Athlete />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;