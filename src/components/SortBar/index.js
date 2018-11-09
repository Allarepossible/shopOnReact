import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Box from 'components/Box';
import Text from 'components/Text';
import Flex from 'components/Flex';

const Container = styled(Flex)`
    justify-content: space-between;

    padding: 10px;
    margin-bottom: 20px;

    border: 1px solid #dee1e4;
    border-radius: 5px;
    background-color: rgba(217, 229, 234, .6);
    background-clip: padding-box;
`;

const Item = styled(Box)`
    padding: 12px 18px;
    
    & + & {
        border-left: 1px solid #ccc;
    }
`;

const View = styled(Box)`
    cursor: pointer;
    width: 16px;
    height: 16px;

    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgQAAAAQBAMAAACb9HoBAAAAFVBMVEUAAABERERERERbZ3BbZ3Clu8Slu8SF77IWAAAAB3RSTlMAAP8A/wD/DJr2tAAAAHlJREFUeNrtlcENgDAMA/3oAl2BWToLQzELs7BCViAV/ddF/DgrUj8nq7KiuDRFVerUVPtAjzm6dTTnMl1zDNc2XuuvjwzXot+LCIggIwgpTHYZje9R+R9gC/wI6jjzhlbRPj5qudqqbAHnkAhoBBqBRqAROIdE8EI3fw4xU/V1oMsAAAAASUVORK5CYII=');

    &.column {
        background-position: -86px 0;
    }
    &.column:hover, &.column.active {
        background-position: 0 0;
    }
    
    &.tile {
        background-position: -258px 0;
    }
    &.tile:hover, &.tile.active {
        background-position: -172px 0;
    }
    
    &.line {
        background-position: -430px 0;
    }
    &.line:hover, &.line.active {
        background-position: -344px 0;
    }
`;

const ViewItem = ({
    id, name, active, changeViewProducts,
}) => {
    const classname = active ? `${name} active` : name;

    return (
        <Item>
            <div onClick={changeViewProducts} data={id}>
                <View className={classname} />
            </div>
        </Item>
    );
};

const SortBar = ({
    products, views, sorts, changeView, changeSort, sortProduct,
}) => {
    const changeViewProducts = e => {
        const newActiveId = Number(e.currentTarget.getAttribute('data'));
        const newViews = views.map((view, id) => {
            view.active = id === newActiveId;

            return view;
        });

        changeView(newViews);
    };

    const changeSortProducts = e => {
        const activeSort = e.target.value;
        const newSort = sorts.map(sort => {
            sort.active = sort.name === activeSort;

            return sort;
        });
        const sortedProducts = products.sort((a, b) => a[activeSort] - b[activeSort]);

        changeSort(newSort);
        sortProduct(sortedProducts);
    };

    return (
        <Container>
            <Flex>
                <Text fontSize='s' color='grey' lineHeight='40px'>Сортировать по</Text>
                <Box ml={3} pt={2} pb={2}>
                    <select name="sort" onChange={changeSortProducts}>
                        <option value="date">по новизне</option>
                        <option value="ratio">по рейтингу</option>
                        <option value="price">по цене</option>
                    </select>
                </Box>
            </Flex>
            <Flex>
                <Text fontSize='s' color='grey' lineHeight='40px'>Вид каталога</Text>
                <Flex ml={3}>
                    {
                        views.map((view, index) => (
                            <ViewItem
                                key={index}
                                id={index}
                                name={view.name}
                                active={view.active}
                                changeViewProducts={changeViewProducts}
                            />
                        ))
                    }
                </Flex>
            </Flex>
        </Container>
    );
};

const mapStateToProps = state => ({
    products: state.products,
    views: state.views,
    sorts: state.sort,
});

const mapDispatchToProps = dispatch => ({
    changeView: newViews => {
        const payload = newViews;
        dispatch({type: 'CHANGE_VIEW', payload});
    },
    changeSort: newSort => {
        const payload = newSort;
        dispatch({type: 'CHANGE_SORT', payload});
    },
    sortProduct: sortProducts => {
        const payload = sortProducts;
        dispatch({type: 'SORT_PRODUCTS', payload});
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);
