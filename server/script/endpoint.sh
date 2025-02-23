#!/bin/bash

# Wait for the database to be ready
while ! nc -z db $DB_PORT; do
  sleep 0.1
done

# Run app
npm start &

# Wait 5 seconds
sleep 5

# Load the seeds into the database
curl -X PUT http://localhost:$BACKEND_PORT/books/loadSeeds &
curl -X PUT http://localhost:$BACKEND_PORT/users/loadSeeds &

# idle forever
wait