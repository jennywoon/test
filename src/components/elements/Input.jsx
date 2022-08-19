import React from 'react'
import styled from 'styled-components'



const Input = ({ id, className, type, value, placeholder, width, padding, onChangeHandler, minLength, maxLength, text }) => {
  return (
    <StyledButtonField >
      <StyledInput
        id={id}
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        width={width}
        padding={padding}
        onChange={onChangeHandler}
        minLength={minLength}
        maxLength={maxLength}
      />
      <StyledText>{text}</StyledText>
    </StyledButtonField>

  )
}

Input.defaultValue = {
  id: '',
  className: '',
  type: '',
  value: '',
  placeholder: '',
  width: '',
  onChangeHandler: null,
  minLength: '',
  maxLength: '',
  text: ''
}

export default Input;

const StyledButtonField = styled.div`
margin: 0.3rem;
`
const StyledInput = styled.input`
    width : ${(props) => props.width};
    padding: ${(props) => props.padding};
    border: 1px solid #ccc;
    border-radius: 3px;
`
const StyledText = styled.div`
  
`