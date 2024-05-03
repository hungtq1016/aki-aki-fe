import { ref } from "vue";
import type { TAboutThumb } from "../../models/type";
import { ChatBubbleLeftRightIcon, ComputerDesktopIcon, HomeIcon, UserIcon } from "@heroicons/vue/24/outline";

const abouts = ref<Array<TAboutThumb>>([
    {
        title:"Giới Thiệu Phòng Khám",
        slug:"/about/introduction",
        imageUrl:"https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75",
        desc:"Hệ thống PETPRO được thành lập từ năm 1998 với 6 bệnh viện trải dài qua 4 quận Tân Phú, Tân Bình, Bình Tân, Quận 11 và TP. Vũng Tàu.",
        icon: HomeIcon
    },
    {
        title:"Trang Thiết Bị Hiện Đại",
        slug:"/about/equipment",
        imageUrl:"https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75",
        desc:"PETPRO có đầy đủ các trang thiết bị tân tiến và hiện đại bậc nhất tại Việt Nam. Được cấp các chứng chỉ chuyên biệt.",
        icon: ComputerDesktopIcon
    },
    {
        title:"Đội Ngũ Bác Sĩ",
        slug:"/about/team",
        imageUrl:"https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75",
        desc:"Với đội ngũ bác sĩ tận tâm có chuyên môn cao. Được những giáo sư, bác sĩ nổi tiếng trên thế giới đào tạo",
        icon: UserIcon
    },
    {
        title:"Khách Hàng Nói Về PETPRO",
        slug:"/about/customer",
        imageUrl:"https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75",
        desc:"PETPRO luôn tập trung để chăm sóc thú cưng của bạn, dịch vụ chăm sóc rất tốt, trang thiết bị hiện đại.",
        icon: ChatBubbleLeftRightIcon
    }
])

export {abouts}