const houses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOUSE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    location: action.location,
                    price: action.price
                }
            ]
        case 'DELETE_HOUSE':
            return [...state].filter(house => action.id !== house.id);
        default:
            return [...state];
    }
}

export default houses;