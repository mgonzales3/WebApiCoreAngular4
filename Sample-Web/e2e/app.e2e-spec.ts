import { SampleWebPage } from './app.po';

describe('sample-web App', () => {
  let page: SampleWebPage;

  beforeEach(() => {
    page = new SampleWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
