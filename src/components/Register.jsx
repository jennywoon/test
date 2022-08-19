import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <StyledLoginContainer>
      <RegisterForm />
      <Footer />
    </StyledLoginContainer >
  )
}

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
`

export default Register