# TWEEREAT - tweet regenerator
## Description

A web application that will allow the developer-user to collect their tweets and add them to a database of "evergreen" (not dated, always relevant) tweets. They will then be able to retweet tweets stored in said database either at regular intervals, or manually.

Building this app will require use of the [Twitter REST API](https://dev.twitter.com/overview/api) with OAuth (meaning that you will need to get an API key from Twitter in order to access the API), Javascript, [Node.js](https://nodejs.org/en/), [Express](http://expressjs.com/), routing by way of [Routes.js](https://www.npmjs.com/package/routes-js), [MySQL](https://www.mysql.com/) for database management, and (optionally) a templating engine like [Handlebars](http://handlebarsjs.com/).

## Context

The life-span for a tweet is about 20 minutes, which means that most of your Twitter followers will not see your tweets the first time you post them. For this reason, re-tweeting your best content is a good idea. This web app will allow you to grab and store your best, evergreen content tweets and re-tweet them to your followers. By keeping your Twitter followers better informed and entertained, you will organically grow your Twitter audience faster.

Developers/Learners will get practice working with Twitter's REST APIs on the backend; and with creating and working with a database on the backend (CRUD).


## Specifications

- [x] Use the Twitter API to access a user's last ten Twitter posts.
- [ ] Store past tweets in a database for future access.
- [ ] View database of past tweets in an attractive yet simple UI.
- [ ] Re-Tweet posts in database of past tweets randomly, manually, or on a timer.

## Stretch Goals

- [ ] Retrieve past tweets from Twitter feed either in batches (say, the last ten tweets) or automatically
      as they are being tweeted out.
- [ ] Edit tweets in, or delete tweets from, database in the UI.
- [ ] Store another user's tweets in database by accessing and capturing their Twitter feed.
- [ ] Re-Tweet posts in database randomly, manually, or automatically on a set timer (i.e., once an hour).
- [ ] Ability to organize database of past tweets according to categories (use of filters).


### Required

- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## Quality Rubric

- UI: Attractive, intuitive user experience: 20 points.
- Code is readable and well organized: 20 points.
- Minimally, app should successfully access the Twitter API to retrieve tweet history (20 points);
- store tweets in a database (20 points);
- and allow user to retweet this content back out (20 points):
Total 60 points.
---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
