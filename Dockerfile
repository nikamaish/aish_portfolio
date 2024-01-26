FROM node

# WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm install
RUN npm install sass --save-dev

COPY /build /build


RUN npm run build

# EXPOSE 3000

# Set environment variable for production
# ENV NODE_ENV=production


ENTRYPOINT ["npm", "start"]
