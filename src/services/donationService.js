import http from "./httpService";

//const apiEndpoint = "http://apidev.doeaqui.net/api/donations";
const apiEndpoint = "https://localhost:5001/api/donations";

async function getNewestDonations() {
  const { data: result } = await http.get(apiEndpoint + "/newest");
  return result.data;
}

async function getDonationsByUser(id) {
  const { data: result } = await http.get(apiEndpoint + "/user/" + id);
  return result.data;
}

export default {
  getNewestDonations,
  getDonationsByUser
};
