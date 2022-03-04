import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { END_POINT } from "~query";
import { getData } from "~services/general/storage";

export const useUser = () => {
  
  const query = gql`
    query User {
        user {
        name
        email
        }
    }
    `;
  
  const fetch = async () => {
    const token = await getData("token");
    
    const res = await request(END_POINT, query, {}, { Authorization: `bearer ${token}`});

    return res;


  };
  
  return useQuery("user", fetch);
};