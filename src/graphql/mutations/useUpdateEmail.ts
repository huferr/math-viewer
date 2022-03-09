import request, { gql } from "graphql-request";
import { useMutation } from "react-query";
import { queryClient, END_POINT } from "~query";
import { getData } from "~services/general/storage";

interface Params {
  email: string,
}

export const useUpdateEmail = () => {
  
  const mutation = gql`
    mutation UpdateEmail($email: String!) {
        updateEmail(email: $email)
    }
  `;
  
  const fetch = async (params: Params) => {
    const token = await getData("token");
    const res = await request(END_POINT, mutation, params, { Authorization: `bearer ${token}`} );

    return res;
  };
  
  return useMutation("updateEmail", fetch, {
    onSuccess: async (response) => {
      if (response) {
        await queryClient.refetchQueries("user");
      }
    },
  });
};