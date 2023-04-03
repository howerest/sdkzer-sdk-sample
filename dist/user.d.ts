import { Sdkzer } from "sdkzer";
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
    baseEndpoint(): string;
    defaults(): {
        first_name: string;
        last_name: string;
        email: string;
    };
    isOwnEmployee(): boolean;
}
