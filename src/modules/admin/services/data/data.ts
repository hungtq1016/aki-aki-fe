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
            },
            {
                icon: ArchiveBoxIcon ,
                label: "route.category",
                route: "#",
                children:[
                    {
                        label: "route.category_list",
                        route: "/admin/category",
                    },
                    {
                        label: "route.categories_add",
                        route: "/admin/category/add",
                    }
                ]
            },
            {
                icon: BookmarkIcon ,
                label: "route.tag",
                route: "#",
                children:[
                    {
                        label: "route.tag_list",
                        route: "/admin/tag",
                    },
                    {
                        label: "route.tags_add",
                        route: "/admin/tag/add",
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