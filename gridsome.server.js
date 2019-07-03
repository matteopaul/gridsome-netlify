// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');
const fs = require('fs');

const pagesPath = path.join(__dirname, "pages");
console.dir(pagesPath);

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    const pages = store.addContentType({
      typeName: "PageStructure",
      route: "/page/:id"
    });
    pages.addNode({
      id: 0,
      title: "erste Seite"
    })
    fs.readdir(pagesPath, function(err, files) {
      if (err) {return console.log(err);}       //SHOWING ERROR

      files.forEach(function(file) {
        //console.log(file);
        fs.readFile(path.join(__dirname, "pages") + "/" + file, function(err, data) {   //ITERATING THROUGH EVERY FILE
          //console.log(JSON.parse(data));
          let currentData = JSON.parse(data);
          pages.addNode({
            id: currentData.id,
            title: currentData.title
          })
        })
      })
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
