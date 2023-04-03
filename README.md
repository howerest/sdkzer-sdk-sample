### sdkzer SDK sample

Here an example of SDK using [sdkzer](https://www.github.com/howerest/sdkzer)

Note that this is just an example and in order to see the syncing working you need a working REST api with 3 endpoints: /users /posts / comments. This repository is only intended as a demo on you how to use sdkzer.

##### How to use

1. Install the this package as dependency: `yarn add sdkzer-sdk-sample`
2. Start using the SDK, example:

```
import {User, Post, Comment} from "sdkzer-sdk-sample"

const user = new User();
user.attr('name', 'Chuck Norris');
user.attr('email', 'employee@mycompany.com');
if (user.isOwnEmployee()) {
  console.log(`${user.attr('name')} is an internal employee`);
}

if (user.validate() && user.isValid()) {
  await user.save();
  console.log(`${user.attr('name')} is ${user.isNew() ? 'a non existing record': 'an existing record'`);
}

const commentsOfUser = Comment.fetchIndexByUser(user.attr('id'));
const commentsToday = commentsOfUser.filter(comment => comment.isToday());

```

For more information about the complete API refer to [sdkzer docs](https://www.github.com/howerest/sdkzer).
