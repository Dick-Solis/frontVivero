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

  const StyledTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #15c815;
  `;
//#endregion Style

export function CardPlant(props){
  return(
    <StyledDiv>
      <StyledImg src={props.plant.url_image} alt={props.plant.name_plant} />
      <StyledTitle>{props.plant.name_plant}</StyledTitle>
      <p>{props.plant.price}</p>
    </StyledDiv>
  )
}
