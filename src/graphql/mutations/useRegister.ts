import request, { gql } from "graphql-request";
import { useMutation } from "react-query";
import { queryClient, END_POINT } from "~query";
import { storeData } from "~services/general/storage";

export declare namespace UseRegisterTypes {
  interface Params {
    userRegisterInput: {
      name: string,
      email: string,
      password: string,
    }
  }
  
  interface Response {
    register: {
      accessToken: string,
    }
  }
      
}

export const useRegister = () => {
  
  const mutation = gql`
    mutation Register($userRegisterInput: UserRegisterInput!) {
        register(UserRegisterInput: $userRegisterInput) {
        accessToken
        }
    }
    `;
  
  const fetch = async (params: UseRegisterTypes.Params) => {
    const res = await request<UseRegisterTypes.Response>(END_POINT, mutation, params );

    await storeData("token", res.register.accessToken);
    
    return res.register.accessToken;
  };
  
  return useMutation("Login", fetch, {
    onSuccess: async (response) => {
      if (response) {
        await queryClient.refetchQueries("user");
      }
    },
  });
};