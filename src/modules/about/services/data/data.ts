import { ref } from 'vue'
import type { TAboutThumb, TCertificate, TEquipment, TQuote } from '../../models/type'
import {
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  HomeIcon,
  UserIcon
} from '@heroicons/vue/24/outline'

const abouts = ref<Array<TAboutThumb>>([
  {
    title: 'Giới Thiệu Phòng Khám',
    slug: '/about/introduction',
    imageUrl:
      'https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75',
    desc: 'Hệ thống AKIAKI được thành lập từ năm 1998 với 6 bệnh viện trải dài qua 4 quận Tân Phú, Tân Bình, Bình Tân, Quận 11 và TP. Vũng Tàu.',
    icon: HomeIcon
  },
  {
    title: 'Trang Thiết Bị Hiện Đại',
    slug: '/about/equipment',
    imageUrl:
      'https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75',
    desc: 'AKIAKI có đầy đủ các trang thiết bị tân tiến và hiện đại bậc nhất tại Việt Nam. Được cấp các chứng chỉ chuyên biệt.',
    icon: ComputerDesktopIcon
  },
  {
    title: 'Đội Ngũ Bác Sĩ',
    slug: '/about/team',
    imageUrl:
      'https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75',
    desc: 'Với đội ngũ bác sĩ tận tâm có chuyên môn cao. Được những giáo sư, bác sĩ nổi tiếng trên thế giới đào tạo',
    icon: UserIcon
  },
  {
    title: 'Khách Hàng Nói Về AKIAKI',
    slug: '/about/customer',
    imageUrl:
      'https://cdn.hellobacsi.com/wp-content/uploads/2022/10/phong-kham-da-khoa.jpg?w=750&q=75',
    desc: 'AKIAKI luôn tập trung để chăm sóc bạn của bạn, dịch vụ chăm sóc rất tốt, trang thiết bị hiện đại.',
    icon: ChatBubbleLeftRightIcon
  }
])

const quotes = ref<Array<TQuote>>([
  {
    quote:
      'Các bác sĩ đều thân thiện, nhẹ nhàng với các bé. Đặc biệt, luôn lắng nghe và giải thích câu hỏi của bệnh nhân',
    author: 'Chị Nguyễn Linh '
  },
  {
    quote:
      'Chưa một lần nào đến đây mà bị thất vọng cả. Cảm ơn đội ngũ y bác sĩ của AKIAKI rất nhiều vì đã chăm sóc cho gia đình tôi',
    author: 'Chị Lan Anh'
  },
  {
    quote:
      'Bé mình bị sâu răng, sau 5 ngày điều trị bé ăn uống được và khoẻ lại rất nhiều! Cảm ơn AKIAKI.',
    author: 'Anh Tô Lâm'
  },
  {
    quote:
      'Phòng khám sạch sẽ, trang thiết bị hiện đại, bác sĩ tâm huyết. Bản thân mình răng bị hư nặng mà giờ hết rồi nè. Sẽ quay lại khám chữa và kiểm tra sức khoẻ',
    author: 'Anh Văn Sang'
  }
])

const certificates = ref<Array<TCertificate>>([
  {
    number: 25,
    label: 'Năm Kinh Nghiệm'
  },
  {
    number: 300000,
    label: 'Ca Hồi Phục '
  },
  {
    number: 100,
    label: 'Nhân Viên'
  },
  {
    number: 4,
    label: 'Chi Nhánh'
  }
])

const equipments = ref<Array<TEquipment>>([
  {
    title: 'Máy Siêu Âm Hiện Đại',
    desc: 'AKIAKI trang bị hệ thống máy siêu âm đa dạng: máy siêu âm Doppler màu chuyên Tim mạch, máy siêu âm Tổng quát, máy siêu âm 2D và 4D chuyên Thai sản mang đến các hình ảnh chính xác, nâng cao hiệu quả chẩn đoán bệnh.',
    imageUrl: 'https://www.mediplus.vn/wp-content/uploads/2021/06/may-sieu-am-ge-logiq-e9.jpg'
  },
  {
    title: 'Máy X-Quang',
    desc: 'Phòng khám AKIAKI có dòng máy X-Quang Kỹ Thuật Số hiện đại nhất, cho ra các kết quả rõ nét, nhanh, chính xác, giúp bác sĩ dễ dàng chẩn đoán tình trạng bệnh của bạn trong 15-30 phút.',
    imageUrl: 'https://thietbiyte130.vn/wp-content/uploads/2018/07/He-thong-X_Quang-KTS.jpg'
  },
  {
    title: 'Máy Xét Nghiệm',
    desc: 'Tại Phòng khám AKIAKI có các thiết bị máy móc để Xét nhiệm Sinh Lý Máu, Sinh Hóa Máu, Test nhanh, Soi máu tươi, Soi da được đầu tư hiện đại và được hiệu chỉnh hàng ngày nên luôn cho kết quả chính xác và nhanh nhất.',
    imageUrl: 'https://duchuymedical.com/upload/product/607646691472.jpg'
  }
])

export { abouts, quotes, certificates, equipments }
