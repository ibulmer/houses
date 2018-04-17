export const addHouse = ((id, name, location, price) => {
    return {
        type: 'ADD_HOUSE',
        id,
        name,
        location,
        price
    }
});

export const deleteHouse = (id) => {
    return {type: 'DELETE_HOUSE', id}
}