export const initialState = {
  dashboardView: "home",
  authType: "login",
  isLoggedIn: false,
  userProfileViewType: "personalInfo",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setDashboardView":
      return {
        ...state,
        dashboardView: action.item,
      };
    case "setAuthType":
      return {
        ...state,
        authType: action.item,
      };
    case "setUserProfileViewType":
      return {
        ...state,
        userProfileViewType: action.item,
      };
    case "setIsLoggedIn":
      return {
        ...state,
        isLoggedIn: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
