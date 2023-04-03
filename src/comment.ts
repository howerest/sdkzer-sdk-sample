import {LengthValidator, RegExpValidator, RequiredValidator, Sdkzer} from "sdkzer";

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
  public baseEndpoint() {
    return "http://localhost:8000/api/v1/comments";
  }

  private dateRegExp = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/;

  protected validationRules = {
    'user_id': [new RequiredValidator()],
    'post_id': [new RequiredValidator()],
    'name': [
      new RequiredValidator(),
      new LengthValidator({ min: 2, max: 20 })
    ],
    'date': [
      new RequiredValidator(),
      new RegExpValidator({
        // validates a date like 2023-12-15T08:30:30Z
        rule: this.dateRegExp
      })
    ]
  }

  public defaults() {
    return {
      post_id: null,
      date: "",
      comment: ""
    };
  }

  /*
  * Your instance methods hold your business logic using the state of
  * the record instance
  */
  public isToday() {
    return (this.attr("date") === new Date().toISOString().slice(0, 10));
  }

  /*
  * Your static methods to retrieve collections
  */
  public static fetchIndexByUser(userId: number) {
    // This query will merged on top of the default Comment.fetchIndex() HttpQuery
    const indexByUserIdHttpQuery = {
      qsParams: {
        'user_id': userId
      }
    };

    // Always use the default fetchIndex() passing your custom HttpQuery
    // to retrieve collections. if you need to override it do it
    return Event.fetchIndex(indexByUserIdHttpQuery);
  }
}