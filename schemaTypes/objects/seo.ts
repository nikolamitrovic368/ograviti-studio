// schemas/seo.ts
import {defineField, defineType} from 'sanity'
import {getExtension, getImageDimensions} from '@sanity/asset-utils'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fieldsets: [
    {
      name: 'robots',
      title: 'Robots Meta',
      description:
        'Sets the robots meta tag for this page. This tag controls how search engines crawl and index your site.',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'openGraph',
      title: 'Open Graph Protocol Fields',
      description:
        'The Open Graph protocol enables any web page to become a rich object in a social graph.',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The page title tag. Maximum 70 characters. Must be unique. If left empty, will default to global title.',
      validation: (Rule) => [
        Rule.max(70).warning(`Title shouldn't be more than 70 characters.`),
        Rule.min(5).warning('Title should be at least 5 characters'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description:
        'The meta description for this page. Maximum 160 characters. If left empty, will default to global description.',
      type: `text`,
      validation: (Rule) => [
        Rule.max(160).warning('Description should be less than 160 characters.'),
        Rule.min(5).warning('Description should be at least 5 characters'),
      ],
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'robotsNoIndex',
      description: `Hide this page from search engines and the sitemap.`,
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
      fieldset: 'robots',
    }),
    defineField({
      name: 'robotsNoFollow',
      description: `Hide this page from search engines and the sitemap.`,
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
      fieldset: 'robots',
    }),
    defineField({
      name: 'image',
      type: `image`,
      title: 'Meta Image',
      description:
        'This is the meta image presented in search, Open Graph, Twitter and other social for this page when shared. If left empty, will default to global image.',
      fieldset: 'openGraph',
      validation: (rule) =>
        rule.custom((value) => {
          if (!value?.asset?._ref) {
            return true
          }

          const filetype = getExtension(value.asset._ref)

          if (filetype !== 'jpg' && filetype !== 'png') {
            return 'Image must be a JPG or PNG'
          }

          const {width, height} = getImageDimensions(value.asset._ref)

          if (width < 1200 || height < 630) {
            return 'Image must be at least 1200x630 pixels'
          }

          return true
        }),
    }),
  ],
})
