/**
 * @jest-environment jsdom
*/
/* eslint-env browser */

const fs = require(`fs`);
const path = require(`path`);

const html = fs.readFileSync(path.resolve(__dirname, `../index.html`), `utf8`);

jest.dontMock(`fs`);

describe(`html content`, function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  test(`body includes a jumbotron div with an h1`, function() {
    const jumbotron = document.querySelector(`body > header > .jumbotron`);
    const jumbotronH1 = jumbotron.querySelector(`h1`);

    expect(jumbotron).toBeTruthy();
    expect(jumbotronH1).toBeTruthy();
    expect(jumbotronH1).toHaveClass(`display-4`);
  });

  test(`jumbotron div includes input field for the name`, function() {
    const jumbotron = document.querySelector(`body > header > .jumbotron`);
    const outerDiv = jumbotron.querySelector(`div`);
    const input = jumbotron.querySelector(`input`);
    const innerDiv = outerDiv.querySelector(`div`);
    const innerDivSpan = innerDiv.querySelector(`span`);
    const innerDivSpanI = innerDivSpan.querySelector(`i`);

    expect(outerDiv).toHaveClass(`input-group mb-3`);
    expect(input).toHaveClass(`form-control`);
    expect(input).toHaveAttribute(`id`, `my-name-input`);
    expect(innerDiv).toHaveClass(`input-group-prepend`);
    expect(innerDivSpan).toHaveClass(`input-group-text`);
    expect(innerDivSpanI).toHaveClass(`fas fa-user`);
  });

});
