export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616490ef8ed68d0d3768a57a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uw922jga',
                  apiId: '23ad558a-6483-45c6-856c-4a90f01fcd45'
                },
                {
                  buildHookId: '616490eff7aa9a1019e57774',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xcdtqeu9',
                  apiId: '6241a9a4-de86-4cb4-a6b9-abb44b939c7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raffi1300/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xcdtqeu9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
