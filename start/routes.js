'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});

Route.group(() => {
  Route.get("index", "News/TribunController.getIndex");
  Route.get("newstribun", "News/TribunController.getNewsDetail");
  Route.get("newscnn", "News/CNNIndonesiaController.getNewsDetail");
  Route.get("newsbbc", "News/BBCWorldController.getNewsDetail");
  Route.get("newscbn", "News/CBNWorldController.getNewsDetail");
  Route.get("newscnbc", "News/CNBCWorldController.getNewsDetail");
  Route.get("newswebmd", "News/WebMDController.getNewsDetail");
  Route.get("newsmoneytalks", "News/MoneyTalksController.getNewsDetail");
}).prefix("v1/scraper");
