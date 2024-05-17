import { ref } from 'vue'
import type { TContact } from '../../models/type'
import { AnchorType } from '../../models/enum'
import {
  ArrowRightEndOnRectangleIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  NewspaperIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'
import type { BaseINavigation } from '@/core/models/interface'

const contacts = ref<Array<TContact>>([
  {
    type: AnchorType.url,
    icon: BuildingStorefrontIcon,
    label: 'shop',
    tag: 'a',
    url: 'https://shopee.vn/'
  },
  {
    type: AnchorType.tel,
    icon: PhoneIcon,
    label: '1800 1800',
    tag: 'a',
    url: '1800 1800'
  }
])

const navigations = ref<BaseINavigation[]>([
  {
    href: '/',
    title: 'route.home'
  },
  {
    href: '/about',
    title: 'route.about'
  },
  {
    href: '/service',
    title: 'route.service'
  },
  {
    href: '/specialist',
    title: 'route.specialist'
  },
  {
    href: '/blogs',
    title: 'route.blogs'
  },
  {
    href: '/contact',
    title: 'route.contact'
  }
])

const adminNavigations = ref<Array<TContact>>([
  {
    type: AnchorType.url,
    icon: HomeIcon,
    tag: 'a',
    label: 'route.admin',
    url: '/admin'
  },
  {
    type: AnchorType.url,
    icon: NewspaperIcon,
    label: 'route.admin_blogs',
    tag: 'a',
    url: '/admin/blogs'
  }
])

export { contacts, navigations, adminNavigations }
