# Project microservice with GraphQL and Nginx
2 API:
- .NET Core 3.1
- NodeJS 12

## Start with Docker Compose
- Build All
```
docker-compose up -d
```

- Build one service
```
docker-compose up -d --no-deps --build [service name]
```

## TODO
- Add postgREST
- Separate domain into services
- Add MQ 