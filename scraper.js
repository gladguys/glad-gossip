const request = require('request');
const cheerio = require('cheerio');

var searchTerm = 'gladiadores';
var searchUrl = 'https://news.google.com/?hl=pt-BR&gl=BR&ceid=BR:pt-419';
var savedData = [];

request(searchUrl, function(err, response, html) {
  // First we'll check to make sure no errors occurred when making the request
  if (err) {
    return res.status(500).send(err);
  }
  var $ = cheerio.load(html);
  // For each outer div with class g, parse the desired data
  $('div.xrnccd.F6Welf.R7GTQ.keNKEd.j7vNaf').each(function(i, element) {
    var title = $(this).find('.DY5T1d').text();
    savedData.push({
      title: title
    });
  });
  console.log(JSON.stringify(savedData));
});