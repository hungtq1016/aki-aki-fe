import { ref } from 'vue'
import type { TRrequency, TTier } from '../../models/type'

const frequencies = ref<Array<TRrequency>>([
  { value: 'monthly', title: 'Monthly', suffix: '/month' },
  { value: 'annually', title: 'Annually', suffix: '/year' }
])

const tiers = ref<Array<TTier>>([
  {
    name: 'Hobby',
    id: 'tier-hobby',
    slug: '#',
    price: { monthly: '$15', annually: '$144' },
    desc: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
    mostPopular: false
  },
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    slug: '#',
    price: { monthly: '$30', annually: '$288' },
    desc: 'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time'
    ],
    mostPopular: false
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    slug: '#',
    price: { monthly: '$60', annually: '$576' },
    desc: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations'
    ],
    mostPopular: true
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    slug: '#',
    price: { monthly: '$90', annually: '$864' },
    desc: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools'
    ],
    mostPopular: false
  }
])

export { frequencies, tiers }
