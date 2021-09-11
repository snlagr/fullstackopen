const reducer = (state = '', action) => {
  switch(action.type) {
    case 'NOTIFY':
      return action.notification
    default:
      return state
  }
}

// let timeoutID = null
export const setNotification = (notification, time) => {
  return dispatch => {
    // clearInterval(timeoutID)
    dispatch({
      type: 'NOTIFY',
      notification
    })
    return setTimeout(() => dispatch({type: 'NOTIFY', notification: ''}), time * 1000)
  }
}

// export const notificationChange = notification => {
//   return {
//     type: 'NOTIFY',
//     notification
//   }
// }

export default reducer