import { LengthValidator, RegExpValidator, RequiredValidator, Sdkzer } from "sdkzer";
/**
  * Perform CRUD operations (Create, Read, Update and Delete) to deal with Comments.
  * Comment is mapped to "http://localhost:8000/api/v1/comments" endpoint
  */
export interface CommentFields {
    id: number | null;
    user_id?: number | null;
    post_id?: number | null;
    date?: string;
    comment?: string;
}
export default class Event extends Sdkzer<CommentFields> {
    baseEndpoint(): string;
    private dateRegExp;
    protected validationRules: {
        user_id: RequiredValidator[];
        post_id: RequiredValidator[];
        name: (RequiredValidator | LengthValidator)[];
        date: (RequiredValidator | RegExpValidator)[];
    };
    defaults(): {
        post_id: any;
        date: string;
        comment: string;
    };
    isToday(): boolean;
    static fetchIndexByUser(userId: number): Promise<any[]>;
}
