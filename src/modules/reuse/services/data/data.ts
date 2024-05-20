import { ref } from 'vue'
import type { TService } from '@/modules/admin-service/models/type'
import type { TFaq } from '@/modules/admin-faq/models/type'

const specialists = ref<Array<TService>>([
  {
    imageUrl: 'special1.png',
    title: 'Khoa Nhiễm',
    slug: '/specialist/khoa-nhiem',
    content: '',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    updatedAt: '',
    videoEmbed: '',
    desc: ''
  },
  {
    imageUrl: 'special2.png',
    title: 'Xét nghiệm',
    slug: '/specialist/khoa-nhiem',
    content: '',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    updatedAt: '',
    videoEmbed: '',
    desc: ''
  }
])

const faqs = ref<Array<TFaq>>([
  {
    question: 'AKIAKI có phải là Phòng khám tốt nhất không bạn?',
    answer:
      'Đội ngũ nhân viên chuyên nghiệp, cơ sở thiết bị hiện đại, là bệnh viện lâu đời tại khu vực TPHCM',
    src: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    status: StatusEnum.Active
  },
  {
    question: 'Đội ngũ y Bác sĩ có nhận đào tạo học viên?',
    answer:
      'AKIAKI luôn nhận đào tạo học viên, tạo cơ hội cho các bạn sinh viên được thực hành với công việc, và hỗ trợ lập nghiệp khi được đào tạo ở AKIAKI',
    src: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    status: StatusEnum.Active
  },
  {
    question: 'AKIAKI thành lập từ khi nào?',
    answer:
      'AKIAKI được thành lập từ năm 1998, đến nay đã có hơn 20 năm kinh nghiệm trong quá trình điều trị và chữa bệnh cho bạn',
    src: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    status: StatusEnum.Active
  },
  {
    question: 'Giá cả ở AKIAKI có mắc quá không bạn ?',
    answer:
      'Chi phí, giá cả rất phù hợp với chất lượng dịch vụ, có nhiều khung giá để bạn chọn lựa phù hợp với thu nhập của mình',
    src: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    status: StatusEnum.Active
  }
])

const services = ref<Array<TService>>([
  {
    imageUrl: 'special1.png',
    title: 'Khám bệnh tại nhà',
    slug: '#',
    desc: 'Dịch vụ khám bệnh tại nhà',
    content: '',
    createdAt: '',
    updatedAt: '',
    groupId: '',
    videoEmbed: '',
    id: '1',
    status: StatusEnum.Active
  },
  {
    imageUrl: 'special2.png',
    title: 'Chăm sóc răng miệng',
    slug: '#',
    desc: 'Dịch vụ chăm sóc răng miệng',
    content: '',
    createdAt: '',
    updatedAt: '',
    groupId: '',
    videoEmbed: '',
    id: '1',
    status: StatusEnum.Active
  },
  {
    imageUrl: 'special1.png',
    title: 'Bảo hiểm',
    slug: '#',
    desc: 'Dịch vụ bảo hiểm cho khách hàng',
    content: '',
    createdAt: '',
    updatedAt: '',
    groupId: '',
    videoEmbed: '',
    id: '1',
    status: StatusEnum.Active
  },
  {
    imageUrl: 'special2.png',
    title: 'Xét nghiệm',
    slug: '#',
    desc: 'Dịch vụ xét nghiệm',
    content: '',
    createdAt: '',
    updatedAt: '',
    groupId: '',
    videoEmbed: '',
    id: '1',
    status: StatusEnum.Active
  }
])

export { specialists, faqs, services }
