import styled from "styled-components";
import { ComponentCarrusel } from "../../components/carrusel/carrusel"
import { ComponentFooter } from "../../components/footer/footer";

//#region Styled
  const ContianerPageHome = styled.main `
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const ContainerDescriptionPage = styled.main`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `;

  const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 45px;
    gap: 40px;
    flex-wrap: wrap;
    padding: 0 30px;
  `;

  const StyledDesciption = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 500px;
    gap: 20px;
  `;

  const TitleDesciption = styled.h2`
    font-size: 35px;
    font-weight: bold;
    color: #057da1;
    font-family: 'Cedarville Cursive', cursive;
  `;

  const TextDesciption = styled.p`
    font-size: 25px;
    font-weight: bold;
    font-family: 'Cedarville Cursive', cursive;
  `;
//#endregion

export function Home(){
  return (
    <ContianerPageHome>
      <ComponentCarrusel/>
      <ContainerDescriptionPage>
        <StyledSection>
          <StyledDesciption>
            <TitleDesciption>Vision</TitleDesciption>
            <TextDesciption>Ser reconocido como un vivero líder en la producción y distribución de plantas de alta calidad y en brindar un servicio excepcional a nuestros clientes, a través de una cultura de innovación, sostenibilidad y compromiso con el medio ambiente</TextDesciption>
          </StyledDesciption>

          <StyledDesciption>
            <TitleDesciption>Mision</TitleDesciption>
            <TextDesciption>Producir y suministrar plantas saludables y resistentes que enriquezcan los espacios verdes de nuestros clientes, promoviendo la sostenibilidad y el cuidado responsable del medio ambiente. Brindamos asesoramiento personalizado y atención al cliente para satisfacer sus necesidades y superar sus expectativas.</TextDesciption>
          </StyledDesciption>
        </StyledSection>
      </ContainerDescriptionPage>
      <ComponentFooter/>
    </ContianerPageHome>
  );
}