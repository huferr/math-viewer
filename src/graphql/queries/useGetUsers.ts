import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { END_POINT } from "~config";

export const useGetUsers = () => {
  
  const path = gql`
    query Users {
        users {
          id
          email
        }
      }
    `;
  
  const fetch = async () => await request(END_POINT, path);
  
  return useQuery("users", fetch);
};