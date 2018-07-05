### sdkzer SDK sample

Here an example of SDK using [sdkzer](https://www.github.com/howerest/sdkzer)

##### How to use

1. Install the this package as dependency: `yarn add sdkzer-sdk-sample --save-dev`
2. Start using the SDK:

```javascript
import {SDK} from "sdkzer-sdk-sample"

// Fetch a collection of Events in the city of New York
const eventsInNewYork = SDK.Event.fetchIndexByCityName("New York").then(
  // Success
  function(eventInstances) {
    events = eventInstances;
  },
  // Fail
  function() { }
);

// Create a new event in Amsterdam
const newEventInAmsterdam = new Event({
  name: "The coolest event ever in Amsterdam",
  geo: {
    lat: 52.3702,
    lon: 4.8952
  },
  start_date: "2018-07-04T21:00:00.744Z",
  end_date: "2018-07-04T23:00:00.744Z"
});

event.save(); // We got a Promise

```

For more information about the complete API refer to [sdkzer docs](https://www.github.com/howerest/sdkzer).
