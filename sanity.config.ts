import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {structure} from './libs/structure'
import {BASE_URL} from './env'
import {
  DeleteTranslationAction,
  documentInternationalization,
} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'ograviti',

  projectId: 'i8alq04o',
  dataset: 'staging',

  plugins: [
    structureTool({structure}),
    visionTool(),
    presentationTool({
      title: 'Editor',
      previewUrl: {
        draftMode: {
          enable: `${BASE_URL}/api/draft`,
        },
      },
    }),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'de', title: 'German'},
      ],
      schemaTypes: [
        'blog',
        'career',
        'caseStudy',
        'teamMember',
        'testimonialCard',
        'globalSeo',
        'homePage',
        'aboutUsPage',
        'testimonialPage',
        'blogPage',
        'caseStudyPage',
        'careersPage',
        'contactUsPage',
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, {schemaType}) => {
      // Add to the same schema types you use for internationalization
      if (['page'].includes(schemaType)) {
        // You might also like to filter out the built-in "delete" action
        return [...prev, DeleteTranslationAction]
      }

      return prev
    },
  },
})
