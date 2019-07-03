// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');
const fs = require('fs');
const textContentType = require('./dynamicContentTypes/textContentType');

const pagesPath = path.join(__dirname, "pages");

module.exports = function (api) {
  api.loadSource(store => {

    const contentTypes = {};

    fs.readdirSync(path.join(__dirname, "dynamicContentTypes")).forEach(function(file) {
      let currentName = file.split('.')[0];
      contentTypes[currentName] = store.addContentType({
        typeName: currentName
      })
      contentTypes[currentName].addNode(JSON.parse(fs.readFileSync(path.join(__dirname, "dynamicContentTypes") + "/" + file)));
    })


    const pages = store.addContentType({
      typeName: "PageStructure",
      route: "/page/:id"
    });

    pages.addNode({
      id: "0",
      title: "erste Seite",
      contents: [store.createReference('imageContentType', '0'), store.createReference('textContentType', '0')]
    })


    fs.readdirSync(pagesPath).forEach(function(file) {

          let currentData = JSON.parse(fs.readFileSync(path.join(__dirname, "pages") + "/" + file));
          let items = [];

          currentData.contents.forEach(function(item) {
            for(let i = 0; i < Object.keys(contentTypes).length; i++) {
              if(item.type === Object.keys(contentTypes)[i]) {
                contentTypes[Object.keys(contentTypes)[i]].addNode(item);
              }
            }
          });

          pages.addNode({
            id: currentData.id,
            title: currentData.title,
            contents: items
          })
    })
  })
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })


}
