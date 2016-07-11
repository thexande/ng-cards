import { Ng2CardsPage } from './app.po';

describe('ng2-cards App', function() {
  let page: Ng2CardsPage;

  beforeEach(() => {
    page = new Ng2CardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
