import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { END_POINT } from "~query";
import { getData } from "~services/general/storage";

interface UserResponseType {
  user: {
    name: string,
    email: string,
    imageUri: string,
  }
}

export const useUser = () => {
  
  const query = gql`
    query User {
        user {
        name
        email
        imageUri
        }
    }
    `;
  
  const fetch = async () => {
    const token = await getData("token");
    
    const res = await request<UserResponseType>(END_POINT, query, {}, { Authorization: `bearer ${token}`});

    return res.user;


  };
  
  return useQuery("user", fetch);
};