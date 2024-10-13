import {defineField, defineType, KeyedObject} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),

      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'role',
    },
    prepare({title, subtitle, media}) {
      const titleText = title?.length
        ? title?.find((v: KeyedObject) => v?._key === 'en')?.value
        : ``
      const subtitleText = subtitle?.length
        ? subtitle?.find((v: KeyedObject) => v?._key === 'en')?.value
        : ``

      return {
        title: titleText ?? '',
        subtitle: subtitleText ?? ``,
        media,
      }
    },
  },
})
