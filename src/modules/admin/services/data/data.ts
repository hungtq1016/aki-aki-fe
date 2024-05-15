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
  LockClosedIcon,
  LinkIcon,
  ClockIcon,
  UserIcon
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
        icon: ClockIcon,
        label: 'route.admin_schedules',
        slug: '/admin/schedules',
        children: [
          {
            label: 'route.admin_schedules',
            slug: '/admin/schedules'
          },
          {
            label: 'route.admin_schedules_add',
            slug: '/admin/schedules/add'
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
            label: 'route.admin_comments',
            slug: '/admin/comments'
          },
          {
            label: 'route.admin_categories',
            slug: '/admin/categories'
          },
          {
            label: 'route.admin_categories_add',
            slug: '/admin/categories/add'
          },
          {
            label: 'route.admin_tags',
            slug: '/admin/tags'
          },
          {
            label: 'route.admin_tags_add',
            slug: '/admin/tags/add'
          }
        ]
      },
      {
        icon: BriefcaseIcon,
        label: 'route.admin_medicines',
        slug: '/admin/medicine',
        children: [
          {
            label: 'route.admin_medicines_records',
            slug: '/admin/medicines/records'
          },
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
      },
      {
        icon: LinkIcon,
        label: 'route.admin_urls',
        slug: '/admin/urls',
        children: [
          {
            label: 'route.admin_urls',
            slug: '/admin/urls'
          },
          {
            label: 'route.admin_urls_add',
            slug: '/admin/urls/add'
          },
          {
            label: 'route.admin_urls_groups',
            slug: '/admin/urls/groups'
          },
          {
            label: 'route.admin_urls_groups_add',
            slug: '/admin/urls/groups/add'
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
        icon: UserIcon,
        label: 'route.admin_users',
        slug: '/admin/users',
        children: [
          {
            label: 'route.admin_users_customer',
            slug: '/admin/users/customer'
          },
          {
            label: 'route.admin_users_doctor',
            slug: '/admin/users/doctor'
          },
          {
            label: 'route.admin_users_all',
            slug: '/admin/users/all'
          },
          {
            label: 'route.admin_users_add',
            slug: '/admin/users/add'
          },
          {
            label: 'route.admin_users_groups',
            slug: '/admin/users/groups'
          },
          {
            label: 'route.admin_users_groups_add',
            slug: '/admin/users/groups/add'
          }
        ]
      },
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
            label: 'route.admin_oauth2_assignments',
            slug: '/admin/oauth2/assignments'
          },
          {
            label: 'route.admin_oauth2_assignments_add',
            slug: '/admin/oauth2/assignments/add'
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
