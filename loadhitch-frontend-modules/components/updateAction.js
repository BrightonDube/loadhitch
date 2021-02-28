export default function updateAction(state, payload) {
  console.log("state:", state);
  console.log("payload:", payload);
  return {
    ...state,
    ...payload,
  };
}
// export default function updateAction(state, payload) {
//   return {
//     ...state,
//     yourDetails: {
//       ...state.yourDetails,
//       ...payload
//     }
//   };
// }
