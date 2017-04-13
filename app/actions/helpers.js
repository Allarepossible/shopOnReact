const mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'Master of Puppets'
    },
    {
        id: 4,
        name: 'Fade to Black'
    },
    {
        id: 5,
        name: 'Nothing Else Matters'
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
    }, 2000)
};
