import {Sdkzer} from "sdkzer";
import {WebServices} from "js-webservices";

export module SDK {
 /**
  * Perform CRUD operations (Create, Read, Update and Delete) to deal with Events
  * Event is mapped to "http://localhost:8000/api/v1/events" endpoint
  */
 export class Event extends Sdkzer {
    public baseEndpoint() {
       return "http://localhost:8000/api/v1/events";
     }

     public defaults() {
       return {
         name: null,
         geo: {
           lat: null,
           lon: null
         },
         start_date: null,
         end_date: null
       };
     }

     /*
      * This parses the data received from the origin endpoint
      */
     public $parse(data:Object) {
       return data['event'];
     }

     /*
      * This converts local state into data understandable by the origin endpoint
      */
     public toOriginJSON() {
       return { 'event': this.attr() };
     }

     /*
      * Your instance methods hold your business logic
      */
     public isHappening() {
       return (this.attr("start_date") === new Date().toISOString().slice(0, 10));
     }

     public howLongAgo() {
       // ...
     }

     // [...]

     /*
      * Your static methods to retrieve collections
      */
      public static fetchIndexByCityName(cityName) {
        // This query will merged on top of the default Event.fetchIndex() HttpQuery
        var indexByCityNameHttpQuery = new WebServices.HttpQuery({
            qsParams: {
              'city_name': cityName
            }
        });

        // Always use the default fetchIndex() passing your custom HttpQuery
        // to retrieve collections. if you need to override it do it
        return Event.fetchIndex(indexByCityNameHttpQuery);
      }
     // [...]
   }

   export class Comment extends Sdkzer {
      public baseEndpoint() {
         return "http://localhost:8000/api/v1/comments";
       }

       public defaults() {
         return {
           user_id: null,
           event_id: null,
           comment: null
         };
       }
    }
}
