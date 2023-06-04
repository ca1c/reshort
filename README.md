# reshort

MERN stack URL shortener for youtube tutorial

### Setup

create an environment variable file called `.env`

change the content of the file to this:

```
LOCAL_URL=http://localhost:4000/api/
```

Next run your instance of mongodb server, if you do not know how to do this here is a [tutorial on the setup of mongodb](https://www.tutorialspoint.com/mongodb/mongodb_environment.htm).

### How to run

1. install dependencies

```
$ cd client
/client $ npm install
/client $ cd ..
$ npm install
```

2. Build Client

```
$ cd client
/client $ npm run build
```

3. Run app.js

```
/client $ cd ..
$ node app.js
Listening on port 4000
```

Keep in mind you should have a valid instance of mongodb running locally on port .

Next in your browser navigate to `http://localhost:4000` to use the app;