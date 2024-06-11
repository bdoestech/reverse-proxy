
# Reverse-Proxy

This is a simple backend app that is based on NodeJS serves as a reverse proxy for APIs.


## API Reference

#### Fetch API response

```
  fetch(http://localhost:3000/?url=${target})
```


## Dependencies

#### Install using npm:

```
npm install express
npm install http-proxy
```

#### Package.JSON:

```
  "dependencies": {
    "express": "^4.19.2",
    "http-proxy": "^1.18.1"
  }
```
