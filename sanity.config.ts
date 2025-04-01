import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemas'
import structure from './structure'
import {BASE_URL, dataset, projectId} from './env'
import {
  DeleteTranslationAction,
  documentInternationalization,
} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'ograviti',
  projectId,
  dataset,
  plugins: [
    structureTool({structure}),
    visionTool(),
    presentationTool({
      title: 'Editor',
      previewUrl: {
        origin: BASE_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'de', title: 'German'},
      ],
      schemaTypes: [
        'page',
        'blog',
        'career',
        'caseStudy',
        'testimonialCard',
        'globalSeo',
        'testimonialPage',
        'blogPage',
        'caseStudyPage',
        'careersPage',
        'servicesPage',
      ],
    }),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'de', title: 'German'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text'],
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
