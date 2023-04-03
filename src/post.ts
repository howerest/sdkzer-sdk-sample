import {Sdkzer} from "sdkzer";

/**
  * Perform CRUD operations (Create, Read, Update and Delete) to deal with Posts.
  * Post is mapped to "http://localhost:8000/api/v1/posts" endpoint
  */

export interface PostFields {
  id: number | null;
  title?: string;
  content?: number;
}

export default class User extends Sdkzer<PostFields> {
  public baseEndpoint() {
    return "http://localhost:8000/api/v1/posts";
  }

  public defaults() {
    return {
      title: "",
      content: ""
    };
  }
}
