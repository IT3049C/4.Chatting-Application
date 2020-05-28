/**
 * @jest-environment jsdom
*/
/* eslint-env browser */

const fs = require(`fs`);
const path = require(`path`);
const {JSDOM} = require(`jsdom`);

const html = fs.readFileSync(path.resolve(__dirname, `../index.html`), `utf8`);

jest.dontMock(`fs`);

describe(`html content`, function () {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(
      html.toString(),
      { 
        resources: `usable`,
        runScripts: `dangerously`,
      }
    );
    global.window = dom.window;
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  // test(`welcome-screen has a 1px solid black border`, function() {
  //   document.addEventListener(`DOMContentLoaded`, () => {
  //     setImmediate(() => {
  //       const welcomeScreen = dom.window.document.getElementById(`welcome-screen`);
  //       console.log(welcomeScreen.getAttribute(`style`));
  //       expect(welcomeScreen).toHaveStyle(`border: 1px solid red;`);
  //     });
  //   });
  // });

  // test(`game-screen has a 1px solid red border`, function() {
  //   const gameScreen = dom.window.document.querySelector(`.container > #game-screen`);

  //   expect(gameScreen).toHaveStyle(`border: 1px solid red`);
  // });

  // test(`#game-screen is hidden`, function(){
  //   document.addEventListener(`DOMContentLoaded`, () => {
  //     setTimeout(() => {
  //       const gameScreen = document.getElementById(`game-screen`);
  //       console.log(gameScreen.classList.entries);
  //       expect(gameScreen).toHaveClass(`d-none`);
  //     }, 500);
  //   });
  // });

});