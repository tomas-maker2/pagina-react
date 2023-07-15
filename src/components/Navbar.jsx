import React from 'react'
import { styled } from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import Badge from '@mui/material/Badge';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Container  = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`;

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Lenguaje = styled.div`
font-size:14px;
cursor:pointer;
`;

const SearchContainer = styled.div`
border:1px solid lightgrey;
display:flex;
align-items:center;
margin-left: 25px;
padding:5px
`;

const Input = styled.input`
border:none;
`;

const Logo = styled.h1`
font-weight:bold;
font-size:37px;
color:#000;
text-decoration:none;
`

const Center = styled.div`
flex:1;
text-align:center;
`;

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
text-decoration: none;
color:#000;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Lenguaje>EN</Lenguaje>
                <SearchContainer>
                <Input/>
                <BsSearch styled={{color:"grey", fontSize:"16px"}}/>
                </SearchContainer>
            </Left>
            <Link to={'/'}>
            <Center><Logo>POLIS</Logo></Center>
            </Link>
            <Right>
                <Link to={'/shop'}>
                <MenuItem>SHOP</MenuItem>
                </Link>
                <MenuItem>SIGN-IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <AiOutlineShoppingCart />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar