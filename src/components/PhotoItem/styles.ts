import styled from 'styled-components';

export const Display = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    position: relative;

    .buttonsArea{
        position: absolute;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: -10px;

        img{
            margin: 5px 15px;
            background-color: #756df4dd;
            padding: 1px;
            cursor: pointer;
            border-radius: 5px;

            :hover{
                opacity: 0.85;
            }
        }
    }

    .imgArea{
        height: 350px;
        
        img{
            border-radius: 5px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

    p{
        margin: 0;
        margin-top: 5px;
    }
`