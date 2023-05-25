import styled from "styled-components";
import { ComponentNavbar } from "./components/navbar/navbar";


//#region Styled
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
//#endregion

function App() {
  return (
    <Container>
      <ComponentNavbar/>
    </Container>
  )
}

export default App
