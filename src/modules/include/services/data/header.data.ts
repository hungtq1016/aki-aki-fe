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
        title: "navigation.home"
    },
    {
        href: "/about",
        title: "navigation.about"
    },
    {
        href: "/service",
        title: "navigation.service"
    },
    {
        href: "/specialist",
        title: "navigation.specialist"
    },
    {
        href: "/blogs",
        title: "navigation.blogs"
    },
    {
        href: "/contact",
        title: "navigation.contact"
    }
])

export { contacts, navigations }