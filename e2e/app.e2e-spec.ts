import { Angular2QuotesPage } from './app.po';

describe('angular2-quotes App', () => {
  let page: Angular2QuotesPage;

  beforeEach(() => {
    page = new Angular2QuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
