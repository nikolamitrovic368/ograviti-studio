import {PlayIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const youtubeRegex =
  /^(?:https?:)?(?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]{7,15})(?:[\?&][a-zA-Z0-9\_-]+=[a-zA-Z0-9\_-]+)*(?:[&\/\#].*)?$/

export default defineType({
  name: 'video',
  title: 'Video',
  icon: PlayIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Youtube', value: 'youtube'},
          {title: 'Link', value: 'link'},
          {title: 'File', value: 'file'},
        ],
      },
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Video URL',
      description:
        'URL of a YouTube or mp4 video. For YouTube, this should be in the format https://www.youtube.com/watch?v=[Video ID].',
      hidden: ({parent}) => parent?.type === 'file' || !parent?.type,
      validation: (Rule) => [
        Rule.custom((value, {parent}: any) => {
          if (parent?.type === 'youtube' && !youtubeRegex.test(value!))
            return 'Please provide a valid Youtube URL.'
          if (parent?.type === 'link' && !value)
            return 'Please insert a valid URL.'
          return true
        }),
      ],
    }),
    defineField({
      title: 'Video File',
      name: 'file',
      type: 'file',
      hidden: ({parent}) => parent?.type !== 'file',
    }),
  ],
  preview: {
    select: {
      subtitle: 'type',
    },
    prepare: ({subtitle}) => ({
      title: ' Video',
      subtitle: subtitle.toUpperCase(),
    }),
  },
})
