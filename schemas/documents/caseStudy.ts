import {SearchIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {isUniqueOtherThanLanguage} from '../../utils/utils'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [{name: 'seo', title: 'SEO', icon: SearchIcon}],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'This field is used only for Case Study Card',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'CompletedDate',
      title: 'Completed Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainService',
      title: 'Main Service',
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
    defineField({
      name: 'modules',
      type: 'modules',
    }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'caseStudy'}}],
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
      media: 'image',
      language: 'language',
      slug: 'slug',
    },
    prepare: ({title, language, media, slug}) => ({
      title,
      media,
      subtitle: `${slug.current} / ${language.toUpperCase()}`,
    }),
  },
})
