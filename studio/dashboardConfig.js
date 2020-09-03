export default {
  widgets: [
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
                  buildHookId: '5f504544776a6441681d2797',
                  title: 'Sanity Studio',
                  name: 'javon-was-here-studio',
                  apiId: '3e530edb-7bda-4a74-b387-3f6257b18c14'
                },
                {
                  buildHookId: '5f5045443077553e30f17e36',
                  title: 'Blog Website',
                  name: 'javon-was-here',
                  apiId: 'f4194716-b7a8-4922-96ea-bbe1629edefa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/javonwashere/javon-was-here',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://javon-was-here.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
