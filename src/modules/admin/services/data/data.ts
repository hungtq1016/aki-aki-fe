import { ref } from "vue";
import type { TMenu } from "../../models/type";
import { NewspaperIcon, HomeIcon, Cog6ToothIcon, Square3Stack3DIcon, ArrowUturnLeftIcon, ChatBubbleOvalLeftIcon, BriefcaseIcon } from "@heroicons/vue/24/outline";
import { ArchiveBoxIcon, BookmarkIcon } from "@heroicons/vue/20/solid";

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
                label: "route.admin_medicines",
                route: "#",
                children:[
                    {
                        label: "route.admin_medicines",
                        route: "/admin/medicines",
                    },
                    {
                        label: "route.admin_medicines_prescription",
                        route: "/admin/medicines/prescription",
                    }
                ]
            },
            {
                icon: ArchiveBoxIcon ,
                label: "route.categories",
                route: "#",
                children:[
                    {
                        label: "route.categories_list",
                        route: "/admin/categories",
                    },
                    {
                        label: "route.categories_add",
                        route: "/admin/categories/add",
                    }
                ]
            },
            {
                icon: BookmarkIcon ,
                label: "route.tags",
                route: "#",
                children:[
                    {
                        label: "route.tags_list",
                        route: "/admin/tags",
                    },
                    {
                        label: "route.tags_add",
                        route: "/admin/tags/add",
                    }
                ]
            },
            {
                icon: BookmarkIcon ,
                label: "route.services",
                route: "#",
                children:[
                    {
                        label: "route.services_list",
                        route: "/admin/services",
                    },
                    {
                        label: "route.services_add",
                        route: "/admin/services/add",
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
    },
]