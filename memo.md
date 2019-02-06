- over-fetching
  - get huge object that including other useless information
  - eg. I want only user's name, but `GET /users/` including name, address, phone number, ...

- under-fetching
  - send several requests to DB for completing the one thing
  - eg. for user's staring page, `GET /feed/`, `GET /notifications/`, `GET users/1/`, ...

- Graphal
  - only one request(=query) at once
  - reponse is js object that including information only I wanted

- terminology
  - Query: only when get data from DB
  - Mutation: mutate(=changing) the data of DB or server

- Resolver
  - resolve to graphql query

- Structure in this course
  - graphql
    - schema.graphql
      - define type (data, query)
      - define how data looks like
    - db.js
      - define detailed of schema
    - resolver.js
      - define the function that resolving db(query)
      - mapping the qeury and actions (..?)
  - index.js
    - run graphql server
 