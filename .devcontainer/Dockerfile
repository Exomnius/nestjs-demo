ARG VARIANT=16
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
apt-get -y install --no-install-recommends postgresql-client

RUN npm install -g @nestjs/cli