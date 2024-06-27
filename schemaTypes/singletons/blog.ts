import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  groups: [
    {name: 'ourStory', title: 'Our Story'},
    {name: 'ourMission', title: 'Our Mission'},
    {name: 'ourTeam', title: 'Our Team'},
    {name: 'contactUs', title: 'Contact Us'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blogs',
      title: 'Blogs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blog'}}],
    }),
  ],
})
