import {keys, merge, pipe, reduce} from 'ramda';
import {tint, shade} from 'polished';

const BASE_COLORS = {
    black: '#000',
    white: '#fff',
    gray: '#7f7f7f',
    primary: '#ff6e35',
    secondary: '#e84100',
    danger: '#F14C61',
};

/**
 * For each key we return the accumulated object plus:
 * - The color corresponding to that key
 * - A light version
 * - A dark version
 *
 * Example: {
 *  primary: '#31CEA6',
 *  primaryLight: '#45d2ae',
 *  primaryDark: '#45d2ae',
 * }
 */
const tonesReducer = (acc, curr) => {
    const baseColor = BASE_COLORS[curr];
    return merge(acc)({
        [curr]: baseColor,
        [`${curr}Light`]: tint(0.5, baseColor),
        [`${curr}Dark`]: shade(0.2, baseColor),
    });
};

/**
 * Reduction over each key of BASE_COLORS, omitting black and white
 */
const generateColors = pipe(
    keys,
    reduce(tonesReducer, {})
);

export default generateColors(BASE_COLORS);
