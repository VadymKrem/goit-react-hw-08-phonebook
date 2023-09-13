import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;

  margin-right: 114px;

  color: #0770f8;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #e1f907;
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul`
  list-style-type: none;
  color: #ebf805;
  background-color: #ffffff;
  :hover,
  :focus {
    font-weight: 600;

    color: #be4fd5;
    background-color: #f7f7f7;
  }
`;
export const MainNavItem = styled.li``;
export const MainNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  padding: 22px 28px;

  color: #000000;
  background-color: #ffffff;
  border-radius: 18px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    font-weight: 600;

    color: #ffffff;
    background-color: #d44cf2;
  }
`;
