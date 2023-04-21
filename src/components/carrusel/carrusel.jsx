import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import imgHojas from '../../assets/hojas.jpg';
import "./carrusel.css";
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
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}
    navigation={{ Navigation }}
  >
    <SwiperSlide>
      <Carousel3 tamaños={widthScreen}/>
    </SwiperSlide>

    <SwiperSlide>
      <Carousel3 tamaños={widthScreen}/>
    </SwiperSlide>

    <SwiperSlide>
      <Carousel3 tamaños={widthScreen}/>
    </SwiperSlide>

    <SwiperSlide>
      <Carousel3 tamaños={widthScreen}/>
    </SwiperSlide>
  </Swiper>
</div>
);
}

function Carousel3(props) {
  return (
    <>
      <StyledImg src={imgHojas}/>
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



