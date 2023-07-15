import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color:rgb(3, 110, 110);
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    text-transform: uppercase;
`

const Announcement = () => {
  return (
    <Container>
        Contactanos al: +11 57590543
    </Container>
  )
}

export default Announcement