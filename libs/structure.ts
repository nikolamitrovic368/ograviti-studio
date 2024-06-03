import {StructureBuilder} from 'sanity/structure'

import {BlockElementIcon, DocumentsIcon} from '@sanity/icons'
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contents')
    .items([
      S.listItem()
        .title('Web Pages')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Web Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(BlockElementIcon)
                .child(S.document().schemaType('home').documentId('home').views([S.view.form()])),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Companies')
        .icon(BlockElementIcon)
        .child(S.document().schemaType('companies').documentId('companies').views([S.view.form()])),
      ...S.documentTypeListItems().filter(
        (listItem) => !['home', 'companies'].includes(listItem.getId() ?? ''),
      ),
    ])