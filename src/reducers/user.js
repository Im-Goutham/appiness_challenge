// Reducers for error, loading and data fetch
var initialState = {
    user: {username:''}
};

export const user = (state = initialState, action) => {
   switch (action.type) {
       case 'SAVE_USER':
           return Object.assign({},state,{user:action.payload});
       default:
           return state;
   }
}


