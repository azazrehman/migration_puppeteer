const {AccessPageBO} = require('../../../selectors/BO/access_page');
const {Menu} = require('../../../selectors/BO/menu.js');

scenario('Check default product sort in the Back Office', client => {
  test('should open browser', async () => {
    await client.open();
    await client.startTracing('CheckDefaultProductSort');
    });
  test('should log in successfully in BO', () => client.signInBO(AccessPageBO));
  test('should go to "Catalog" page', () => client.goToLink(Menu.Sell.Catalog.products_submenu));
  test('should check the default product sort', () => client.getElementID())
}, 'product/product', true);
