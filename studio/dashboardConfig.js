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
                  buildHookId: '6020f32e8bacca325032fd4d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-tester-studio',
                  apiId: '9dedbff4-4935-4fd3-ad95-27e152da5133'
                },
                {
                  buildHookId: '6020f32e5f91d4c0cf7bc9f6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-tester',
                  apiId: '64d346c4-278e-4084-8722-f0157e5157e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frdwhite24/sanity-nextjs-tester',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-tester.netlify.app', category: 'apps'}
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
