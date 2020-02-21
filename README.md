# Name

Whattomake

# Description

Welcome to Whattomake! An app you can use to find recipes with random ingredients you have lying around or that you may 
not know what to do with! When you sign up, you can enter ingredients into the search bar and using the Spoonacular API, 
it will return recipes that contain those ingredients! Wow! The user will then go cook it and come back to rate and review 
the experience. When they submit, it will redirect them to the homepage! This is my MVP, I will continue working on this and 
add dream features as I learn more. Thank you for checking it out!

# Technologies

Ruby: 2.6.3, Rails: 5.2.3, React, Spoonacular API

# Setup

To run this app locally, do the following in order:

1. yarn install
2. bundle exec bundle install
3. bundle exec rake db:create
4. bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate
5. bundle exec rake db:seed
6. yarn run start (to run the React front end)
7. in a new tab run: bundle exec rails s (for the Rails back end)
8. navigate your browser to localhost:3000
