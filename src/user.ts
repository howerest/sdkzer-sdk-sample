import {Sdkzer} from "sdkzer";

/**
  * Perform CRUD operations (Create, Read, Update and Delete) to deal with Users.
  * User is mapped to "http://localhost:8000/api/v1/users" endpoint
  */

export interface UserFields {
  id: number | null;
  name?: string;
  age?: number;
}

export default class User extends Sdkzer<UserFields> {
  public baseEndpoint() {
    return "http://localhost:8000/api/v1/users";
  }

  public defaults() {
    return {
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  /*
   * Your instance methods hold your business logic using the state of
   * the record instance
   */
  public isOwnEmployee() {
    try {
      return (this.attr('email') as string).split('@')[1] === "mycompany.com";
    } catch(e) {
      return false;
    }
  }
}
