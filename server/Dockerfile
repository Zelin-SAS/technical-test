FROM node:20.13.1

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Create user with UID 1000:1000 to avoid permission issues
#RUN useradd -u 1000 -U -d /usr/src/app zelin
RUN useradd -U -d /usr/src/app zelin


# Change ownership of app folder to new user
RUN chown -R zelin:zelin .

# Change to new user
USER zelin

# Install app dependencies
RUN npm install

# expose the port BACKEND_PORT from env variable
EXPOSE $BACKEND_PORT

# Run the app
CMD [ "npm", "start" ]