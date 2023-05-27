import {Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages/home/homePage';
import { PlantsPage } from '../pages/Plantas/plantPage';
import { ServiciosPage } from '../pages/servicios/serviciosPage';

export function NavigationsRouters(){
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/plantas" element={<PlantsPage/>}/>
      <Route path="/servicios" element={<ServiciosPage/>}/>
      {/*<Route path="/ubicanos" element={<Ubicacion/>}/>
      <Route path="/contactanos" element={<Contact/>}/> */}
    </Routes>
  )
}