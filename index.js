const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('https://pokemondb.net/pokedex/all', function (err, res, body) {
    if (err) console.log(`Error {err}`);
    var $ = cheerio.load(body);
    $('#pokedex tr').each(function () {
        var name = $(this).find('.ent-name').text().trim();
        var total = $(this).find('.num-total').text().trim();

        fs.appendFile('pokemon-db.txt', `name: ${name} total: ${total}\n`)
    });
})
