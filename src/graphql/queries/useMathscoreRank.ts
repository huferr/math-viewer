import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { END_POINT } from "~query";
import { getData } from "~services/general/storage";

export interface UserListType {
    name: string,
    mathscore: number,
    position: number,
}

interface UserResponseType {
  mathscoreRank: [UserListType]
}

export const useMathscoreRank = () => {
  
  const query = gql`
    query MathscoreRank {
        mathscoreRank {
        name
        mathscore
        position
        }
    }
    `;
  
  const fetch = async () => {
    
    const token = await getData("token");
    if(token) {
      const res = await request<UserResponseType>(END_POINT, query, {}, { Authorization: `bearer ${token}`});
      return res.mathscoreRank;
    }
    
    return null;
  };
  
  return useQuery("mathscoRank", fetch);
};