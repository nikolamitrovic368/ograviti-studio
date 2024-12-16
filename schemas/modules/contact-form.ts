import {defineField, defineType, KeyedObject} from 'sanity'
import {VscInspect} from 'react-icons/vsc'

export default defineType({
  name: 'contact-form',
  title: 'Contact form',
  icon: VscInspect,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offices',
      title: 'Offices',
      type: 'array',
      of: [
        defineField({
          name: 'office',
          title: 'Office',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'internationalizedArrayString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'internationalizedArrayString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'phone',
              title: 'Phone',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'address',
            },
            prepare({title, subtitle}) {
              const titleText = title?.length
                ? title?.find((v: KeyedObject) => v?._key === 'en')?.value
                : ``
              const subtitleText = subtitle?.length
                ? subtitle?.find((v: KeyedObject) => v?._key === 'en')?.value
                : ``

              return {
                title: titleText ?? '',
                subtitle: subtitleText ?? '',
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      const titleText = title?.length
        ? title?.find((v: KeyedObject) => v?._key === 'en')?.value
        : ``

      return {
        title: titleText ?? '',
        subtitle: 'Contact form',
      }
    },
  },
})
