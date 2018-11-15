import styled from 'styled-components';
import Box from 'components/Box';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

export default Container;
