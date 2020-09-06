// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // TODO: Remove this api key.
  omdbApiKey: 'e253e68e',
  // TODO: Remove firebase config.
  firebaseConfig: {
    apiKey: 'AIzaSyCV8Zncmo7XVH9-WSGZRAURA9ZVjJgPGEk',
    authDomain: 'shoppies-325b1.firebaseapp.com',
    databaseURL: 'https://shoppies-325b1.firebaseio.com',
    projectId: 'shoppies-325b1',
    storageBucket: 'shoppies-325b1.appspot.com',
    messagingSenderId: '1009737506397',
    appId: '1:1009737506397:web:fd705560321ffcb597b7b4',
    measurementId: 'G-LZ9WLGL5PN',
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
