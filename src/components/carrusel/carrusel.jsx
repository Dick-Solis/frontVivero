import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import imgHojas from '../../assets/hojas.jpg';
import planta from '../../assets/planta.jpg';
import viveros from '../../assets/viveros.jpg';
import representacion from '../../assets/representacion.jpg';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

//#region
  const StyledImg = styled.img`
    width: 100vw;
  `;
//#endregion


export function ComponentCarrusel() {
const [widthScreen, setWidthScreen] = useState(window.innerWidth);

const cambiarTamaño = () => {
setWidthScreen(window.innerWidth) 
}

useEffect(()=>{
window.addEventListener("resize", cambiarTamaño);
return () => {
  window.removeEventListener("resize", cambiarTamaño);
}
})

return (
<div className="container--carrusel">
  <Swiper
    modules={[Navigation,Pagination,Scrollbar,Autoplay,]}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}
    navigation={{ Navigation }}
    style={{maxHeight: '500px'}}
  >
    <SwiperSlide>
      <Carousel1 tamaños={widthScreen}/>
    </SwiperSlide>

    <SwiperSlide>
      <Carousel2 tamaños={widthScreen}/>
    </SwiperSlide>

    <SwiperSlide>
      <Carousel3 tamaños={widthScreen}/>
    </SwiperSlide>

    <SwiperSlide>
      <Carousel4 tamaños={widthScreen}/>
    </SwiperSlide>
  </Swiper>
</div>
);
}

function Carousel1(props) {
  return (
    <>
      <StyledImg src={planta}/>
    </>
  );
}
function Carousel2(props) {
  return (
    <>
      <StyledImg src={representacion}/>
    </>
  );
}
function Carousel3(props) {
  return (
    <>
      <StyledImg src={imgHojas}/>
    </>
  );
}
function Carousel4(props) {
  return (
    <>
      <StyledImg src={viveros}/>
    </>
  );
}
// function Carousel1(props) {
// return (
// <div>
//   <img src={props.tamaños >= 768 ? familyWeb : familyCel} alt="" />
// </div>
// );
// }

// function Carousel3(props) {
//   return (
//     <>
//       <StyledImg src={props.tamaños >= 768 ? mapWeb : mapCel}/>
//     </>
//   );
// }



