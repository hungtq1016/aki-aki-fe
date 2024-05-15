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
  UserIcon,
  RectangleStackIcon
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
        icon: BriefcaseIcon,
        label: 'route.admin_medicines',
        slug: '/admin/medicine',
        children: [
          {
            label: 'route.admin_healthrecords_add',
            slug: '/admin/healthrecords/add'
          },
          {
            label: 'route.admin_prescriptions_add',
            slug: '/admin/prescriptions/add'
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
            label: 'route.admin_healthrecords',
            slug: '/admin/healthrecords'
          },
          {
            label: 'route.admin_prescriptions',
            slug: '/admin/prescriptions'
          },
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
          }
        ]
      },
      {
        icon: RectangleStackIcon,
        label: 'route.admin_categories',
        slug: '/admin/categories',
        children: [
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
            label: 'route.admin_groupservices',
            slug: '/admin/groupservices'
          },
          {
            label: 'route.admin_groupservices_add',
            slug: '/admin/groupservices/add'
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
            label: 'route.admin_branchtypes',
            slug: '/admin/branchtypes'
          },
          {
            label: 'route.admin_branchtypes_add',
            slug: '/admin/branchtypes/add'
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
            label: 'route.admin_groupurls',
            slug: '/admin/groupurls'
          },
          {
            label: 'route.admin_groupurls_add',
            slug: '/admin/groupurls/add'
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
            label: 'route.admin_groups',
            slug: '/admin/groups'
          },
          {
            label: 'route.admin_groups_add',
            slug: '/admin/groups/add'
          }
        ]
      },
      {
        icon: LockClosedIcon,
        label: 'route.admin_roles',
        slug: '/admin/roles',
        children: [
          {
            label: 'route.admin_roles',
            slug: '/admin/roles'
          },
          {
            label: 'route.admin_roles_add',
            slug: '/admin/roles/add'
          },
          {
            label: 'route.admin_permissions',
            slug: '/admin/permissions'
          },
          {
            label: 'route.admin_permissions_add',
            slug: '/admin/permissions/add'
          },
          {
            label: 'route.admin_assignments',
            slug: '/admin/assignments'
          },
          {
            label: 'route.admin_assignments_add',
            slug: '/admin/assignments/add'
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
