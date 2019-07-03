// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Testpage',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  }/*,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/*.json',
        typeName: 'Post',
        route: '/post/:id',
        slug: 'slug',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        refs: {
          imageContent: {
            typeName: "PageStructureImageContent",
            create: true,
            path: 'imageContents/*.json',
            slug: 'slug'
          }
        },
        path: 'pages/*.json',
        typeName: 'PageStructure',
        route: '/page/:id',
        create: true,
        slug: 'slug',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: 'src/admin/index.js'
      }
    },
  ]*/
}
