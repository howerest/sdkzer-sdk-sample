import { Sdkzer } from "sdkzer";
export declare module SDK {
    /**
     * Perform CRUD operations (Create, Read, Update and Delete) to deal with Events
     * Event is mapped to "http://localhost:8000/api/v1/events" endpoint
     */
    class Event extends Sdkzer {
        baseEndpoint(): string;
        defaults(): {
            name: any;
            geo: {
                lat: any;
                lon: any;
            };
            start_date: any;
            end_date: any;
        };
        $parse(data: Object): any;
        toOriginJSON(): {
            'event': void | Object;
        };
        isHappening(): boolean;
        howLongAgo(): void;
        static fetchIndexByCityName(cityName: any): Promise<any[]>;
    }
    class Comment extends Sdkzer {
        baseEndpoint(): string;
        defaults(): {
            user_id: any;
            event_id: any;
            comment: any;
        };
    }
}
