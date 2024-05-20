import type { TMenu } from '../../models/type'
import { NewspaperIcon, HomeIcon, ArrowUturnLeftIcon, ChatBubbleOvalLeftIcon, BriefcaseIcon, BookmarkIcon, BuildingStorefrontIcon, LockClosedIcon, LinkIcon, ClockIcon, UserIcon, RectangleStackIcon, ClipboardDocumentCheckIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
// import { checkPermission } from '@/core/services/hooks/usePermission'
import { ref } from 'vue'
export const target = ref()
export const menus: TMenu[] = [
  {
    name: 'content.menu',
    menuItems: [
      {
        icon: HomeIcon,
        show: true,
        label: 'route.admin',
        slug: '/admin',
        children: [
          {
            show: true,
            label: 'route.chart',
            slug: '/admin'
          }
        ]
      },
      {
        icon: ClockIcon,
        show: true,
        label: 'route.admin_schedules',
        slug: '/admin/schedules',
        children: [
          {
            show: true,
            label: 'route.admin_schedules',
            slug: '/admin/schedules'
          },
          {
            show: true,
            label: 'route.admin_schedules_add',
            slug: '/admin/schedules/add'
          }
        ]
      },
      {
        icon: BriefcaseIcon,
        show: true,
        label: 'route.admin_medicines',
        slug: '/admin/medicine',
        children: [
          {
            show: true,
            label: 'route.admin_healthrecords_add',
            slug: '/admin/healthrecords/add'
          },
          {
            show: true,
            label: 'route.admin_prescriptions_add',
            slug: '/admin/prescriptions/add'
          },
          {
            show: true,
            label: 'route.admin_medicines',
            slug: '/admin/medicines'
          },
          {
            show: true,
            label: 'route.admin_medicines_add',
            slug: '/admin/medicines/add'
          },
          {
            show: true,
            label: 'route.admin_healthrecords',
            slug: '/admin/healthrecords'
          },
          {
            show: true,
            label: 'route.admin_prescriptions',
            slug: '/admin/prescriptions'
          },
        ]
      },
      {
        icon: ClipboardDocumentCheckIcon,
        show: true,
        label: 'route.admin_invoices',
        slug: '/admin/invoices',
        children: [
          {
            show: true,
            label: 'route.admin_invoices',
            slug: '/admin/invoices'
          },
          {
            show: true,
            label: 'route.admin_invoices_add',
            slug: '/admin/invoices/add'
          },
          {
            show: true,
            label: 'route.admin_serviceprices',
            slug: '/admin/serviceprices'
          },
          {
            show: true,
            label: 'route.admin_serviceprices_add',
            slug: '/admin/serviceprices/add'
          },
        ]
      },
      {
        icon: NewspaperIcon,
        show: true,
        label: 'route.admin_blogs',
        slug: '/admin/blogs',
        children: [
          {
            show: true,
            label: 'route.admin_blogs',
            slug: '/admin/blogs'
          },
          {
            show: true,
            label: 'route.admin_blogs_add',
            slug: '/admin/blogs/add'
          },
          {
            show: true,
            label: 'route.admin_comments',
            slug: '/admin/comments'
          }
        ]
      },
      {
        icon: RectangleStackIcon,
        show: true,
        label: 'route.admin_categories',
        slug: '/admin/categories',
        children: [
          {
            show: true,
            label: 'route.admin_categories',
            slug: '/admin/categories'
          },
          {
            show: true,
            label: 'route.admin_categories_add',
            slug: '/admin/categories/add'
          },
          {
            show: true,
            label: 'route.admin_tags',
            slug: '/admin/tags'
          },
          {
            show: true,
            label: 'route.admin_tags_add',
            slug: '/admin/tags/add'
          }
        ]
      },
      {
        icon: BookmarkIcon,
        show: true,
        label: 'route.admin_services',
        slug: '/admin/services',
        children: [
          {
            show: true,
            label: 'route.admin_services',
            slug: '/admin/services'
          },
          {
            show: true,
            label: 'route.admin_services_add',
            slug: '/admin/services/add'
          },
          {
            show: true,
            label: 'route.admin_groupservices',
            slug: '/admin/groupservices'
          },
          {
            show: true,
            label: 'route.admin_groupservices_add',
            slug: '/admin/groupservices/add'
          }
        ]
      },
      {
        icon: BuildingStorefrontIcon,
        show: true,
        label: 'route.admin_branches',
        slug: '/admin/branches',
        children: [
          {
            show: true,
            label: 'route.admin_branches',
            slug: '/admin/branches'
          },
          {
            show: true,
            label: 'route.admin_branches_add',
            slug: '/admin/branches/add'
          },
          {
            show: true,
            label: 'route.admin_branchtypes',
            slug: '/admin/branchtypes'
          },
          {
            show: true,
            label: 'route.admin_branchtypes_add',
            slug: '/admin/branchtypes/add'
          }
        ]
      },
      {
        icon: LinkIcon,
        show: true,
        label: 'route.admin_urls',
        slug: '/admin/urls',
        children: [
          {
            show: true,
            label: 'route.admin_urls',
            slug: '/admin/urls'
          },
          {
            show: true,
            label: 'route.admin_urls_add',
            slug: '/admin/urls/add'
          },
          {
            show: true,
            label: 'route.admin_groupurls',
            slug: '/admin/groupurls'
          },
          {
            show: true,
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
        show: true,
        label: 'route.message',
        slug: '/admin/message'
      },
      {
        icon: QuestionMarkCircleIcon,
        show: true,
        label: 'route.admin_faqs',
        slug: '/admin/faqs',
        children: [
          {
            show: true,
            label: 'route.admin_faqs',
            slug: '/admin/faqs'
          },
          {
            show: true,
            label: 'route.admin_faqs_add',
            slug: '/admin/faqs/add'
          }
        ]
      },
    ]
  },
  {
    name: 'content.oauth2',
    menuItems: [
      {
        icon: UserIcon,
        show: true,
        label: 'route.admin_users',
        slug: '/admin/users',
        children: [
          {
            show: true,
            label: 'route.admin_users_customer',
            slug: '/admin/users/customer'
          },
          {
            show: true,
            label: 'route.admin_users_doctor',
            slug: '/admin/users/doctor'
          },
          {
            show: true,
            label: 'route.admin_users_all',
            slug: '/admin/users/all'
          },
          {
            show: true,
            label: 'route.admin_users_add',
            slug: '/admin/users/add'
          },
          {
            show: true,
            label: 'route.admin_groups',
            slug: '/admin/groups'
          },
          {
            show: true,
            label: 'route.admin_groups_add',
            slug: '/admin/groups/add'
          }
        ]
      },
      {
        icon: LockClosedIcon,
        show: true,
        label: 'route.admin_roles',
        slug: '/admin/roles',
        children: [
          {
            show: true,
            label: 'route.admin_roles',
            slug: '/admin/roles'
          },
          {
            show: true,
            label: 'route.admin_roles_add',
            slug: '/admin/roles/add'
          },
          {
            show: true,
            label: 'route.admin_permissions',
            slug: '/admin/permissions'
          },
          {
            show: true,
            label: 'route.admin_permissions_add',
            slug: '/admin/permissions/add'
          },
          {
            show: true,
            label: 'route.admin_assignments',
            slug: '/admin/assignments'
          },
          {
            show: true,
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
        show: true,
        label: 'route.home',
        slug: '/'
      }
    ]
  }
]
