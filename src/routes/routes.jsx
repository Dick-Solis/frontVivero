import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Plantas } from '../pages/plantas/plantas';
import { Ubicacion } from '../pages/ubicanos/ubicacion';
import { Contact } from '../pages/contactanos/contact';

export function NavigationsRouters(){
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/plantas" element={<Plantas/>}/>
      <Route path="/plantas" element={<Plantas/>}/>
      <Route path="/ubicanos" element={<Ubicacion/>}/>
      <Route path="/contactanos" element={<Contact/>}/>
    </Routes>
  )
}