/*import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});*/
import { Selector } from 'testcafe';

fixture('Google Homepage')
    .page('http://www.google.com');

test('Take screenshot and close window', async t => {
    // Take screenshot of the entire page
    await t.takeScreenshot({ fullPage: true });
});