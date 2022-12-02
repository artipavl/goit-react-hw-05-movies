import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieInformationBox = styled.div`
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #000;
  padding: 15px 0px;
`;

export const MovieInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Box = styled.div`
  padding: 15px;
`;

export const GoBeck = styled(Link)`
  padding: 10px;
  background: #fafafa;
  text-transform: none;
  border-radius: 4px;
  :hover,
  :focus {
    background: #afafaf;
  }
`;
