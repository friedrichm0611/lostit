const apiURL = process.env.REACT_APP_API_URL;

import { createHeaders } from "./index";

export const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiURL}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const createUser = async (username) => {
  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        orders: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not create user with username" + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);
  if (user.lenght > 0) {
    return [null, user.pop()];
  }
  const [createError, newUser] = createUser(username);
  if (createError !== null) {
    return [null, newUser];
  }
};
