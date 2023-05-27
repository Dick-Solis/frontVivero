import styled from "@emotion/styled";

//#region
  const Card = styled.div`
    width: 300px;
    height: 160px;
    background-color: #DEDEDE;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    gap: 15px;
    padding:15px;
  `;
  
  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border: 1px solid #0d9163;
    border-radius: 50%;
    background-color: none;
    color:  #0d9163;
    :hover{
      background-color: #0d9163;
      color: white;
    }
  `;

  const StyledDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
//#endregion

export function CardContact({image,title,description}){
  return(
    <Card>
      <StyledButton>
        {image} 
      </StyledButton>
      <StyledDescription>
        <h2>{title}</h2>
        <p>{description}</p>
      </StyledDescription>
    </Card>
  )
}