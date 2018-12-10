import http from "./httpService";

//const apiEndpoint = "http://apidev.doeaqui.net/api/users";
const apiEndpoint = "https://localhost:5001/api/users";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUser(id) {
  return http.get(userUrl(id));
}

export async function register(name, email, password, phone) {
  await http.post(apiEndpoint, { name, email, password, phone });
}

export async function update(id, name, email, phone) {
  const { data: result } = await http.put(apiEndpoint, {
    id,
    name,
    email,
    phone
  });
  console.log(result);
}

export async function manageAddress(
  id,
  street,
  neighborhood,
  city,
  state,
  country,
  postalCode,
  userId
) {
  if (id === "") {
    await http.post(apiEndpoint + "/address", {
      street,
      neighborhood,
      city,
      state,
      country,
      postalCode,
      userId
    });
  } else {
    await http.post(apiEndpoint + "/address", {
      id,
      street,
      neighborhood,
      city,
      state,
      country,
      postalCode,
      userId
    });
  }
}

export default {
  getUser,
  register,
  update,
  manageAddress
};
