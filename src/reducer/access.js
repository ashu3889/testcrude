
export default function(state = {}, action) {
  switch(action.type) {
    case 'AUTH_USER':
      return { ...state, error: '', authenticated: true };
    case 'ACCESS':
    alert(action.payload);
    	return action.payload;  
    case 'AUTH_ERROR':
      return { ...state, error: action.payload };
    case 'FETCH_MESSAGE':
      return { ...state, message: action.payload };
  }

  return state;
}
