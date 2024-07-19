
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

  - curl command

    ```sh
    curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"query": "{ hello }"}' \
    http://localhost:4000/graphql
    ```


### TOOL

- SWAPI
  - <https://graphql.org/swapi-graphql/>


## BASICS

- スカラー型
  - Int
  - Float
  - String
  - Boolean
  - ID
- オブジェクト型
- フラグメント
- ユニオン型
- インターフェース