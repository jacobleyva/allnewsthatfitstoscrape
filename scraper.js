const request = require('request');
const cheerio = require('cheerio');

request('https://www.forbes.com/#614ed492254c', (error, respones, html)=> {
    if (!error && response.statusCode == 200) {
        
        $('.editors-picks').each((i, el => {
            const title = $(el)
            .find('editors-pick')
            .text();
            //get link
            
        }));
    }
})