import styled from "styled-components";
import { ComponentNavbar } from "../../components/navbar/navbar";
import { ComponentCarrusel } from "../../components/carrusel/carrusel"
//#region Styled
  const ContianerPageHome = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;
//#endregion

export function Home(){
  return (
    <ContianerPageHome>
      <ComponentCarrusel/>
      <h2>Home</h2>
      <h3>ASDADSA</h3>
    </ContianerPageHome>
  );
}