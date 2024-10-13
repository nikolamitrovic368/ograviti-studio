import {SearchIcon} from '@sanity/icons'
import {VscMultipleWindows} from 'react-icons/vsc'
import {defineField, defineType} from 'sanity'
import {isUniqueOtherThanLanguage} from '../../utils/utils'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: VscMultipleWindows,
  groups: [{name: 'seo', title: 'SEO', icon: SearchIcon}],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Will not display on the page, but is used to describe it in the CMS',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage,
      },
    }),
    defineField({
      name: 'modules',
      type: 'modules',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
      language: 'language',
    },
    prepare({title, subtitle, media, language}) {
      return {
        title,
        subtitle: `${subtitle} | ${language.toUpperCase()}`,
        media,
      }
    },
  },
})
