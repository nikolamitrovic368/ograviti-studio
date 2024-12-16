import type {StructureResolver} from 'sanity/structure'

import {
  VscCodeOss,
  VscMultipleWindows,
  VscServerProcess,
  VscTools,
} from 'react-icons/vsc'
import {group, singleton} from './utils/utils'
import {BsDatabaseAdd} from 'react-icons/bs'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'

const structure: StructureResolver = (S) =>
  S.list()
    .title('Contents')
    .items([
      group(S, 'Settings', [
        singleton(S, 'globalSeo', 'Global SEO').icon(VscServerProcess),
        singleton(S, 'footer', 'Footer').icon(VscServerProcess),
      ]).icon(VscTools),
      S.divider(),
      group(S, 'Web Pages', [
        S.documentTypeListItem('page').title('Pages').icon(VscMultipleWindows),
        singleton(S, 'blogPage', 'Blog').icon(VscServerProcess),
        singleton(S, 'caseStudyPage', 'Case Study').icon(VscServerProcess),
        singleton(S, 'careersPage', 'Career').icon(VscServerProcess),
        singleton(S, 'servicesPage', 'Our Services').icon(VscServerProcess),
        singleton(S, 'testimonialPage', 'Testimonial').icon(VscServerProcess),
      ]).icon(VscCodeOss),
      S.divider(),
      singleton(S, 'companies', 'Companies').icon(HiOutlineBuildingOffice2),
      group(S, 'Miscellaneous', [
        S.documentTypeListItem('testimonialCard').title('Testimonial Card'),
        S.documentTypeListItem('caseStudy').title('Case Study'),
        S.documentTypeListItem('teamMember').title('Team Members'),
        S.documentTypeListItem('blog').title('Blog'),
        S.documentTypeListItem('career').title('Career'),
      ]).icon(BsDatabaseAdd),
    ])

export default structure
