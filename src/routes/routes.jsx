import {Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages/home/homePage';
import { PlantsPage } from '../pages/Plantas/plantPage';
import { ServiciosPage } from '../pages/servicios/serviciosPage';
import { ContactPage } from '../pages/contact/contactPage';

export function NavigationsRouters(){
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/plantas" element={<PlantsPage/>}/>
      <Route path="/servicios" element={<ServiciosPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  )
}