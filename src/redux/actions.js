export const SET_USERS_DATA = "SET_USERS_DATA";
export const SET_AUTH_DATA = "SET_AUTH_DATA";

export const setusersData = (data) => ({
  type: SET_USERS_DATA,
  data,
});

export const getUsers = () => async (dispatch) => {
  const response = await fetch("http://localhost:3500/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Specify JSON content type
    },
  });
  if (!response.ok) {
    throw new Error("Sign In failed");
  }
  const data = await response.json();
  dispatch(setusersData(data));
};

export const getAuth =
  ({ username, password }) =>
  async (dispatch) => {
    const response = await fetch(`http://localhost:3500/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response?.json();
      const accessToken = data?.accessToken;
      localStorage?.setItem("accessToken", accessToken);
      document.cookie = `accessToken=${accessToken};HttpOnly; Secure; SameSite=Strict`;

      fetch("http://localhost:3500/dashboard", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } else if (response?.status === 401) {
      console.log("Email or password is wrong");
    }

    // dispatch(setusersData(data || []));
  };
