import styled from "styled-components";
import ubicacion from "../../assets/ubicacion.png"
import { ComponentFooter } from "../../components/footer/footer";
import {FiMapPin} from "react-icons/fi";


//#region
  const ContainerPageUbicacion = styled.main `
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const StyledSection = styled.section`
    display: flex;
    min-height: 800px;
    justify-content:center;
    gap: 20px;
  `;

  const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;

  const StyledImage = styled.img`
    width: 600px;
    height: 500px;
    border: 2px solid #087492;
  `;
//#endregion

export function Ubicacion(){
  return(
    <ContainerPageUbicacion>
      <StyledSection>
        <StyledDescription>
          <h2><FiMapPin/>Huánuco-Huánuco</h2>
          <p>Jr. Contitución #461</p>
        </StyledDescription>
        <StyledImage src={ubicacion} alt="Jr. Constitución #461"/>
      </StyledSection>
      <ComponentFooter/>
    </ContainerPageUbicacion>
  )
}