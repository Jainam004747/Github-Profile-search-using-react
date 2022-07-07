import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { DisplayUserComponent } from "./DisplayUserComponent";

const configObj = {
  client_id: "Iv1.49dbcea3e12b2fda",
  client_secret: "31ba0ec2a07031e926a276f9e9e038f8d041781b",
  repos_count: 5,
  repos_sort: "created: asc",
  token: "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"
};
// const obj = {
//     "login": "Jainam004747",
//   "id": 108678229,
//   "node_id": "U_kgDOBnpMVQ",
//   "avatar_url": "https://avatars.githubusercontent.com/u/108678229?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Jainam004747",
//   "html_url": "https://github.com/Jainam004747",
//   "followers_url": "https://api.github.com/users/Jainam004747/followers",
//   "following_url": "https://api.github.com/users/Jainam004747/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Jainam004747/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Jainam004747/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Jainam004747/subscriptions",
//   "organizations_url": "https://api.github.com/users/Jainam004747/orgs",
//   "repos_url": "https://api.github.com/users/Jainam004747/repos",
//   "events_url": "https://api.github.com/users/Jainam004747/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Jainam004747/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "JAINAM PATEL",
//   "company": null,
//   "blog": "",
//   "location": "himmatnagar,gujrat",
//   "email": null,
//   "hireable": null,
//   "bio": "Student",
//   "twitter_username": null,
//   "public_repos": 5,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2022-07-04T13:36:14Z",
//   "updated_at": "2022-07-07T13:46:26Z"
// }
export const UserContainer = () => {
  //api calls
  const [userData, setUserData] = useState({});
  const fetchUserDetails = async (searchKey) => {
    // console.log(searchKey);
    const {
      data
    } = await axios.get(
      `https://api.github.com/users/${searchKey}?client_id=${configObj.client_id}&client_secret=${configObj.client_secret}`,
      { headers: { Authorization: configObj.token } }
    );
    setUserData(data);

    // call the api fetch, axios npm i axios
  };

  return (
    <div>
      <SearchBar fetchUserDetails={fetchUserDetails} />
      <DisplayUserComponent userData={userData} />
    </div>
  );
};
