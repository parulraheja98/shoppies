// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // TODO: Remove this api key.
  omdbApiKey: "e253e68e",
  // TODO: Remove firebase config.
  firebaseConfig: {
    apiKey: "AIzaSyAf5Jk1CEt3OijOc3eO5OChm4bYuxAVPvI",
    authDomain: "ground-platform-209dc.firebaseapp.com",
    databaseURL: "ground-platform-209dc.firebaseapp.com",
    projectId: "ground-platform-209dc",
    storageBucket: "ground-platform-209dc.appspot.com",
    messagingSenderId: "478560441988"
  }, 
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
