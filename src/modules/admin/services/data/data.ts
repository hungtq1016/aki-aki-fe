import { ref } from 'vue'
import type { TMenu } from '../../models/type'
import {
  NewspaperIcon,
  HomeIcon,
  ArrowUturnLeftIcon,
  ChatBubbleOvalLeftIcon,
  BriefcaseIcon,
  BookmarkIcon,
  BuildingStorefrontIcon
} from '@heroicons/vue/24/outline'

export const target = ref(null)

export const menus: TMenu[] = [
  {
    name: 'content.menu',
    menuItems: [
      {
        icon: HomeIcon,
        label: 'route.admin',
        slug: '/admin',
        children: [
          {
            label: 'route.chart',
            slug: '/admin'
          }
        ]
      },
      {
        icon: NewspaperIcon,
        label: 'route.admin_blogs',
        slug: '/admin/blogs',
        children: [
          {
            label: 'route.admin_blogs',
            slug: '/admin/blogs'
          },
          {
            label: 'route.admin_blogs_add',
            slug: '/admin/blogs/add'
          },
          {
            label: 'route.admin_blogs_categories',
            slug: '/admin/blogs/categories'
          },
          {
            label: 'route.admin_blogs_categories_add',
            slug: '/admin/blogs/categories/add'
          },
          {
            label: 'route.admin_blogs_tags',
            slug: '/admin/blogs/tags'
          },
          {
            label: 'route.admin_blogs_tags_add',
            slug: '/admin/blogs/tags/add'
          }
        ]
      },
      {
        icon: BriefcaseIcon,
        label: 'route.admin_medicine',
        slug: '/admin/medicine',
        children: [
          {
            label: 'route.admin_medicine',
            slug: '/admin/medicine'
          },
          {
            label: 'route.admin_medicine_prescription',
            slug: '/admin/medicine/prescription'
          }
        ]
      },
      {
        icon: BookmarkIcon,
        label: 'route.admin_services',
        slug: '/admin/services',
        children: [
          {
            label: 'route.admin_services',
            slug: '/admin/services'
          },
          {
            label: 'route.admin_services_add',
            slug: '/admin/services/add'
          }
        ]
      },
      {
        icon: BuildingStorefrontIcon,
        label: 'route.admin_branches',
        slug: '/admin/branches',
        children: [
          {
            label: 'route.admin_branches',
            slug: '/admin/branches'
          },
          {
            label: 'route.admin_branches_add',
            slug: '/admin/branches/add'
          }
        ]
      }
    ]
  },
  {
    name: 'content.support',
    menuItems: [
      {
        icon: ChatBubbleOvalLeftIcon,
        label: 'route.message',
        slug: '/admin/message'
      }
    ]
  },
  {
    name: 'content.menu_other',
    menuItems: [
      {
        icon: ArrowUturnLeftIcon,
        label: 'route.home',
        slug: '/'
      }
    ]
  }
]
