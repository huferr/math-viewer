import request, { gql } from "graphql-request";
import { useMutation } from "react-query";
import { queryClient, END_POINT } from "~query";
import { storeData } from "~services/general/storage";

export declare namespace UseLoginTypes {
  interface Params {
    userLoginInput: {
      email: string,
      password: string,
    }
  }

  interface Response {
    login: {
      accessToken: string,
    }
  }
    
}

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