
export const fetchData = () => {    
    return (dispatch, getState, { getBars }) => {
      console.log('fetching bars...')  
      let bars = getBars().then((res) => {
      bars = res;  
        console.log('bars up to date')
        dispatch({type: 'FETCH_SUCCESS' , bars})
      }).catch((error) => {
        console.log(error)    
        dispatch({type: 'FETCH_ERROR', error})
      });
    };
  };