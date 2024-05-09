import { ref } from "vue";
import type { TFaQ, TSpecialist, TService } from "../../models/type";

const specialists = ref<Array<TSpecialist>>([
    {
        imageUrl: '/vuehost/special1.png',
        name: 'Khoa Nhiễm',
        slug: '/specialist/khoa-nhiem',
    },
    {
        imageUrl: '/vuehost/special2.png',
        name: 'Xét nghiệm',
        slug: '/specialist/xet-nghiem',
    }
])

const faqs = ref<Array<TFaQ>>([
    {
        title:"PETPRO có phải là bệnh viện thú y tốt nhất không bạn?",
        answer:"Đội ngũ nhân viên chuyên nghiệp, cơ sở thiết bị hiện đại, là bệnh viện lâu đời tại khu vực TPHCM"
    },
    {
        title:"Đội ngũ y Bác sĩ có nhận đào tạo học viên?",
        answer:"PETPRO luôn nhận đào tạo học viên, tạo cơ hội cho các bạn sinh viên được thực hành với công việc, và hỗ trợ lập nghiệp khi được đào tạo ở PETPRO"
    },
    {
        title:"PETPRO thành lập từ khi nào?",
        answer:"PETPRO được thành lập từ năm 1998, đến nay đã có hơn 20 năm kinh nghiệm trong quá trình điều trị và chữa bệnh cho thú cưng"
    },
    {
        title:"Giá cả ở PETPRO có mắc quá không bạn ?",
        answer:"Chi phí, giá cả rất phù hợp với chất lượng dịch vụ, có nhiều khung giá để bạn chọn lựa phù hợp với thu nhập của mình"
    }
])

const services = ref<Array<TService>>([
    {
        imageUrl: '/vuehost/special1.png',
        name: 'Khám bệnh tại nhà',
        slug: '/other/kham-benh-tai-nhâ',
        desc: 'Dịch vụ khám bệnh tại nhà'
    },
    {
        imageUrl: '/vuehost/special2.png',
        name: 'Chăm sóc răng miệng',
        slug: '/other/cham-soc-rang-mieng',
        desc: 'Dịch vụ chăm sóc răng miệng'
    },
    {
        imageUrl: '/vuehost/special1.png',
        name: 'Bảo hiểm',
        slug: '/other/bao-hiem',
        desc: 'Dịch vụ bảo hiểm cho khách hàng'
    },
    {
        imageUrl: '/vuehost/special2.png',
        name: 'Xét nghiệm',
        slug: '/other/xet-nghiem',
        desc: 'Dịch vụ xét nghiệm'
    }
])

export {specialists,faqs,services}