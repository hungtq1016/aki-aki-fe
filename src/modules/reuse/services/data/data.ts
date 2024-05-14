import { ref } from 'vue'
import type { TFaQ } from '../../models/type'
import type { TService } from '@/modules/admin-service/models/type'

const specialists = ref<Array<TService>>([
  {
    imageUrl: '/vuehost/special1.png',
    title: 'Khoa Nhiễm',
    slug: '/specialist/khoa-nhiem',
    content: '',
    createdAt: '',
    enable: true,
    groupId: '',
    id: '',
    updatedAt: '',
    videoEmbed: '',
    desc:''
  },
  {
    imageUrl: '/vuehost/special2.png',
    title: 'Xét nghiệm',
    slug: '/specialist/khoa-nhiem',
    content: '',
    createdAt: '',
    enable: true,
    groupId: '',
    id: '',
    updatedAt: '',
    videoEmbed: '',
    desc:''
  }
])

const faqs = ref<Array<TFaQ>>([
  {
    title: 'AKIAKI có phải là Phòng khám tốt nhất không bạn?',
    answer:
      'Đội ngũ nhân viên chuyên nghiệp, cơ sở thiết bị hiện đại, là bệnh viện lâu đời tại khu vực TPHCM'
  },
  {
    title: 'Đội ngũ y Bác sĩ có nhận đào tạo học viên?',
    answer:
      'AKIAKI luôn nhận đào tạo học viên, tạo cơ hội cho các bạn sinh viên được thực hành với công việc, và hỗ trợ lập nghiệp khi được đào tạo ở AKIAKI'
  },
  {
    title: 'AKIAKI thành lập từ khi nào?',
    answer:
      'AKIAKI được thành lập từ năm 1998, đến nay đã có hơn 20 năm kinh nghiệm trong quá trình điều trị và chữa bệnh cho bạn'
  },
  {
    title: 'Giá cả ở AKIAKI có mắc quá không bạn ?',
    answer:
      'Chi phí, giá cả rất phù hợp với chất lượng dịch vụ, có nhiều khung giá để bạn chọn lựa phù hợp với thu nhập của mình'
  }
])

const services = ref<Array<TService>>([
  {
    imageUrl: '/vuehost/special1.png',
    title: 'Khám bệnh tại nhà',
    slug: '#',
    desc: 'Dịch vụ khám bệnh tại nhà',
    content:'',
    createdAt:'',
    updatedAt:'',
    groupId:'',
    videoEmbed:'',
    id:'1',
    enable: true
  },
  {
    imageUrl: '/vuehost/special2.png',
    title: 'Chăm sóc răng miệng',
    slug: '#',
    desc: 'Dịch vụ chăm sóc răng miệng',
    content:'',
    createdAt:'',
    updatedAt:'',
    groupId:'',
    videoEmbed:'',
    id:'1',
    enable: true
  },
  {
    imageUrl: '/vuehost/special1.png',
    title: 'Bảo hiểm',
    slug: '#',
    desc: 'Dịch vụ bảo hiểm cho khách hàng',
    content:'',
    createdAt:'',
    updatedAt:'',
    groupId:'',
    videoEmbed:'',
    id:'1',
    enable: true
  },
  {
    imageUrl: '/vuehost/special2.png',
    title: 'Xét nghiệm',
    slug: '#',
    desc: 'Dịch vụ xét nghiệm',
    content:'',
    createdAt:'',
    updatedAt:'',
    groupId:'',
    videoEmbed:'',
    id:'1',
    enable: true
  }
])

export { specialists, faqs, services }
