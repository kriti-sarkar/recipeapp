import Pages from "./pages/Pages";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi";
import Search from "./components/Search";
import Category from "./components/Category";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>RECIPE APP</Logo>
      </Nav>
      <Search />
      <Category />
      <  Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo= styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'lobster two' , cursive;
`;

const Nav= styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`;

export default App;
