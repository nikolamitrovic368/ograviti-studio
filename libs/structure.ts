import {StructureBuilder} from 'sanity/structure'

import {BlockElementIcon} from '@sanity/icons'
import {VscServerProcess} from 'react-icons/vsc'
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contents')
    .items([
      S.listItem()
        .title('Settings')
        .icon(VscServerProcess)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Global SEO')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('globalSeo')
                    .documentId('globalSeo')
                    .views([S.view.form()]),
                ),
              S.listItem()
                .title('Footer')
                .icon(BlockElementIcon)
                .child(
                  S.document().schemaType('footer').documentId('footer').views([S.view.form()]),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Web Pages')
        .icon(VscServerProcess)
        .child(
          S.list()
            .title('Web Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(BlockElementIcon)
                .child(
                  S.document().schemaType('homePage').documentId('homePage').views([S.view.form()]),
                ),
              S.listItem()
                .title('About Us')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('aboutUsPage')
                    .documentId('aboutUsPage')
                    .views([S.view.form()]),
                ),
              S.listItem()
                .title('Blog')
                .icon(BlockElementIcon)
                .child(
                  S.document().schemaType('blogPage').documentId('blogPage').views([S.view.form()]),
                ),
              S.listItem()
                .title('CaseStudy')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('caseStudyPage')
                    .documentId('caseStudyPage')
                    .views([S.view.form()]),
                ),
              S.listItem()
                .title('Career')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('careersPage')
                    .documentId('careersPage')
                    .views([S.view.form()]),
                ),
              S.listItem()
                .title('Contact Us')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('contactUsPage')
                    .documentId('contactUsPage')
                    .views([S.view.form()]),
                ),
              S.divider(),
              S.listItem()
                .title('Testimonial')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('testimonialPage')
                    .documentId('testimonialPage')
                    .views([S.view.form()]),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Companies')
        .icon(BlockElementIcon)
        .child(S.document().schemaType('companies').documentId('companies').views([S.view.form()])),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'homePage',
            'aboutUsPage',
            'testimonialPage',
            'companies',
            'blogPage',
            'caseStudyPage',
            'careersPage',
            'contactUsPage',
            'globalSeo',
            'footer',
          ].includes(listItem.getId() ?? ''),
      ),
    ])
