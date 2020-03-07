# Project with microservices, MongoDB and Nginx
API:
- .NET Core 3.1
- NodeJS 12

## Start with Docker Compose
- Build All
```
docker-compose up -d
```

- Build only one service
```
docker-compose up -d --no-deps --build [service name]
```
