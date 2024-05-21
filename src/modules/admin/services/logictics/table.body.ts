// import { ref } from "vue"
// import type { BodyItemClassNameFunction, Header, HeaderItemClassNameFunction, Item } from "vue3-easy-data-table"

// export const headerItemClassNameFunction: HeaderItemClassNameFunction = (header: Header): string => {
//     if (header.value === 'score') return 'score-column'
//     return 'dark:!bg-zinc-900 dark:!text-gray-50 dark:!border-gray-800'
// }

// export const bodyItemClassNameFunction: BodyItemClassNameFunction = (column: string): string => {
//     if (column === 'score') return 'score-column'
//     return 'dark:!bg-zinc-800 dark:!text-gray-50 dark:!border-gray-800'
// }

// export const itemsSelected = ref<Item[]>([])

// export const remove = (id: string): void => {
//     itemRef.value = itemRef.value.filter((value) => value.id !== id)
// }