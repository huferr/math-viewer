import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { END_POINT } from "~query";
import { clearStorage, getData } from "~services/general/storage";

interface UserResponseType {
  user: {
    name: string,
    email: string,
    imageUri: string,
    mathscore: number,
  }
}

export const useUser = () => {
  
  const query = gql`
    query User {
        user {
          name
          email
          imageUri
          mathscore
        }
    }
    `;
  
  const fetch = async () => {
    
    const token = await getData("token");
    if(token) {
      const res = await request<UserResponseType>(END_POINT, query, {}, { Authorization: `bearer ${token}`});
      return res.user;
    }
    
    return null;
  };
  
  return useQuery("user", fetch, {
    onError: async (response) => {
      if(String(response).includes("not authenticated")) {
        await clearStorage();
      }
    }
  });
};