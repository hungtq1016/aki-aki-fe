import { ref } from 'vue'
import type { TRrequency, TTier } from '../../models/type'

const frequencies = ref<Array<TRrequency>>([
  { value: 'once', title: 'Một lần', suffix: '/lần' },
  { value: 'annually', title: 'Cả năm', suffix: '/năm' }
])

const tiers = ref<Array<TTier>>([
  {
    name: 'Tiết kiệm',
    id: 'silver',
    slug: '#',
    price: { once: '800.000 VNĐ', annually: '16.000.000 VNĐ' },
    desc: 'Gói trồng răng tiết kiệm, sử dụng implant Hàn quốc, có kiểm tra định kì. ',
    features: ['Chụp X quang', 'Thuốc – Phẩu thuật', 'Tái khám', 'Bảo hành    '],
    mostPopular: false
  },
  {
    name: 'Cơ bản',
    id: 'tier-freelancer',
    slug: '#',
    price: { once: '1.000.000 VNĐ', annually: '18.000.000 VNĐ' },
    desc: 'Gói khám răng tổng quát cơ bản dành cho người trưởng thành, hiệu quả, tiết kiệm chi phí.',
    features: [ 'Gói tiết kiệm', 'Trám răng', 'Chụp X quang', 'Cạo vôi' ],
    mostPopular: false
  },
  {
    name: 'Cao cấp',
    id: 'tier-startup',
    slug: '#',
    price: { once: '3.880.000 VNĐ', annually: '22.150.000 VNĐ' },
    desc: 'Gói cao cấp dành cho người trưởng thành, giúp đánh giá, phát hiện sớm những vấn đề răng',
    features: [
      'Gói cơ bản',
      'Cạo vôi cao cấp      ',
      'Trồng răng thẩm mỹ      ',
      'Phẫu thuật      ',
      'Thuốc      '
    ],
    mostPopular: true
  },
  {
    name: 'Toàn diện',
    id: 'tier-enterprise',
    slug: '#',
    price: { once: '5.855.000 VNĐ', annually: '40.220.000 VNĐ' },
    desc: 'Gói khám răng toàn diện, toàn bộ dịch vụ răng tại phòng khám',
    features: [
      'Không giới hạn hạng mục',
      'Ưu tiên',
      'Chăm sóc y tế tối đa'
    ],
    mostPopular: false
  }
])

export { frequencies, tiers }
