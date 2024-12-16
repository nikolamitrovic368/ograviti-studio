import blockContent from './documents/blockContent'
import testimonialCard from './documents/testimonialCard'
import caseStudyCard from './documents/caseStudy'
import teamMember from './documents/teamMember'
import blog from './documents/blog'
import blogPage from './singletons/blog'
import career from './documents/career'
import careersPage from './singletons/career'
import companies from './modules/companies'
import testimonial from './singletons/testimonial'
import multiPartImage from './documents/multiPartImage'
import caseStudy from './singletons/case-study'
import seo from './objects/seo'
import globalSeo from './documents/globalSeo'
import footer from './singletons/footer'
import caseStudyList from './modules/case-study-list'
import journeyCarousel from './modules/journey-carousel'
import testimonialList from './modules/testimonial-list'
import modules from './modules/modules'
import branding from './modules/branding'
import page from './documents/page'
import gallery from './modules/gallery'
import textWithLogo from './modules/text-with-logo'
import simpleText from './modules/simple-text'
import video from './modules/video'
import contactForm from './modules/contact-form'
import headingTitle from './modules/heading-title'
import contactUsCta from './modules/contact-us-cta'
import team from './modules/team'
import imageWithList from './modules/image-with-list'
import services from './singletons/services'

export const schemaTypes = [
  // document
  testimonialCard,
  caseStudyCard,
  teamMember,
  blog,
  career,
  testimonial,
  companies,
  blogPage,
  caseStudy,
  careersPage,
  globalSeo,
  footer,
  page,services,

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
  gallery,
  textWithLogo,
  simpleText,
  video,
  contactForm,
  headingTitle,
  contactUsCta,
  team,
  imageWithList,

  // modules
  modules,
]
