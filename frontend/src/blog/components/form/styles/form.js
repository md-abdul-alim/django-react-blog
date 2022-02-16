import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.section`
    margin: 0 auto;
`;

export const Base = styled.form`

`;


export const Input = styled.input`
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    line-height: 2.8rem;
    border-radius: 20px;
    border: 1px solid #ddd;
    width: 100%;
`;

export const Submit = styled.button`
    background-color: rgba(0,0,0,0.75);
    color: white;
    padding: 1rem 3.5rem;
    // border: 1px solid rgba(red, 0, 0, 0.75);
    border-radius: 20px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: 250ms;
    width: 100%;

    &:disabled {
        opacity: 0.5;
    }

    &:hover{
        color: red;
    }
`;