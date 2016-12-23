import { A2PiscesPage } from './app.po';

describe('a2-pisces App', function() {
  let page: A2PiscesPage;

  beforeEach(() => {
    page = new A2PiscesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
