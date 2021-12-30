import authAction from "redux/actions";

const initialState = {
  Username: "amit@gmail.com",
  password: "12345"
}

const submitLoginDetailsRedcuer = (state = initialState, action) => {
  switch (action) {
    case 'LOGIN':
      console.log("stateeeeee",action,state)
      return {
        ...state,
        auth:{...state}

      }
    default:
      console.log("default called")
     return {
        ...state
      }
  }
}


export {
  submitLoginDetailsRedcuer
}