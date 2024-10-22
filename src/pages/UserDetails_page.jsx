import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile_sidebar from "../components/Profile_sidebar";
import Repo_section from "../components/Repo_section";
import Github_instance from "../services/api";
import { Link } from "react-router-dom";

function UserDetails_page({ isLoading, setIsLoading, isError, setIsError }) {
  let [userProfileData, setUserProfileData] = useState();
  let [repoData, setRepoData] = useState([]);
  let { userName } = useParams();

  async function dataFetch() {
    try {
      setIsLoading(true);
      let res1 = await Github_instance.get(`/users/${userName}`);
      let res2 = await Github_instance.get(`/users/${userName}/repos`);

      setUserProfileData(res1.data);
      setRepoData(res2.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    dataFetch();
  }, [userName]);

  if (isError) {
    return <h1 className="text-red-500">Something went wrong</h1>;
  }

  if (isLoading) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center mt-20">
        <div className="w-20 h-20 border-4 border-transparent text-blue-600 text-4xl animate-spin flex items-center justify-center border-t-blue-600 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-purple-600 text-2xl animate-spin flex items-center justify-center border-t-purple-600 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Link
        to={`/`}
        className="text-center font-sans text-3xl font-bold text-white p-5 bg-black rounded-lg hover:cursor-pointer"
      >
        UserDetailsPage
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        <div className="col-span-1 border-gray-300 border rounded-lg flex items-center justify-center sm:items-start">
          <Profile_sidebar userProfileData={userProfileData} />
        </div>
        <div className="col-span-1 md:col-span-4 border-gray-300 border rounded-lg">
          <Repo_section repoData={repoData} />
        </div>
      </div>
    </div>
  );
}

export default UserDetails_page;
