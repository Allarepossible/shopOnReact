import styled from 'styled-components';

import Box from '../Box';
import {media} from '../../../helpers/global-styles';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
    
    ${media.desktop`width:900px;`}
    ${media.tablet`width:700px;`}
    ${media.phone`width:420px;`}
`;

export default Container;
