import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;

    justify-content: space-between;
`;

export const LayoutColumn = styled(Layout)`
    flex-direction: column;
    
    align-items: center;
`;
