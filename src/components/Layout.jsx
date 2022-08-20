import styled from "styled-components";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <StLayoutContainer>
      <Header />
      <StLayoutContents>{props.children}</StLayoutContents>
    </StLayoutContainer>
  );
};

export default Layout;

const StLayoutContainer = styled.div`
    /* height: 100vh; */
    overflow-x: hidden;
`;

const StLayoutContents = styled.div`
    display: flex;
    justify-content: center;
`;
