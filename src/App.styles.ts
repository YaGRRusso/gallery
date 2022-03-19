import styled, { keyframes } from "styled-components"

const primaryColor = '#635AD9'
const secondaryColor = '#635AD925'

export const Body = styled.div`
    background-color: #27282f;
    color: #fff;
    min-height: 100vh;
`

export const Container = styled.div`
    width: 95vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;

    h1{
        font-size: 2.5rem;
        margin-bottom: 50px;
    }
`

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input[type=submit]{
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;

    :hover{
      opacity: 0.85;
    }
  }
`

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Warning = styled.div`
    div{
      width: 50px;
      height: 50px;
      border-radius: 999px;
      border: 3px solid ${secondaryColor};
      border-bottom: 3px solid ${primaryColor};
      animation: ${rotate} 1s linear infinite;
      margin: auto;
    }
`

export const ImageSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`