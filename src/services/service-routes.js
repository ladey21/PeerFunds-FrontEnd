function getPayload() {
  const token = localStorage.getItem("auth-token");
  if (token !== null) {
    const { roles: role, id: user_id, email } = JSON.parse(token);
    console.log("value of user id", user_id);
    return { role, user_id, email };
  }
}

const user_id = getPayload()?.user_id || 0;

const baseUrl = "/api";
const authRoute = `${baseUrl}/auth`;
const userRoute = `${baseUrl}/users`;
const groupRoute = `${userRoute}/${user_id}/groups`;
const requestRoute = `${userRoute}/${user_id}/requests`;
const requestInGroupRoute = `${groupRoute}/{gid}/requests/`;

const _routes = {
  login: `${authRoute}/signin`,
  register: `${authRoute}/signup`,
  groups: `${groupRoute}`,
  updateGroup: `${groupRoute}/{gid}`,
  deleteGroup: `${groupRoute}/{gid}`,
  currentUserDetails: `${userRoute}/${user_id}`,
  getAllMembersToGroup: `${groupRoute}/{gid}/member`,
  getAllRequestToGroups: `${groupRoute}/{gid}/requests`,
  allRequestsForUser: `${requestRoute}`,
  getRequestDetails: `${requestRoute}/{rid}`,
  joinRequestToGroup: `${requestInGroupRoute}/join`,
  exitRequestToGroup: `${requestInGroupRoute}/exit`,
  acceptJoinRequest: `${requestInGroupRoute}/{rid}/`,
};

export default _routes;
