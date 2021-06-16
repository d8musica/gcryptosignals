const initState = {
	authError: null,
	userAuth: null
};

const authReducer = (state = initState, action) => {
	switch(action.type){

		case 'LOGIN_ERROR':
			
			return {
				...state,
				authError: 'Login failed'
			}
		case 'LOGIN_SUCCESS':
			
			
			return {
				...state,
				authError: null,
				userAuth: action.user,
			}
			case 'LOGOUT_SUCCESS':
				
				
				return {
					...state,
					
					userAuth: null,
				}
				case 'LOGOUT_ERROR':
					
					
					return {
						...state,
						authError: action.error,
						
					}
		default: return state
	}
};

export default authReducer;