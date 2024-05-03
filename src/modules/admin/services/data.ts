import { Cog6ToothIcon, HomeIcon, MusicalNoteIcon, Square3Stack3DIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import type { TMenu } from "../models/type";

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
                icon: MusicalNoteIcon,
                label: "navigation.audio",
                route: "/admin/audios"
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