import { ComponentNavbar } from "./components/navbar/navbar"
import styled from "styled-components"
import { NavigationsRouters } from "./routes/routes"

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
      <NavigationsRouters/>
    </Container>
  )
}

export default App
