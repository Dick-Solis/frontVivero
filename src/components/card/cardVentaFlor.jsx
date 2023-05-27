import styled from "@emotion/styled";
import florVenta from "../../assets/flor4.webp";

//#region
  const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    border-radius: 15px;
    border: 2px solid #0a907a;
    padding: 5px 25px;
  `;

  const StyledImage = styled.img`
    width: 150px;
    height: 180px;
    border-radius: 10px;
  `;

  const StyledTitle = styled.h3`
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

export function CardVentaFlor(){
  return(
    <Card>
      <StyledImage src={florVenta} alt="flor" />
      <StyledTitle>Name Plant</StyledTitle>
      <StyledPrice>S/ 57.00</StyledPrice>
      <StyledButton>COMPRAR</StyledButton>
    </Card>
  )
}