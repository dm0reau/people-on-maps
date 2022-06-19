# People on Maps

A simple [Ruby on Rails](https://rubyonrails.org) app that displays people on [Google Maps](https://developers.google.com/maps/documentation/javascript/overview).

## Up and running

- Install [Docker](https://docs.docker.com/engine/install/) 
- Install [docker-compose](https://docs.docker.com/get-started/08_using_compose/)
- Copy `.env.example` file to `.env` and edit environment variables
- For `GOOGLE_MAPS_API_KEY` env variable, you must use your [own Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
- Run `docker-compose up`
- The web app is accessible on http://localhost:3000
- An Adminer is accessible on http://localhost:8080

## For ease of development

- Use [RubyMine](https://www.jetbrains.com/ruby/download/)
- Configure [Docker Compose as a remote interpreter](https://www.jetbrains.com/help/ruby/using-docker-compose-as-a-remote-interpreter.html#configure_remote_interpreter)