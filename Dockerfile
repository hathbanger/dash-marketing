FROM nginx:latest

# Create app directory
WORKDIR /etc/nginx/conf.d

RUN rm /etc/nginx/conf.d/default.conf
# Install app dependencies
COPY dash.conf .

WORKDIR /usr/share/nginx/dash

COPY . .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./
# RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . .
EXPOSE 80
# CMD [ "npm", "start" ]