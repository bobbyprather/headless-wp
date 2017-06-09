import { HeadlessWpPage } from './app.po';

describe('headless-wp App', function() {
  let page: HeadlessWpPage;

  beforeEach(() => {
    page = new HeadlessWpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
