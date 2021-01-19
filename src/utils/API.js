import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";
const NAT = "&nat=us";

let getEmployeeData = (query) => {
  return axios.get(BASEURL + query + NAT);
};
// eslint-disable-next-line
export default { getEmployeeData };
