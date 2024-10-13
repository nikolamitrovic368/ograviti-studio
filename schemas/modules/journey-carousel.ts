import {defineField, defineType} from 'sanity'
import {VscInspect} from 'react-icons/vsc'

export default defineType({
  name: 'journey-carousel',
  title: 'Journey Carousel',
  icon: VscInspect,
  type: 'document',
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
    ...[...new Array(4)].map((_, key) =>
      defineField({
        name: `step${key + 1}`,
        title: `Step${key + 1}`,
        type: 'object',
        fields: [
          defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          }),
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
            name: 'media',
            title: 'Image',
            type: 'object',
            fields: [
              defineField({
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              }),
              defineField({
                title: 'Position',
                name: 'position',
                type: 'string',
                initialValue: 'top',
                options: {
                  list: [
                    {title: 'Top', value: 'top'},
                    {title: 'Bottom', value: 'bottom'},
                    {title: 'Left', value: 'left'},
                  ],
                },
              }),
            ],
          }),
        ],
      }),
    ),
  ],
  preview: {
    prepare: () => ({
      title: 'Journey Carousel',
      subtitle: "Unveiling Ograviti's Journey",
    }),
  },
})
