import {styled} from 'styled-components';

export const Container = styled.div `
    width: 70%;
    height: 80vh;
    background-color: #000; 

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: 200px;
`
export const Content = styled.div`
    background-color: #222222;
    min-height: 350px;
    min-width: 200px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`