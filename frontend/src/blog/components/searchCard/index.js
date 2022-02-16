import React from 'react'
import { Container } from './styles/searchCard'

export default function SearchCard({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}