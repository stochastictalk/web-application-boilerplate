# To create initial /src, /public, packages.json, package-lock.json, 
# run npx create-react-app.
FROM node:18

WORKDIR /
RUN npx create-react-app frontend -y
WORKDIR /frontend

COPY ./public ./public
COPY ./src ./src
COPY *.json ./
RUN npm install

# Development server listens on port 3000.
EXPOSE 3000

CMD ["npm", "start"]