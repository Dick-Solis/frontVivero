import styled from "@emotion/styled";

//#region
  const StyledVideo = styled.video(`
    display: flex;
    @media (max-width: 768px){
      padding: 35px;
    }
  `);
//#endregion

export function CardVideo(props){
  const {video} = props;
  return(
    <StyledVideo width="350" height="615" autoPlay controls>
      <source src={video} type="video/mp4" />
      <source src={video} type="video/ogg" />
      Tu navegador no puede reproducir estos vídeos
    </StyledVideo>
  )
}