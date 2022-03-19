import styled from 'styled-components';

export const Display = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    position: relative;

    div{
        position: absolute;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: -10px;
        padding-right: 20px;

        img{
            margin: 5px 15px;
            background-color: #756df4dd;
            padding: 1px;
            cursor: pointer;

            :hover{
                opacity: 0.85;
            }
        }
    }

    img {
        max-width: 100%;
        border-radius: 3px;
    }

    p{
        margin: 0;
        margin-top: 5px;
    }
`