
## SET UP

- graphql with express
  - <https://graphql.org/graphql-js/running-an-express-graphql-server/>

```sh
# compose.ymlのデバッグしたいとき
docker compose run --rm  node bash
```


- query hello world
  - POST localhost:4000/graphql

```graphql
query {
	hello
}
```


### TOOL

- SWAPI
  - <https://graphql.org/swapi-graphql/>
