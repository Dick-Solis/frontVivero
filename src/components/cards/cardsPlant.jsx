import styled from "styled-components";

//#region Style
  const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
  `;

  const StyledImg = styled.img`
    height: 200px;
    width: 200px;
  `;

  const StyledTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #15c815;
  `;

  const StyledCosto = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: black;
  `;
//#endregion Style

export function CardPlant(props){
  return(
    <StyledDiv>
      <StyledImg src={props.plant.url_image} alt={props.plant.name_plant} />
      <StyledTitle>{props.plant.name_plant}</StyledTitle>
      <StyledCosto>S/.{props.plant.price}</StyledCosto>
    </StyledDiv>
  )
}
