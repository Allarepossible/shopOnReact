import React from 'react';
import styled, {withTheme} from 'styled-components';
import Box from 'components/Box';

const StyledButton = styled(Box)`
  &:hover {
    background-color: ${({theme, bgHover}) => theme.colors[bgHover]};
    border-color: ${({theme, borderColor}) => theme.colors[borderColor]};
  }
`;

const Button = ({
    type = 'primary',
    size = 'md',
    theme,
    ...props
}) => {
    const color = type === 'primary' ? 'white' : 'blackLight';
    const colorHover = type === 'primary' ? 'white' : 'black';
    const bgHover = type === 'primary' ? 'secondary' : `${type}Dark`;

    return (
        <StyledButton
            color={color}
            colorHover={colorHover}
            bg={type}
            bgHover={bgHover}
            {...theme.defaults.buttonSizes[size]}
            is="button"
            blacklist={[
                'colorHover',
                'bgHover',
                'borderRadius',
                'fontWeights',
            ]}
            {...props}
        />
    );
};

export default withTheme(Button);
