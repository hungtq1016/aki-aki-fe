import { ref } from "vue";
import type { TPresciption } from "../../models/type";

export const prescriptions = ref<TPresciption[]>([
    {
        name:"Henry Dholi",
        brand:"Ok, Thanks for your reply.",
        quantity:2,
        usage:"2/per day"
    },
    {
        name:"Henry Dholi",
        brand:"I like your confidence 💪",
        quantity:3,
        usage:"3/per day"
    },
    {
        name:"Henry Dholi",
        brand:"Can you share your offer? ",
        quantity:1,
        usage:"1/per day"
    },
    {
        name:"Andri Thomas",
        brand:"I'm waiting for you response! ",
        quantity:1,
        usage:"3/per day"
    },
    {
        name:"Henry Dholi",
        brand:"I want to make an appointment tomorrow from 2:00 to 5:00pm? ",
        quantity:2,
        usage:"2/per day"
    },
    
    {
        name:"Andri Thomas",
        brand:"Call me later",
        quantity:2,
        usage:"1/per day"
    }
])