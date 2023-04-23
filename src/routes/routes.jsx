import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Plantas } from '../pages/plantas/plantas';


export function NavigationsRouters(){
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/plantas" element={<Plantas/>}/>
    </Routes>
  )
}