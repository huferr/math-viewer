import request, { gql } from "graphql-request";
import { useMutation } from "react-query";
import { END_POINT } from "~config";
import { queryClient } from "~query";
import { storeData } from "~services/general/storage";
import { UseLoginTypes } from "~typings/mutations/useLogin";

export const useLogin = () => {
  
  const mutation = gql`
    mutation Login($userLoginInput: UserLoginInput!) {
        login(UserLoginInput: $userLoginInput) {
        accessToken
        }
    }
    `;
  
  const fetch = async (params: UseLoginTypes.Params) => {
    const res = await request<UseLoginTypes.Response>(END_POINT, mutation, params );

    await storeData("token", res.login.accessToken);
    
    return res.login.accessToken;
  };
  
  return useMutation("Login", fetch, {
    onSuccess: async (response) => {
      if (response) {
        await queryClient.refetchQueries("user");
      }
    },
  });
};