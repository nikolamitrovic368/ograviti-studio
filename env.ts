import {isDev} from 'sanity'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!

export const BASE_URL = isDev ? 'http://localhost:3003' : process.env.SANITY_STUDIO_PREVIEW_URL
