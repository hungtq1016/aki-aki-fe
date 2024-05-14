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
    price: { once: '1.190.000 VNĐ', annually: '8.190.000 VNĐ' },
    desc: 'Gói khám sức khỏe tiêu chuẩn là chương trình khám sức khỏe cơ bản, được thiết kế dành cho các khách hàng từ 12 tuổi, có nhu cầu kiểm tra sức khỏe định kỳ. ',
    features: ['Khám Nội tổng quát', 'Công thức máu – Huyết học', 'Chức năng', 'Chẩn đoán hình ảnh    '],
    mostPopular: false
  },
  {
    name: 'Cơ bản',
    id: 'tier-freelancer',
    slug: '#',
    price: { once: '2.000.000 VNĐ', annually: '12.450.000 VNĐ' },
    desc: 'Gói khám sức khỏe cơ bản dành cho người trưởng thành, hiệu quả, tiết kiệm chi phí, mang đến cái nhìn tổng quát nhất về sức khỏe.',
    features: [ 'Gói tiết kiệm', 'Tầm soát tiểu đường', 'Điện giải đồ', 'Bộ xét nghiệm mỡ trong máu','Xét nghiệm xương khớp' ],
    mostPopular: false
  },
  {
    name: 'Cao cấp',
    id: 'tier-startup',
    slug: '#',
    price: { once: '3.880.000 VNĐ', annually: '22.150.000 VNĐ' },
    desc: 'Gói khám sức khỏe cao cấp dành cho người trưởng thành, giúp đánh giá, tầm soát và phát hiện sớm nhiều vấn đề sức khỏe quan trọng',
    features: [
      'Gói cơ bản',
      'Phân tích nước tiểu      ',
      'Tầm soát viêm gan      ',
      'Tầm soát ung thư      ',
      'Tầm soát chức năng tuyến giáp      '
    ],
    mostPopular: true
  },
  {
    name: 'Toàn diện',
    id: 'tier-enterprise',
    slug: '#',
    price: { once: '5.855.000 VNĐ', annually: '40.220.000 VNĐ' },
    desc: 'Gói khám sức khỏe toàn diện, bao gồm 57 hạng mục, xét nghiệm và chẩn đoán hình ảnh toàn diện, được thiết kế bởi các bác sĩ nhiều năm kinh nghiệm.',
    features: [
      'Không giới hạn hạng mục',
      'Ưu tiên',
      'Chăm sóc y tế tối đa'
    ],
    mostPopular: false
  }
])

export { frequencies, tiers }
