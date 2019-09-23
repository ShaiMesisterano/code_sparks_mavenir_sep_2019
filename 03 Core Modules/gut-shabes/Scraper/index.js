const { JSDOM } = require('jsdom');
const rp = require('request-promise');

class Scraper {
    constructor(url) {
        this.className = "Scraper"; // for logging
        this.url = url;
    }

    scrape({ selector, wrapper: {before, after} }) {
        const handler = async(resolve, reject) => {
            try{
                const body = await rp(this.url);
                const dom = new JSDOM(body);

                resolve(`
                    ${before}
                    ${dom.window.document.querySelector(selector).outerHTML}
                    ${after}
                `);
            }
            catch(ex) {
                reject(`${this.className} ${JSON.stringify(ex)}`);
            }
        }
        return new Promise(handler);
    }
}

module.exports = Scraper;