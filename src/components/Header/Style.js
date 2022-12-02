import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderPage = styled.header`
  padding: 20px;
  border-bottom: 1px solid #000;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  height: 100%;
`;

export const NaveLink = styled(NavLink)`
  display: block;
  height: 100%;
  padding: 10px;
  text-decoration: none;

  &.active{
    color: red;
  }
`;