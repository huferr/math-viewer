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