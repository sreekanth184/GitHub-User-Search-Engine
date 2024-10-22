import React from "react";
import { useState } from "react";
import Search_section from "../components/Search_section";
import Profile_section from "../components/Profile_section";
// import axios from 'axios'
import Default from "../components/Default";

function Home_page() {
  //   const [userdata, setuserdata] = useState("")

  // async function searchUsers(search){
  //   try{
  //       setIsLoading(true)
  //       let res= await Github_instance.get(`/search/users?q=${search}`)
  //       setuserdata(res.data)
  //   }
  //   catch(error){
  //       console.log(error)
  //       setIsError(true)
  //   }
  //   finally{
  //     setIsLoading(false)
  //   }
  // }

  // className='bg-custom-bg bg-cover bg-center h-screen w-full'
  return (
    <div>
      <Search_section />
      <Default />
      {/* {isError? <h1 className='flex justify-center text-xl font-bold text-gray-500'>Something went wrong...</h1>:<Profile_section userdata={userdata} isLoading={isLoading}/>} */}
    </div>
  );
}

export default Home_page;
