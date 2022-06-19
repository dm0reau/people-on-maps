FROM ruby:3.1.0
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
RUN rm -rf /var/lib/{apt,dpkg,cache,log}/
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN bundle install -j $(nproc)
CMD ["bash", "./docker/run-app.sh"]
EXPOSE 3000