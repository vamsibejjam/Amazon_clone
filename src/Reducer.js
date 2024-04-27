

const persistedBasket = localStorage.getItem('basket');
const initialBasket = persistedBasket ? JSON.parse(persistedBasket) : [];
export const initialState = {
  basket: initialBasket,
  user: null,
};



const Reducer = (state, action) => {
 

  switch (action.type) {
    case 'ADD_TO_BASKET':
      const newState= {
        ...state,
        basket: [...state.basket, action.item],
      };
        localStorage.setItem('basket', JSON.stringify(newState.basket));
        return newState;
      

    case 'REMOVE_FROM_BASKET':
     const removeState={
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
      localStorage.setItem('basket', JSON.stringify(removeState.basket));
      return removeState;

    case 'SET_USER':
      const userState= {
        ...state,
        user: action.user,
      };
      localStorage.setItem('Users', JSON.stringify(userState.user));
      return userState;

    case 'EMPTY_BASKET':
      const emptyState= {
        ...state,
        basket: [],
      };
      localStorage.setItem('basket',JSON.stringify(emptyState.basket))
      return emptyState;

    default:
      return state;
  }
};

  
  export default Reducer;