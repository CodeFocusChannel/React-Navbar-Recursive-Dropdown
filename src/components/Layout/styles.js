import styled from "styled-components";

import { v, b, s } from "./../../styles/variables";

export const SPage = styled.main`
    transition: 0.3s ease padding;
    padding: ${v.mdSpacing};
    @media ${b.sm} {
        padding: ${v.lgSpacing};
    }
    @media ${b.lg} {
        padding: ${v.lgSpacing} ${v.mdSpacing};
        margin: 0 auto;
        width: 100%;
        max-width: ${s.lg};
    }
`;
