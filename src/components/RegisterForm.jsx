import React from 'react'
import Input from './elements/Input'
import Button from './elements/Button'
import styled from 'styled-components';

const RegisterForm = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StyledForm onSubmit={(e) => onSubmitHandler(e)}>
        <StyledTitle>
          Instagram
        </StyledTitle>
        <StyledDesc>친구들의 사진과 동영상을 보려면 가입하세요.</StyledDesc>
        <Button
          width='245px'
          padding='10px 0'
          backgroundColor='#FFE500'
          color='#000'
        >카카오톡으로 로그인</Button>
        <div style={{ display: 'flex', alignItems: 'top', margin: '1.5rem 0 0.5rem 0' }}>
          <StyledLine></StyledLine>
          <div style={{ position: 'relative', top: '-3px' }}>또는</div>
          <StyledLine></StyledLine>
        </div>
        <Input width='200px' padding='12px 20px' placeholder='아이디' />
        <Input width='200px' padding='12px 20px' placeholder='성명' />
        <Input width='200px' padding='12px 20px' placeholder='사용자 이름' />
        <Input width='200px' padding='12px 20px' placeholder='비밀번호' />
        <Button
          width='245px'
          padding='10px 0px'
          backgroundColor='#B2DFFC'
          color='#fff'
        >
          가입
        </Button>
      </StyledForm >
      <StyledBox>
        <p>계정이 있으신가요? <span style={{ color: '#0095F6' }}>로그인</span></p>
      </StyledBox>
    </div >
  )
}



const StyledForm = styled.form`
  width: 400px;
  min-height: 500px;
  height: auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 3rem;
`

const StyledTitle = styled.p`
  font-size:2rem;
  margin-bottom: 0.5rem;
`
const StyledDesc = styled.p`
  font-size:1.4rem;
  margin: 0rem 0 0.5rem 0;
  padding: 0.5rem 1.5rem 0 1.5rem;
`


const StyledLine = styled.div`
  border-top: 1px solid #ccc;
  width: 100px;
  height: 20px;
  margin: 0.5rem 1rem;
`

const StyledBox = styled.div`
  border: 1px solid #ccc;
  width: 400px;
  padding: 0.5rem;
  text-align: center;
  margin: 1rem 0;
  box-sizing: border-box;
`

export default RegisterForm