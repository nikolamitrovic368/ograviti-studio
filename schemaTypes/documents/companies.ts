import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companies',
  title: 'Companies',
  type: 'document',
  fields: [
    {
      name: 'companyImages',
      type: 'array',
      title: 'Company Images',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
