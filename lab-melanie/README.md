# 38 File Reader

This is an application that allows a user to sign up and/or sign in, then redirects the user to their dashboard.

Currently, the user must sign up at:
```
localhost:8080/welcome/signup
```

Then the user needs to navigate to:
```
localhost:8080/welcome/signin
```

This will then redirect the user to their dashboard. At this point, a second user may sign up and will be automatically redirected to the dashboard, but not on the initial user sign up.

Once a user has been signed in or signed up, they may navigate to the dashboard at any time. If a user attempts to access the dashboard for the first time, the dashboard route will redirect the user to the signup route.

Dashboard route:
```
localhost:8080/dashboard
```

---

### Environment Variables:

front-end:
```
.dev.env:

NODE_ENV=dev
API_URL="http://localhost:3000"
CDN_URL="/"
```

back-end:
```
.env:

PORT=3000
DEBUG=true
CORS_ORIGINS=http://localhost:8080
SECRET=PUMPKIN
MONGO_URI=mongodb://localhost/picgram
```
