const initialState = {
    totalprice: 0
  }

  export const CartReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case "total":{
            return{
                ...state,
                total: payload
            }
        }
        default:
            return state
    }

  }