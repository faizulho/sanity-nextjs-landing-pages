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
                  buildHookId: '5f2f567e848de0f28f49377f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c6h5fzfp',
                  apiId: 'cc59b680-0d72-4dcb-8db0-10796c419582'
                },
                {
                  buildHookId: '5f2f567e652dff2a3ef046ec',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-469z8ux1',
                  apiId: 'daf6a437-6ddf-4908-9398-c22074ee8c7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/faizulho/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-469z8ux1.netlify.app', category: 'apps'}
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
