import { LoggedItem, LoggedLink, LoggedList } from './LogNav.styled';

const LogNav = () => {
  return (
    <LoggedList>
      <LoggedItem>
        <LoggedLink to="login">LogIn</LoggedLink>
      </LoggedItem>
      <LoggedItem>
        <LoggedLink to="register">Register</LoggedLink>
      </LoggedItem>
    </LoggedList>
  );
};

export default LogNav;
