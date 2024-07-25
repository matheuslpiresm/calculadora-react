import {styled} from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #000000;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    background-color: #ffffff;
    min-height: 400px;
    min-width: 300px
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
