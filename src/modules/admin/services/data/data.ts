import { ref } from "vue";
import type { TMenu } from "../../models/type";
import { NewspaperIcon, HomeIcon, ArrowUturnLeftIcon, ChatBubbleOvalLeftIcon, BriefcaseIcon ,ArchiveBoxIcon, BookmarkIcon, TagIcon, BuildingStorefrontIcon  } from "@heroicons/vue/24/outline";

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
                label: "route.admin_blogs",
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
                label: "route.admin_categories",
                route: "#",
                children:[
                    {
                        label: "route.admin_categories",
                        route: "/admin/categories",
                    },
                    {
                        label: "route.admin_categories_add",
                        route: "/admin/categories/add",
                    }
                ]
            },
            {
                icon: TagIcon ,
                label: "route.admin_tags",
                route: "#",
                children:[
                    {
                        label: "route.admin_tags",
                        route: "/admin/tags",
                    },
                    {
                        label: "route.admin_tags_add",
                        route: "/admin/tags/add",
                    }
                ]
            },
            {
                icon: BookmarkIcon ,
                label: "route.admin_services",
                route: "#",
                children:[
                    {
                        label: "route.admin_services",
                        route: "/admin/services",
                    },
                    {
                        label: "route.admin_services_add",
                        route: "/admin/services/add",
                    }
                ]
            },
            {
                icon: BuildingStorefrontIcon ,
                label: "route.admin_branches",
                route: "#",
                children:[
                    {
                        label: "route.admin_branches",
                        route: "/admin/branches",
                    },
                    {
                        label: "route.admin_branches_add",
                        route: "/admin/branches/add",
                    }
                ]
            },
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
                icon: ArrowUturnLeftIcon,
                label: "route.home",
                route: "/"
            }
        ]
    },
]