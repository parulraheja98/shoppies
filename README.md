# Shoppies

## Demo

[Demo](http://shoppies-deply.s3-website-us-west-2.amazonaws.com/)

## Running Project locally.

1. git clone [project url](https://github.com/parulraheja98/shoppies.git)
2. Run npm install -g @angular/cli to install angular cli.
3. Get omdb api key from [url](http://www.omdbapi.com/apikey.aspx).
4. Go to src/environments/environment.ts and your add your api key, (omdbApiKey: YOUR_API_KEY)
5. Get api key for firebase DB.
   - Visit the [Firebase Console](https://firebase.google.com/) and sign in with your Google account.
   - Click on add project option and name the project whatever you like.
   - Click on add app on the firebase console
   - Select the web platform
   - Register your new app with any name and copy the firebase config generated.
   - Add the firebase config to src/environments/environment.ts. (firebaseConfig: YOUR_API_KEY)
6. run npm install in the project root to install all the dependencies.
7. run ng serve, application will be live on http://localhost:4200.

## Technologies

Angular.js, Typescript, Firestore DB

## Requirements

- [x] Each search result should list at least its title, year of release and a button to nominate that film.
- [x] Updates to the search terms should update the result list.
- [x] Movies in search results can be added and removed from the nomination list.
- [x] If a search result has already been nominated, disable its nominate button.
- [x] Display a banner when the user has 5 nominations.

## Extras

- [x] Save nomination lists if the user leaves the page.
- [x] Animations for loading, adding/deleting movies, notifications.
- [x] Create shareable links.
