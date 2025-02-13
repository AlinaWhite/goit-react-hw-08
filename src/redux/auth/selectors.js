export const selectUser = (state) => state.auth.user;
export const selectUserDataIsLoading = (state) => state.auth.isLoading;
export const selectUserDatError = (state) => state.auth.isError;
export const selectUserDataIsToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
