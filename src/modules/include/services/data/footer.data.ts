import { EnableEnum } from './../../../../core/models/enum'
import { ref } from 'vue'
import type { TContact, TSocial } from '../../models/type'
import { AnchorType } from '../../models/enum'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import type { TBranch, TUrl } from '@/modules/admin-branch/models/type'

const address = ref<Array<TBranch>>([
  {
    id: '1',
    enable: Boolean(EnableEnum.ENABLE),
    createdAt: '',
    updatedAt: '',
    name: 'Trụ sở chính: PHÒNG KHÁM AKIAKI',
    address1: '550 Lũy Bán Bích, P.Hòa Thạnh',
    address2: 'Q.Tân Phú, TP.HCM',
    phone1: '(028) 38 612977',
    phone2: '0913 949 041',
    typeId: '',
    addressEmbed: ''
  },
  {
    id: '1',
    enable: Boolean(EnableEnum.ENABLE),
    createdAt: '',
    updatedAt: '',
    name: 'PHÒNG KHÁM AKIAKI CỘNG HÒA',
    address1: '387 - 389 Cộng Hòa, P.13,',
    address2: 'Q.Tân Bình, TP.HCM',
    phone1: '(028) 62 972 290',
    phone2: '0917 710 311',
    typeId: '',
    addressEmbed: ''
  },
  {
    id: '',
    enable: Boolean(EnableEnum.ENABLE),
    createdAt: '',
    updatedAt: '',
    name: 'PHÒNG KHÁM AKIAKI TÂN BÌNH',
    address1: '111 Trường Chinh, P.12,',
    address2: 'Q.Tân Bình, TP.HCM',
    phone1: '0916 219 211',
    typeId: '',
    addressEmbed: ''
  },
  {
    id: '1',
    enable: Boolean(EnableEnum.ENABLE),
    createdAt: '',
    updatedAt: '',
    name: 'PHÒNG KHÁM AKIAKI BÌNH TÂN',
    address1: '155 Nguyễn Thị Tú, P.Bình Hưng Hòa B,',
    address2: ' Q.Bình Tân, TP.HCM',
    phone1: '0912 219 211',
    typeId: '',
    addressEmbed: ''
  }
])

const contacts = ref<Array<TUrl>>([
  {
    id: '1',
    createdAt: '',
    enable: true,
    groupId: '',
    imageUrl: '',
    updatedAt: '',
    tag: 'a',
    type: AnchorType.mailto,
    label: 'cskh@akiaki.com.vn',
    slug: 'cskh@akiaki.com.vn'
  },
  {
    id: '2',
    createdAt: '',
    enable: true,
    groupId: '',
    imageUrl: '',
    updatedAt: '',
    tag: 'a',
    type: AnchorType.tel,
    label: '01232456789',
    slug: '01232456789'
  }
])

const socials = ref<Array<TUrl>>([
  {
    id: '1',
    createdAt: '',
    enable: true,
    groupId: '',
    imageUrl: '',
    updatedAt: '',
    tag: 'a',
    type: AnchorType.mailto,
    label: 'cskh@akiaki.com.vn',
    slug: 'cskh@akiaki.com.vn'
  },
  {
    id: '1',
    createdAt: '',
    enable: true,
    groupId: '',
    imageUrl: '',
    updatedAt: '',
    tag: 'a',
    type: AnchorType.url,
    label: 'cskh@akiaki.com.vn',
    slug: 'cskh@akiaki.com.vn'
  },
  {
    id: '2',
    createdAt: '',
    enable: true,
    groupId: '',
    imageUrl: '',
    updatedAt: '',
    tag: 'a',
    type: AnchorType.url,
    label: 'cskh@akiaki.com.vn',
    slug: 'cskh@akiaki.com.vn'
  },
  {
    id: '3',
    createdAt: '',
    enable: true,
    groupId: '',
    imageUrl: '',
    updatedAt: '',
    tag: 'a',
    type: AnchorType.url,
    label: 'cskh@akiaki.com.vn',
    slug: 'cskh@akiaki.com.vn'
  }
])

export { address, socials, contacts }
