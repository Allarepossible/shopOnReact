import styled from 'styled-components';

import Flex from '../Flex';
import {media} from '../../../helpers/global-styles';

const Container = styled(Flex)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
    
    ${media.big`width:1000px;`}
    ${media.desktop`width:90%;`}
    ${media.tablet`width:85%;`}
    ${media.phone`width:420px;`}
`;

export default Container;
