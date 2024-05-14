import { ref } from 'vue'
import type { TAside } from '../../models/type'

const asides = ref<Array<TAside>>([
  {
    title: 'Chuyên Khoa',
    slug: 'specialist',
    list: [
      {
        title: 'Khoa Nhiễm',
        slug: 'khoa-nhiem'
      },
      {
        title: 'Khoa Nội',
        slug: 'khoa-noi'
      },
      {
        title: 'Khoa Ngoại',
        slug: 'khoa-ngoai'
      },
      {
        title: 'Tiêm Phòng',
        slug: 'tiem-phong'
      },
      {
        title: 'X-Quang',
        slug: 'x-quang'
      },
      {
        title: 'Siêu Âm',
        slug: 'sieu-am'
      }
    ]
  },
  {
    title: 'Dịch Vụ Khác',
    slug: 'other',
    list: [
      {
        title: 'Khám Bệnh Tại Nhà',
        slug: 'kham-benh-tai-nha'
      },
      {
        title: 'Chăm Sóc Răng Miệng',
        slug: 'cham-soc-rang-mieng'
      },
      {
        title: 'Thuốc Kê Toa',
        slug: 'thuoc-ke-toa'
      },
      {
        title: 'Đào Tạo',
        slug: 'dao-tao'
      },
      {
        title: 'Cấp Cứu 24/7',
        slug: 'cap-cuu-247'
      }
    ]
  }
])


export { asides }
