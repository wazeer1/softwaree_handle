import React from 'react'
import styled from 'styled-components'

const index = ({progress, color}) => {
  return (
    <Container color={color}><ProgresLine progress={progress} color={color}></ProgresLine></Container>
  )
}

export default index

const Container = styled.div`
    width:100%;
    height:5px;
    background:${({color})=>color + '40'};
    border-radius:10px;
    overflow:hidden;
`;
const ProgresLine = styled.div`
    width:${({progress})=>progress+'%'};
    height:100%;
    background:${({color})=>color};
    border-radius:10px;

`;