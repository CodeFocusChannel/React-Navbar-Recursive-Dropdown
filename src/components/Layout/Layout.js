import React from "react";
import Header from "./Header/Header";
import { SPage } from "./styles";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SPage>{children}</SPage>
        </>
    );
};

export default Layout;
