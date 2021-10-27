import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../app/slices/uiSlice";
import Nav from "./Nav/Nav";
import {
    SCenter,
    SCloseIcon,
    SCTAButton,
    SHeader,
    SHeaderFixed,
    SHeaderHeight,
    SLeft,
    SLogo,
    SLogoLink,
    SMenu,
    SMenuIcon,
    SMenuToggleButton,
    SRight,
} from "./styles";

const Header = () => {
    const dispatch = useDispatch();
    const { menuOpen } = useSelector((state) => state.ui);

    const menuToggleHandler = () => {
        dispatch(uiActions.menuToggle());
    };
    const menuCloseHandler = () => {
        if (menuOpen) dispatch(uiActions.menuClose());
    };

    return (
        <>
            <SHeaderHeight />
            <SHeaderFixed>
                <SHeader>
                    <SLeft>
                        <SLogoLink to="/" onClick={menuCloseHandler}>
                            <SLogo />
                        </SLogoLink>
                    </SLeft>
                    <SCenter>
                        <Nav />
                    </SCenter>
                    <SRight>
                        <SCTAButton>Sign In</SCTAButton>
                        <SMenuToggleButton onClick={menuToggleHandler}>
                            {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
                        </SMenuToggleButton>
                    </SRight>
                </SHeader>
            </SHeaderFixed>
            <SMenu style={menuOpen ? { left: 0 } : {}}>
                <Nav menuToggleHandler={menuToggleHandler} />
            </SMenu>
        </>
    );
};

export default Header;
