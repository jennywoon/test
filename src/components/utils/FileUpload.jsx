import React from 'react'
import styled from 'styled-components'
import { BsImages } from 'react-icons/bs'
import Button from '../elements/Button'
import Dropzone from 'react-dropzone'

const FileUpload = () => {
  return (

    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledUploadBoxBody {...getRootProps()}>
            <input {...getInputProps()} />
            <BsImages style={{ width: '70px', height: '70px' }} />
            <p>사진과 동영상을 여기에 끌어다 놓으세요 </p>
            <Button width='150px' backgroundColor='#0095F6' color='#fff' padding='0.6rem 0'>컴퓨터에서 선택</Button>
          </StyledUploadBoxBody>
        </section>
      )}
    </Dropzone>
  )
}


const StyledUploadBoxBody = styled.div`
  display: flex;
  width:580px;
  height:620px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px;
`
export default FileUpload