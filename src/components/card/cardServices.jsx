import styled from "@emotion/styled";

//#region
  const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #201e1e;
    border-radius: 30px;
    width: 350px;
    :hover{
      box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.5);
    }
  `;
  const Image = styled.img`
    height: 300px;
  `;

  const StyledTitle = styled.h2`
    text-align: center;
  `;

  const StyledDescription = styled.p`
    text-align: justify;
  `;
//#endregion

export function CardServices({image,title,description}){
  return(
    <Card>
      <Image src={image} alt="" />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </Card>
  )
}