import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
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
      name: 'ourStory',
      title: 'Our Story',
      type: 'object',
      group: 'ourStory',
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
      ],
    }),
    defineField({
      name: 'ourMission',
      title: 'Our Mission',
      type: 'object',
      group: 'ourMission',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sections',
          title: 'Sections',
          type: 'array',
          of: [
            defineField({
              name: 'section',
              title: 'Section',
              type: 'object',
              group: 'section',
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
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ourTeam',
      title: 'Our Team',
      type: 'object',
      group: 'ourTeam',
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
          name: 'teamMembers',
          title: 'Team Members',
          type: 'array',
          of: [{type: 'reference', to: {type: 'teamMember'}}],
        }),
      ],
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      group: 'contactUs',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
