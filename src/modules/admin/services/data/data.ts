import { ref } from "vue";
import type { TMenu } from "../../models/type";
import { NewspaperIcon, HomeIcon, Cog6ToothIcon, Square3Stack3DIcon } from "@heroicons/vue/24/outline";

export const target = ref(null)

export const menus: TMenu[] = [
    {
        name: "content.menu",
        menuItems: [
            {
                icon: HomeIcon,
                label: "route.dashboard",
                route: "/admin",
                children: [
                    {
                        label: "route.chart",
                        route: "/admin",
                    }
                ]
            },
            {
                icon: NewspaperIcon ,
                label: "route.blogs",
                route: "/admin/blogs"
            },
            {
                icon: Square3Stack3DIcon,
                label: "route.collection",
                route: "/admin/collections"
            }
        ]
    },
    {
        name: "content.menu_other",
        menuItems: [
            {
                icon: Cog6ToothIcon,
                label: "route.setting",
                route: "/admin/pages/settings"
            }
        ]
    }
]