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
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;

    h1{
        font-size: 2.5rem;
        margin-bottom: 50px;
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
      width: 80px;
      height: 80px;
      border-radius: 999px;
      border: 3px solid ${secondaryColor};
      border-bottom: 3px solid ${primaryColor};
      animation: ${rotate} 1s linear infinite;
      margin: auto;
    }
`

export const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`