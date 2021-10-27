import styled from "styled-components";

import { v } from "../../styles/variables";

export const SHomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${v.headerHeight} - ${v.lgSpacing} * 2);
`;

export const STitle = styled.h1`
    color: ${({ theme }) => theme.primary};
`;
