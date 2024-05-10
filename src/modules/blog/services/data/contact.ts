import { AnchorType } from '@/modules/include/models/enum'
import { ref } from 'vue'
import type { TSocial } from '../../models/type'
import type { TAddress } from '@/modules/include/models/type'

const socials = ref<Array<TSocial>>([
  {
    title: 'https://www.facebook.com/',
    url: 'https://www.facebook.com/',
    lable: 'Facebook',
    type: AnchorType.url
  },
  {
    title: 'https://www.youtube.com/',
    url: 'https://www.youtube.com/',
    lable: 'Youtube',
    type: AnchorType.url
  },
  {
    title: 'https://www.tiktok.com/',
    url: 'https://www.tiktok.com/',
    lable: 'Tiktok',
    type: AnchorType.url
  },
  {
    title: '0123 456 789',
    url: 'https://zalo.me/0123456789',
    lable: 'Zalo',
    type: AnchorType.url
  },
  {
    title: '0123 456 789',
    url: '0123456789',
    lable: 'Hotline',
    type: AnchorType.tel
  }
])

const branchs = ref<Array<TAddress>>([
  {
    name: 'Trụ sở chính: PHÒNG KHÁM AKIAKI',
    address1: '550 Lũy Bán Bích, P.Hòa Thạnh',
    address2: 'Q.Tân Phú, TP.HCM',
    phone1: '(028) 38 612977',
    phone2: '0913 949 041'
  },
  {
    name: 'PHÒNG KHÁM AKIAKI CỘNG HÒA',
    address1: '387 - 389 Cộng Hòa, P.13,',
    address2: 'Q.Tân Bình, TP.HCM',
    phone1: '(028) 62 972 290',
    phone2: '0917 710 311'
  },
  {
    name: 'PHÒNG KHÁM AKIAKI TÂN BÌNH',
    address1: '111 Trường Chinh, P.12,',
    address2: 'Q.Tân Bình, TP.HCM',
    phone1: '0916 219 211'
  },
  {
    name: 'PHÒNG KHÁM AKIAKI BÌNH TÂN',
    address1: '155 Nguyễn Thị Tú, P.Bình Hưng Hòa B,',
    address2: 'Q.Bình Tân, TP.HCM',
    phone1: '0912 219 211'
  }
])

export { branchs, socials }
