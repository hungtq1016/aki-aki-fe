import { ref } from "vue"
import type { TContact } from "../../models/type"
import { AnchorType } from "../../models/enum"
import { BuildingStorefrontIcon, PhoneIcon } from "@heroicons/vue/24/outline"
import type { BaseINavigation } from "@/core/models/interface"

const contacts = ref<Array<TContact>>([
    {
        type: AnchorType.url,
        icon: BuildingStorefrontIcon,
        name: "shop",
        url: "https://shopee.vn/"
    },
    {
        type: AnchorType.tel,
        icon: PhoneIcon,
        name: "1800 599 941",
        url: "1800 599 941"
    }
])

const navigations = ref<BaseINavigation[]>([
    {
        href: "/",
        title: "route.home"
    },
    {
        href: "/about",
        title: "route.about"
    },
    {
        href: "/service",
        title: "route.service"
    },
    {
        href: "/specialist",
        title: "route.specialist"
    },
    {
        href: "/blogs",
        title: "route.blogs"
    },
    {
        href: "/contact",
        title: "route.contact"
    }
])

export { contacts, navigations }