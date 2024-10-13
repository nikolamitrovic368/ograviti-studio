import blockContent from './documents/blockContent'
import testimonialCard from './documents/testimonialCard'
import caseStudyCard from './documents/caseStudy'
import teamMember from './documents/teamMember'
import blog from './documents/blog'
import blogPage from './singletons/blog'
import career from './documents/career'
import careersPage from './singletons/career'
import companies from './documents/companies'
import aboutUs from './singletons/about-us'
import testimonial from './singletons/testimonial'
import multiPartImage from './documents/multiPartImage'
import caseStudy from './singletons/case-study'
import contactUs from './singletons/contact-us'
import seo from './objects/seo'
import globalSeo from './documents/globalSeo'
import footer from './singletons/footer'
import caseStudyList from './modules/case-study-list'
import journeyCarousel from './modules/journey-carousel'
import testimonialList from './modules/testimonial-list'
import modules from './modules/modules'
import branding from './modules/branding'
import page from './documents/page'

export const schemaTypes = [
  // document
  testimonialCard,
  caseStudyCard,
  teamMember,
  blog,
  career,
  aboutUs,
  testimonial,
  companies,
  blogPage,
  caseStudy,
  careersPage,
  contactUs,
  globalSeo,
  footer,
  page,

  // array
  blockContent,

  // object
  multiPartImage,
  seo,

  // modules
  branding,
  caseStudyList,
  journeyCarousel,
  testimonialList,

  // modules
  modules,
]
