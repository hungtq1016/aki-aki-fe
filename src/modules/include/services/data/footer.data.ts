import { EnableEnum } from './../../../../core/models/enum';
import { ref } from 'vue';
import type { TBranch, TContact, TSocial } from '../../models/type';
import { AnchorType } from '../../models/enum';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';

const address = ref<Array<TBranch>>([
    {
        id: '1',
        enable: Boolean(EnableEnum.ENABLE),
        createdAt: '',
        updatedAt:'',
        name: 'Trụ sở chính: PHÒNG KHÁM AKIAKI',
        address1: '550 Lũy Bán Bích, P.Hòa Thạnh',
        address2: 'Q.Tân Phú, TP.HCM',
        phone1: '(028) 38 612977',
        phone2: '0913 949 041'
    },
    {
        id: '1',
        enable: Boolean(EnableEnum.ENABLE),
        createdAt: '',
        updatedAt:'',
        name: 'PHÒNG KHÁM AKIAKI CỘNG HÒA',
        address1: '387 - 389 Cộng Hòa, P.13,',
        address2: 'Q.Tân Bình, TP.HCM',
        phone1: '(028) 62 972 290',
        phone2: '0917 710 311'
    },
    {
        id: '',
        enable: Boolean(EnableEnum.ENABLE),
        createdAt: '',
        updatedAt:'',
        name: 'PHÒNG KHÁM AKIAKI TÂN BÌNH',
        address1: '111 Trường Chinh, P.12,',
        address2: 'Q.Tân Bình, TP.HCM',
        phone1: '0916 219 211',
    },
    {
        id: '1',
        enable: Boolean(EnableEnum.ENABLE),
        createdAt: '',
        updatedAt:'',
        name: 'PHÒNG KHÁM AKIAKI BÌNH TÂN',
        address1: '155 Nguyễn Thị Tú, P.Bình Hưng Hòa B,',
        address2:' Q.Bình Tân, TP.HCM',
        phone1: '0912 219 211',
    },
])

const contacts = ref<Array<TContact>>([
    {
        type: AnchorType.mailto,
        icon: EnvelopeIcon,
        label: 'cskh@akiaki.com.vn',
        tag: 'a',
        url: 'cskh@akiaki.com.vn'
    },
    {
        type: AnchorType.tel,
        icon: PhoneIcon,
        label: '01232456789',
        tag: 'a',
        url: '01232456789'
    }
])

const socials = ref<Array<TSocial>>([
    {
        type: 'youtube',
        imageUrl: '/vuehost/socials/YT.png',
        url: 'https://www.youtube.com/'
    },
    {
        type: 'tiktok',
        imageUrl:' /vuehost/socials/tiktok.png',
        url: 'https://www.tiktok.com/'
    },
    {
        type: 'facebook',
        imageUrl: '/vuehost/socials/FB.png',
        url: 'https://www.facebook.com/'
    }
])

export { address, socials, contacts }