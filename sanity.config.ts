import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {structure} from './libs/structure'
import {BASE_URL} from './env'

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
  ],

  schema: {
    types: schemaTypes,
  },
})
