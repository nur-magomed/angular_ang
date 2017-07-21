import { AngliaPage } from './app.po';

describe('anglia App', () => {
  let page: AngliaPage;

  beforeEach(() => {
    page = new AngliaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
