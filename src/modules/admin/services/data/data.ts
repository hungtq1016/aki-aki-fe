import { ref } from "vue";
import type { TMenu } from "../../models/type";
import { NewspaperIcon, HomeIcon, Cog6ToothIcon, Square3Stack3DIcon, ArrowUturnLeftIcon, ChatBubbleOvalLeftIcon, BriefcaseIcon } from "@heroicons/vue/24/outline";

export const target = ref(null)

export const menus: TMenu[] = [
    {
        name: "content.menu",
        menuItems: [
            {
                icon: HomeIcon,
                label: "route.admin",
                route: "#",
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
                route: "#",
                children:[
                    {
                        label: "route.admin_blogs",
                        route: "/admin/blogs",
                    },
                    {
                        label: "route.admin_blogs_add",
                        route: "/admin/blogs/add",
                    }
                ]
            },
            {
                icon: BriefcaseIcon ,
                label: "route.admin_medicine",
                route: "#",
                children:[
                    {
                        label: "route.admin_medicine",
                        route: "/admin/medicine",
                    },
                    {
                        label: "route.admin_medicine_prescription",
                        route: "/admin/medicine/prescription",
                    }
                ]
            }
        ]
    },
    {
        name: "content.support",
        menuItems: [
            {
                icon: ChatBubbleOvalLeftIcon,
                label: "route.message",
                route: "/admin/message",
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
            },
            {
                icon: ArrowUturnLeftIcon,
                label: "route.home",
                route: "/"
            }
        ]
    }
]