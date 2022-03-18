import styled from 'styled-components';

export const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;

    img {
        max-width: 320px;
        height: 180px;
        border-radius: 3px;
    }

    p{
        margin: 0;
        margin-top: 5px;
        width: 300px
    }
`