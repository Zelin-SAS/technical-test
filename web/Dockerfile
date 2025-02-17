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

# Expose the port the app runs in
EXPOSE 3001

# Run the app
CMD [ "npm", "start" ]






