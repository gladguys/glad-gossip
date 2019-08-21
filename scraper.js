const request = require('request');
const cheerio = require('cheerio');

var searchUrl = 'https://news.google.com/?hl=pt-BR&gl=BR&ceid=BR:pt-419';
var savedData = [];

request(searchUrl, function(err, response, html) {
  
  if (err) {
    return res.status(500).send(err);
  }
  var $ = cheerio.load(html);
  
  $('article.MQsxIb.xTewfe.R7GTQ.keNKEd.j7vNaf.Cc0Z5d.EjqUne').each(function(i, element) {
    var title = $(this).find('.DY5T1d').text();
	var font = $(this).find('.wEwyrc.AVN2gc.uQIVzc.Sksgp').text();
    savedData.push({
      title: title,
	  font: font
    });
  });
  console.log(JSON.stringify(savedData));
});