# Mind the news

More info can be find in the README in the inside folders frontend and backend

## Deploy

To deploy you must have the following remotes and permission to push to them

```
heroku-backend  https://git.heroku.com/mind-the-news-backend.git
heroku-frontend https://git.heroku.com/mind-the-news-frontend.git
```

Then you can submit a git subtree to each one of them

```
git subtree push --prefix backend heroku-backend master
git subtree push --prefix frontend heroku-frontend master
```
