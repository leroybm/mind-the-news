# Backend

REST API that recieves a JSON payload as GET, then returns the requested information that will be scapped from an external site via pupeteer

## Rationale

As the Front end will be just a list of news in React/Vue (Plain HTML with JS), dinamically built from the response of this API, the "JAM Stack" concept may be utilized, this is the "A" of JAM.

As the news are usually, well.. new, this API will not use a DB.

## Todo / Nice to haves

- Tests
  - I've tried using Jest, but the time constraint and my lack of knowledge of pupeteer made this be backlog
- GraphQL
  - It would make more sense to return just what the user requested, as this will be a dynamic service
- Cache

## Instructions

### Dev

```
yarn dev
```

### Lint

```
yarn lint
```

To automatically fix stuff

```
yarn lint:fix
```
