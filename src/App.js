import './App.css';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Layout/Hero';
import { Cart } from './components/Cart/Cart';
import { useState } from 'react';
import { CartProvider } from './store/CartProvider';

function App() {

  const [toggle, setToggle] = useState(false)
  const handleToggle = ()=>{

    setToggle((prev)=>!prev)
  }

  return (
   <CartProvider>
   {toggle && <Cart onSave={handleToggle} />}
   <Header onSave={handleToggle}/>
   <main>
   <Hero/>
   </main>
   </CartProvider>
  );
}

export default App;
