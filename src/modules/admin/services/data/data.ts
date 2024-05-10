import { ref } from 'vue'
import type { TMenu } from '../../models/type'
import {
  NewspaperIcon,
  HomeIcon,
  ArrowUturnLeftIcon,
  ChatBubbleOvalLeftIcon,
  BriefcaseIcon,
  BookmarkIcon,
  BuildingStorefrontIcon,
  LockClosedIcon
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
        label: 'route.admin_medicines',
        slug: '/admin/medicine',
        children: [
          {
            label: 'route.admin_medicines',
            slug: '/admin/medicines'
          },
          {
            label: 'route.admin_medicines_add',
            slug: '/admin/medicines/add'
          },
          {
            label: 'route.admin_medicines_prescription',
            slug: '/admin/medicines/prescription'
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
          },
          {
            label: 'route.admin_services_groups',
            slug: '/admin/services/groups'
          },
          {
            label: 'route.admin_services_groups_add',
            slug: '/admin/services/groups/add'
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
          },
          {
            label: 'route.admin_branches_types',
            slug: '/admin/branches/types'
          },
          {
            label: 'route.admin_branches_types_add',
            slug: '/admin/branches/types/add'
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
    name: 'content.oauth2',
    menuItems: [
      {
        icon: LockClosedIcon,
        label: 'route.oauth2',
        slug: '/admin/oauth2/roles',
        children: [
          {
            label: 'route.admin_oauth2_roles',
            slug: '/admin/oauth2/roles'
          },
          {
            label: 'route.admin_oauth2_roles_add',
            slug: '/admin/oauth2/roles/add'
          },
          {
            label: 'route.admin_oauth2_permissions',
            slug: '/admin/oauth2/permissions'
          },
          {
            label: 'route.admin_oauth2_permissions_add',
            slug: '/admin/oauth2/permissions/add'
          },
          {
            label: 'route.admin_oauth2_users',
            slug: '/admin/oauth2/users'
          },
          {
            label: 'route.admin_oauth2_users_add',
            slug: '/admin/oauth2/users/add'
          }
        ]
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
