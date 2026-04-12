export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'gray',
    },
    pageHeader: {
      slots: {
        title: 'text-center w-full',
        description: 'text-center w-full',
      },
    },
    pageBody: {
      base: 'pb-12',
    },
  },
})
