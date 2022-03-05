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