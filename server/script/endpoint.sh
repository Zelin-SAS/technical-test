#!/bin/bash

# Wait for the database to be ready
while ! nc -z db $DB_PORT; do
  sleep 0.1
done

# Run app
npm start &

# Wait 5 seconds
sleep 5 

# Run npm test
npm test &

# Wait for the tests to finish
wait