import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import React, {useState, useMemo} from 'react'
function App() {
  const [active, setActive] = useState(1)
  return (
    <AppStyled bg = {bg} className="App">
      <MainLayout>
        <Navigation active = {active} setActive={setActive}></Navigation>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
height:100vh;
background-image:url(${props => props.bg});
`;
export default App;
