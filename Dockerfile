FROM node:16-alpine

# take environment variables
ARG NODE_ENV=prod
ARG PORT=8000
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

# create the working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN if [ "$NODE_ENV" = "dev" ]; then \
        npm install; \
    else \
        npm install --omit-dev; \
    fi

# copy all source code into the working directory
copy ./ ./

# expose port and start the app
expose $PORT
CMD npm run $NODE_ENV --loglevel=verbose