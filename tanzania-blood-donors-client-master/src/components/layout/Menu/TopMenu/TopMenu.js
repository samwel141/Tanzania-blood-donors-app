import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import * as React from "react";
import { AppBarStyled, LogoStyled, ToolbarStyled } from "./TopMenuStyled";
// import AuthContext from "../../../../store/auth-context";
import { FlexDiv } from "../../../UI/common/commonStyled";
import IconLogo from "../../../UI/iconLogo";


const TopMenu = ({ handleDrawerOpen, open }) => {
//   const authContext = React.useContext(AuthContext);

//   const logoutHandler = () => authContext.logout();

  return (
    <AppBarStyled position="fixed" open={open}>
      <ToolbarStyled>
        <FlexDiv>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <LogoStyled variant="h6" noWrap component="div">
            <IconLogo />
          </LogoStyled>
        </FlexDiv>
        <div>
          <ExitToAppIcon
            color="inherit"
            style={{ cursor: "pointer" }}
            onClick={()=>{}}
          ></ExitToAppIcon>
        </div>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default TopMenu;
