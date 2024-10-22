import React, { useEffect, useState } from "react";
import Profile_card from "./Profile_card";
import { useParams } from "react-router-dom";
import Github_instance from "../services/api";

function Profile_section() {
  let { suser } = useParams();
  console.log(suser);

  const [userdata, setuserdata] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [isError, setIsError] = useState(false);

  async function searchUsers() {
    try {
      setIsLoading(true);
      let res = await Github_instance.get(`/search/users?q=${suser}`);
      setuserdata(res.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    searchUsers();
  }, [suser]);


  return (
    <div className=" w-full sm:w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  m-2 rounded-lg">
      {userdata?.items?.map((user) => (
        <Profile_card
          key={user.id}
          profileName={user.login}
          profileImg={user.avatar_url}
          profileLink={user.html_url}
        />
      ))}
    </div>
  );
}

export default Profile_section;
