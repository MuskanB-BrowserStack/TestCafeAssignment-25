import { Selector } from 'testcafe';
fixture `BStack demo test`
    .page `https://bstackdemo.com`;
test('login test', async t => {
    await t.expect(Selector('title').innerText).contains('StackDemo');
    await t.click(Selector('#signin'));
    await t.typeText(Selector('#username input'), 'demouser')
           .pressKey('enter');
    await t.typeText(Selector('#password input'), 'testingisfun99')
           .pressKey('enter');
    await t.click(Selector('#login-btn'));
    await t.expect(Selector('title').innerText).contains('StackDemo');
    const productText = await Selector('[id="1"] p').innerText;
    await t.click(Selector('[id="1"] .shelf-item__buy-btn'));
    // await t.click(Selector('#__next > div > div > div.float-cart > span'));
    await t.click(Selector('#__next > div > div > div.float-cart.float-cart--open > div.float-cart__content > div.float-cart__footer > div.buy-btn'));
    await t.typeText(Selector('#firstNameInput'), 'Muskan')
           .typeText(Selector('#lastNameInput'), 'Bahrani')
           .typeText(Selector('#addressLine1Input'), '101-b')
           .typeText(Selector('#provinceInput'), 'Maharashtra')
           .typeText(Selector('#postCodeInput'), '401')
           .click(Selector('#checkout-shipping-continue'));
    const confirmationMessage = await Selector('#confirmation-message').innerText;
    await t.expect(confirmationMessage).eql('Your Order has been successfully placed.');
});