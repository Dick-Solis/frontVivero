import {Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages/home/homePage';
import { PlantsPage } from '../pages/Plantas/plantPage';


export function NavigationsRouters(){
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/plantas" element={<PlantsPage/>}/>
      {/*<Route path="/plantas" element={<Plantas/>}/>
      <Route path="/ubicanos" element={<Ubicacion/>}/>
      <Route path="/contactanos" element={<Contact/>}/> */}
    </Routes>
  )
}