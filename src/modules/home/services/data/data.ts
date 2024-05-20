import { ref } from 'vue'
import type { TQuote, TCount } from '../../models/type'
import type { TUrl } from '@/modules/admin-branch/models/type'
import type { TBlog } from '@/modules/admin-blog/models/type'
import { StatusEnum } from '@/core/models/enum'

const banners = ref<TUrl[]>([
  {
    imageUrl: 'banner.jpg',
    label: 'Banner 1',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '-1',
    id: '-1',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    imageUrl: 'banner2.jpg',
    label: 'Banner 2',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '-1',
    id: '-1',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  }
])

const counts = ref<Array<TCount>>([
  {
    title: 'KINH NGHIỆM',
    duration: 500,
    number: 25,
    suffix: 'năm'
  },
  {
    title: 'CA PHỤC HỒI',
    duration: 500,
    number: 300,
    suffix: 'NGHÌN'
  },
  {
    title: 'CHI NHÁNH',
    duration: 500,
    number: 4,
    suffix: '+'
  }
])

const blogs = ref<Array<TBlog>>([
  {
    title: 'Hình ảnh trước và sau khi niềng răng',
    slug: '/blogs/detail/hinh-anh-truoc-va-sau-khi-nieng-rang',
    desc: 'Trước và sau khi niềng răng không chỉ là sự thay đổi về nụ cười mà còn là hành trình chăm sóc vẻ đẹp tự tin và tự hào về bản thân. Niềng răng là cơ hội để tái tạo nét đẹp tự nhiên của khuôn mặt và tăng cường lòng tự tin. ',
    imageUrl: '',
    categoryId: '',
    content: '',
    createdAt: '',
    status: StatusEnum.Active,
    id: '',
    type: '',
    updatedAt: '',
    videoEmbed: ''
  },
  {
    title: 'Quá trình niềng răng diễn ra như thế nào?',
    slug: '/blogs/detail/qua-trinh-nieng-rang-dien-ra-nhu-the-nao',
    desc: 'Quá trình niềng răng đạt chuẩn y khoa sẽ bắt đầu bằng việc khám ban đầu và kết thúc bằng kết quả là hàm răng đều và chắc khỏe. Tuy nhiên, thời gian niềng răng nhanh hay chậm còn phụ thuộc vào nhiều yếu tố khác nhau.',
    imageUrl: '',
    categoryId: '',
    content: '',
    createdAt: '',
    status: StatusEnum.Active,
    id: '',
    type: '',
    updatedAt: '',
    videoEmbed: ''
  },
  {
    title: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
    slug: '/blogs/detail/cac-giai-doan-nieng-rang-theo-cac-moc-va-dieu-can-luu-y',
    desc: 'Niềng răng là một quá trình chỉnh nha khá dài dao động từ 18 – 24 tháng vì thế quá trình này đòi hỏi người niềng phải theo sát, kiên nhẫn và tuân theo hướng dẫn quy trình niềng răng của bác sĩ nha khoa.',
    imageUrl: '',
    categoryId: '',
    content: '',
    createdAt: '',
    status: StatusEnum.Active,
    id: '',
    type: '',
    updatedAt: '',
    videoEmbed: ''
  },
  {
    title: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
    slug: '/blogs/detail/phan-biet-cac-chuc-danh-bac-si-chuyen-khoa-1-2',
    desc: 'Hiện nay, trong các tin tức sức khỏe có đề cập đến một chuyên gia y khoa nào đó, chúng ta rất thường bắt gặp các cụm từ như bác sĩ chuyên khoa 1, bác sĩ chuyên khoa 2, PGS, ThS, TS,… ',
    imageUrl: '',
    categoryId: '',
    content: '',
    createdAt: '',
    status: StatusEnum.Active,
    id: '',
    type: '',
    updatedAt: '',
    videoEmbed: ''
  }
])

const certificates = ref<Array<TUrl>>([
  {
    label: 'Hình ảnh trước và sau khi niềng răng',
    imageUrl: 'cer1.webp',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Quá trình niềng răng diễn ra như thế nào?',
    imageUrl: 'cer2.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
    imageUrl: 'cer3.jpg',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
    imageUrl: 'cer4.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  }
])

const customers = ref<Array<TUrl>>([
  {
    label: 'Hình ảnh trước và sau khi niềng răng',
    imageUrl: 'cer1.webp',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Quá trình niềng răng diễn ra như thế nào?',
    imageUrl: 'cer2.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
    imageUrl: 'cer3.jpg',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
    imageUrl: 'cer4.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Hình ảnh trước và sau khi niềng răng',
    imageUrl: 'cer1.webp',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Quá trình niềng răng diễn ra như thế nào?',
    imageUrl: 'cer2.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
    imageUrl: 'cer3.jpg',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
    imageUrl: 'cer4.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  }
])

const galleries = ref<Array<TUrl>>([
  {
    label: 'Hình ảnh trước và sau khi niềng răng',
    imageUrl: 'cer1.webp',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Quá trình niềng răng diễn ra như thế nào?',
    imageUrl: 'cer2.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
    imageUrl: 'cer3.jpg',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  },
  {
    label: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
    imageUrl: 'cer4.png',
    createdAt: '',
    status: StatusEnum.Active,
    groupId: '',
    id: '',
    slug: '',
    tag: '',
    type: '',
    updatedAt: ''
  }
])

export { banners, counts, blogs, certificates, customers, galleries }
