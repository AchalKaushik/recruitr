import { CodeCapitalPage } from './app.po';

describe('code-capital App', () => {
  let page: CodeCapitalPage;

  beforeEach(() => {
    page = new CodeCapitalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
