import {defineType} from 'sanity'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default defineType({
  name: 'companies',
  title: 'Companies',
  type: 'document',
  icon: HiOutlineBuildingOffice2,
  fields: [
    {
      name: 'companyImages',
      type: 'array',
      title: 'Company Images',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {title: 'Companies'}
    },
  },
})
