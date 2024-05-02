import { ref } from "vue"
import type { TAddress, TContact, TSocial } from "../../models/type"
import { AnchorType } from "../../models/enum"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline"

const address = ref<Array<TAddress>>([
    {
        "name": "Trụ sở chính: PHÒNG KHÁM AKIAKI",
        "address1": "550 Lũy Bán Bích, P.Hòa Thạnh",
        "address2": "Q.Tân Phú, TP.HCM",
        "phone1": "(028) 38 612977",
        "phone2": "0913 949 041"
    },
    {
        "name": "PHÒNG KHÁM AKIAKI CỘNG HÒA",
        "address1": "387 - 389 Cộng Hòa, P.13,",
        "address2": "Q.Tân Bình, TP.HCM",
        "phone1": "(028) 62 972 290",
        "phone2": "0917 710 311"
    },
    {
        "name": "PHÒNG KHÁM AKIAKI TÂN BÌNH",
        "address1": "111 Trường Chinh, P.12,",
        "address2": "Q.Tân Bình, TP.HCM",
        "phone1": "0916 219 211",
    },
    {
        "name": "PHÒNG KHÁM AKIAKI BÌNH TÂN",
        "address1": "155 Nguyễn Thị Tú, P.Bình Hưng Hòa B,",
        "address2": "Q.Bình Tân, TP.HCM",
        "phone1": "0912 219 211",
    },
])

const contacts = ref<Array<TContact>>([
    {
        type: AnchorType.mailto,
        icon: EnvelopeIcon,
        name: "cskh@akiaki.com.vn",
        url: "cskh@akiaki.com.vn"
    },
    {
        type: AnchorType.tel,
        icon: PhoneIcon,
        name: "01232456789",
        url: "01232456789"
    }
])

const socials = ref<Array<TSocial>>([
    {
        type: "youtube",
        imageUrl: "/socials/YT.png",
        url: "https://www.youtube.com/"
    },
    {
        type: "tiktok",
        imageUrl: "/socials/tiktok.png",
        url: "https://www.tiktok.com/"
    },
    {
        type: "facebook",
        imageUrl: "/socials/FB.png",
        url: "https://www.facebook.com/"
    }
])

export { address, socials, contacts }