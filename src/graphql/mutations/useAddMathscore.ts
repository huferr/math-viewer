import request, { gql } from "graphql-request";
import { useMutation } from "react-query";
import { queryClient, END_POINT } from "~query";
import { getData } from "~services/general/storage";

  interface Params {
    amount: number,
  }

export const useAddMathscore = () => {
  
  const mutation = gql`
    mutation AddMathscore($amount: Int!) {
        addMathscore(amount: $amount)
    }
  `;
  
  const fetch = async (params: Params) => {
    const token = await getData("token");
    const res = await request(END_POINT, mutation, params, { Authorization: `bearer ${token}`} );

    return res;
  };
  
  return useMutation("addMathscore", fetch, {
    onSuccess: async (response) => {
      if (response) {
        await queryClient.refetchQueries("user");
      }
    },
  });
};