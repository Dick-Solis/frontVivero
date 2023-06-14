import styled from "@emotion/styled";
import florVenta from "../../assets/flor4.webp";

//#region
  const Card = styled.div`
    width: 220px;
    /* height: 320px; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    border-radius: 15px;
    border: 2px solid #0a907a;
    padding: 5px;
  `;

  const StyledImage = styled.img`
    /* width: 300px;
    height: 180px; */
    border-radius: 10px;
  `;

  const StyledTitle = styled.p`
    text-align: center;
    font-weight: bold;
    font-family: "Archivo Narrow";
  `;

  const StyledPrice = styled.h4`
    font-size: 20px;
    color: #09765c;
  `;

  const StyledButton = styled.button`
    border: none;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #087b54;
    color: #FFFFFF;
    cursor: pointer;
    :hover{
      scale: 1.2;
    }
  `; 
//#endregion

export function CardVentaFlor(props){
  const {element} = props;
  return(
    <Card>
      <StyledImage src={element.foto} alt="flor" />
      <StyledTitle>{element.nombre_comercial}</StyledTitle>
      <StyledPrice>S/ {element.precio}</StyledPrice>
      <StyledButton>COMPRAR</StyledButton>
    </Card>
  )
}