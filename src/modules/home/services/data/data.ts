import { ref } from "vue";
import type { TBanner, TBlog, TCertificate, TCustomer, TCount, TGallery } from "../../models/type";

const banners = ref<Array<TBanner>>([
    {
        imageUrl: '/banner.jpg',
        title: 'Banner 1'
    },
    {
        imageUrl: '/banner2.jpg',
        title: 'Banner 2'
    }
])


const counts = ref<Array<TCount>>([
    {
        title: 'KINH NGHIỆM',
        duration: 500,
        number: 24,
        suffix: 'năm'
    },
    {
        title: 'CA PHỤC HỒI THÚ CƯNG',
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
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Quá trình niềng răng diễn ra như thế nào?',
        slug: '/blogs/detail/qua-trinh-nieng-rang-dien-ra-nhu-the-nao',
        desc: 'Quá trình niềng răng đạt chuẩn y khoa sẽ bắt đầu bằng việc khám ban đầu và kết thúc bằng kết quả là hàm răng đều và chắc khỏe. Tuy nhiên, thời gian niềng răng nhanh hay chậm còn phụ thuộc vào nhiều yếu tố khác nhau.',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
        slug: '/blogs/detail/cac-giai-doan-nieng-rang-theo-cac-moc-va-dieu-can-luu-y',
        desc: 'Niềng răng là một quá trình chỉnh nha khá dài dao động từ 18 – 24 tháng vì thế quá trình này đòi hỏi người niềng phải theo sát, kiên nhẫn và tuân theo hướng dẫn quy trình niềng răng của bác sĩ nha khoa.',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
        slug: '/blogs/detail/phan-biet-cac-chuc-danh-bac-si-chuyen-khoa-1-2',
        desc: 'Hiện nay, trong các tin tức sức khỏe có đề cập đến một chuyên gia y khoa nào đó, chúng ta rất thường bắt gặp các cụm từ như bác sĩ chuyên khoa 1, bác sĩ chuyên khoa 2, PGS, ThS, TS,… ',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
])

const certificates = ref<Array<TCertificate>>([
    {
        title: 'Hình ảnh trước và sau khi niềng răng',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Quá trình niềng răng diễn ra như thế nào?',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
])

const customers = ref<Array<TCustomer>>([
    {
        title: 'Hình ảnh trước và sau khi niềng răng',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Quá trình niềng răng diễn ra như thế nào?',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Hình ảnh trước và sau khi niềng răng',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Quá trình niềng răng diễn ra như thế nào?',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
])

const galleries = ref<Array<TGallery>>([
    {
        title: 'Hình ảnh trước và sau khi niềng răng',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Quá trình niềng răng diễn ra như thế nào?',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Hình ảnh trước và sau khi niềng răng',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Quá trình niềng răng diễn ra như thế nào?',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Các giai đoạn niềng răng theo các mốc và điều cần lưu ý',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
    {
        title: 'Phân biệt các chức danh bác sĩ chuyên khoa 1, 2,...',
        imageUrl: 'https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/2-Cat-and-Dogfriendships2.jpg'
    },
])



export { banners, counts, blogs, certificates, customers, galleries }