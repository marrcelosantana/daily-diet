import { HeaderContainer, Logo, UserImage } from "./styles";

import logo from "@assets/logo.png";
import userImg from "@assets/user.png";

export function Header() {
  return (
    <HeaderContainer>
      <Logo source={logo} />
      <UserImage source={userImg} />
    </HeaderContainer>
  );
}
