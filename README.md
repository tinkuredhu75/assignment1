# Skeleton Express
This is a basic express app that is incomplete. You need to finish it.


## Routes
* The table below describes the routes currently available with this project.

|Route | Method | Request Body | Description |
|--|--|--|--|
| `\` | `GET` | | The home Page |
| `\error` | `GET` | | Causes an internal error |
| `\search?query=:q`| `GET` | | Searches for a game matching `:q` |
| `/games/game`| `post` | `{name: "game", designer: "some human"}` | Adds a game to the database |