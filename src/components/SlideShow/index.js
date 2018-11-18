import React, {Component} from 'react';
import styled from 'styled-components';
import Box from 'components/Box';
import Flex from 'components/Flex';

const SlideShowStyle = styled.div`
    width: ${({type}) => (type === 'small' ? 138 : 250)}px;
    margin-bottom: 15px;
`;

const WrapImg = styled(Flex)`
    width: ${({type}) => (type === 'small' ? 138 : 250)}px;
    height: ${({type}) => (type === 'small' ? 138 : 250)}px;
    margin-bottom: 15px;

    border: 1px solid #dee1e4;
    border-radius: 2px;
    background-color: #fff;
`;

const Img = styled.img`
    max-width: 95%;
    max-height: 95%;
`;

const Item = styled(Box)`
    position: relative;
    cursor: pointer;

    width: ${({type}) => (type === 'small' ? 33 : 60)}px;
    height: ${({type}) => (type === 'small' ? 33 : 60)}px;

    border: 1px solid;
    border-color: ${({active}) => (active ? '#ff6e35' : '#dee1e4')};
    border-radius: 2px;
    background-color: #fff;
    
    &:hover {
        border-color: ${({active}) => (active ? '#ff6e35' : '#333')};
    }
`;

class SlideShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeImage: 0,
        };

        this.onClickPreview = this.onClickPreview.bind(this);
    }

    onClickPreview(e) {
        const activeIndex = e.currentTarget.getAttribute('index');

        this.setState({activeImage: activeIndex});
    }

    render() {
        const {images, type, name} = this.props;
        const bigImage = images[this.state.activeImage].image;

        return (
            <SlideShowStyle type={type}>
                <WrapImg justifyContent='center' alignItems='center' type={type}>
                    <Img src={bigImage} alt={name} type={type} />
                </WrapImg>
                <Flex justifyContent='space-around'>
                    {
                        images.map((image, i) => (
                            <Item active={i === Number(this.state.activeImage) ? 'yes' : undefined} key={i} type={type}>
                                <Flex
                                    justifyContent='center'
                                    alignItems='center'
                                    height='100%'
                                    onClick={this.onClickPreview}
                                    index={i}
                                >
                                    <Img src={image.image} alt='' type={type} />
                                </Flex>
                            </Item>
                        ))
                    }
                </Flex>
            </SlideShowStyle>
        );
    }
}

export default SlideShow;
