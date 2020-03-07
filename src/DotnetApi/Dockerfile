FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
# EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY . .

RUN dotnet restore "DotnetApi.csproj"
RUN dotnet build "DotnetApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "DotnetApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "DotnetApi.dll"]