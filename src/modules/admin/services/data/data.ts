import { ref } from "vue";
import type { TMenu } from "../../models/type";
import { NewspaperIcon, HomeIcon, Cog6ToothIcon, Square3Stack3DIcon } from "@heroicons/vue/24/outline";

export const target = ref(null)

export const menus: TMenu[] = [
    {
        name: "navigation.menu",
        menuItems: [
            {
                icon: HomeIcon,
                label: "navigation.dashboard",
                route: "/admin",
                children: [
                    {
                        label: "navigation.chart",
                        route: "/admin",
                    }
                ]
            },
            {
                icon: NewspaperIcon ,
                label: "navigation.blogs",
                route: "/admin/blogs"
            },
            {
                icon: Square3Stack3DIcon,
                label: "navigation.collection",
                route: "/admin/collections"
            }
        ]
    },
    {
        name: "navigation.other",
        menuItems: [
            {
                icon: Cog6ToothIcon,
                label: "navigation.setting",
                route: "/admin/pages/settings"
            }
        ]
    }
]