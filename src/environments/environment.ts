// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokeApi: {
    url: 'https://pokemon-go1.p.rapidapi.com',
    xRapidApiKey: '54d0d53500msh6995d602fcf797cp19a5c9jsn123c18beae5c',
    xRapidApiHost: 'pokemon-go1.p.rapidapi.com'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.