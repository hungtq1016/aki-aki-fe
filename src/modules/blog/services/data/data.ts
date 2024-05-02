import { ref } from "vue";
import type { TBlog, TBlogAside } from "../../models/type";

const aside = ref<Array<TBlogAside>>([
    {
        title:"Tất cả bài viết",
        slug:"/blogs"
    },
    {
        title:"Kiến thức y tế",
        slug:"/blogs/healthcare"
    },
    {
        title:"Dịch vụ",
        slug:"/blogs/service"
    },
    {
        title:"Khuyến mãi",
        slug:"/blogs/sale"
    },
    {
        title:"Thông báo",
        slug:"/blogs/information"
    }
])

const data:TBlog = {
    "healthcare":[
        {
            title:"LẦM TƯỞNG KHI CHO THÚ CƯNG ĂN THỨC ĂN NÓNG",
            slug:"lam-tuong-khi-cho-thu-cung-an-thuc-an-nong",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/Hinh%20Blog/B%C3%A0i%20vi%E1%BA%BFt/Cover%20(1).png",
            desc:"Vì chúng ta thích những bữa ăn ấm áp thì không có nghĩa là thú cưng cũng như thế. Sự thật là với cấu trúc sinh học của chó mèo, các Boss rất dễ bị tổn thương đường tiêu hóa khi ăn thức ăn nóng!"
        },
        {
            title:"Tác dụng phụ của tiêm phòng vắc-xin ở chó mèo",
            slug:"tac-dung-phu-cua-tiem-phong-vacxin-o-cho-meo",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/Hinh%20Blog/vaccine%20ch%C3%B3%20m%C3%A8o/thumb-02-02.jpg",
            desc:"Tác dụng phụ của tiêm phòng ở chó mèo là điều hiển nhiên sẽ xảy ra. Bạn đừng quá lo lắng sau khi tiêm ngừa cho thú cưng sẽ gặp những biểu hiện lạ."
        },
        {
            title:"Các bước trước trong và sau khi tắm cho chó",
            slug:"cac-buoc-truoc-trong-va-sau-khi-tam-cho-cho",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/Hinh%20Blog/Tam%20ch%C3%B3/THUMB.jpg",
            desc:"Tắm cho chó nghe qua ai cũng nghĩ là việc đơn giản. Nhưng bạn có chắc việc tắm cho chó của bạn đúng cách không? Nếu kỹ năng người chủ tốt sẽ có thể giúp chó cưng thấy thoải mái, loại bỏ các mầm bệnh tiềm ẩn … nhưng nếu không sẽ còn gây hại cho chó của bạn nữa đấy. "
        },
        {
            title:"Hachiko - Tượng đài về lòng trung thành",
            slug:"hachiko--tuong-dai-ve-long-trung-thanh",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/hachiko-facts.jpg",
            desc:"Chắc hẳn các bạn đều biết đến chú chó Hachiko nổi tiếng đến từ Nhật Bản. Vậy hôm nay PETPRO sẽ kể lại chuyện đầy đủ của Hachiko nhé"
        }
    ],
    "service":[
        {
            title:"XÉT NGHIỆM NHANH, CHẨN ĐOÁN ĐÚNG VỚI CÔNG NGHỆ PCR TẠI PETPRO",
            slug:"xet-nghiem-nhanh-chan-doan-dung-voi-cong-nghe-pcr-tai-petpro",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/Hinh%20Blog/B%C3%A0i%20vi%E1%BA%BFt/31452768a2c6719828d7.jpg",
            desc:"Là bệnh viện thú y đầu tiên tại Việt Nam có chứng chỉ ISO, PETRO hiểu rõ tầm quan trọng của việc nâng cấp quy trình chẩn đoán."
        }
    ],
    "sale":[
        {
            title:"COMBO TIEM VACXIN TOAN DIEN CHI CON 790.000 VND",
            slug:"combo-tiem-vacxin-toan-dien-chi-con-790000-vnd",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/295798628_3289447681334166_6256429223842253994_n.jpg",
            desc:""
        },
        {
            title:"NGẬP TRÀN ƯU ĐÃI NHÂN DỊP KHAI TRƯƠNG TRỤ SỞ MỚI 550 LŨY BÁN BÍCH",
            slug:"ngap-tran-uu-dai-nhan-dip-khai-truong-tru-so-moi-550-luy-ban-bich",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/z3489437080012_1ba93a81fd5c5c521794ad670e859012.jpg",
            desc:""
        },
        {
            title:"TAM SAY THANG 07 - UU DAI BONG TAY",
            slug:"tam-say-thang-07-uu-dai-bong-tay",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/99k.jpg",
            desc:""
        },
        {
            title:"MUA 2 ĐƯỢC 4 - Sen tin được không ?????",
            slug:"mua-2-duoc-4--sen-tin-duoc-khong-",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/mua2duoc4.jpg",
            desc:""
        }
    ],
    "information":[
        {
            title:"ThS.BS Thai Thi My Hanh nhận bằng khen thưởng của Chi hội Thú y thú nhỏ Việt Nam",
            slug:"thsbs-thai-thi-my-hanh-nhan-bang-khen-thuong-cua-chi-hoi-thu-y-thu-nho-viet-nam",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/69521f3004c2c69c9fd3.jpg",
            desc:""
        },
        {
            title:"THÔNG BÁO TUYỂN DỤNG NHÂN SỰ NĂM 2022",
            slug:"thong-bao-tuyen-dung-nhan-su",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/z3499918271967_eceb81f29693f0dce935803b148b3d88.jpg",
            desc:""
        },
        {
            title:"TƯNG BỪNG KHAI TRƯƠNG TRỤ SỞ MỚI TẠI SỐ 550 LŨY BÁN BÍCH",
            slug:"tung-bung-khai-truong-tru-so-moi-tai-so-550-luy-ban-bich",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/1%20hanh%20luu/z3493835663827_e7cdcfa9c19a74a76095c4b6d9ec49b4.jpg",
            desc:""
        },
        {
            title:"Thông báo chuyển địa điểm chi nhánh Nguyễn Thị Tú",
            slug:"thong-bao-chuyen-dia-diem-chi-nhanh-nguyen-thi-tu",
            imageUrl:"https://admin.petpro.com.vn/images/uploaded/thu-y-petpro-nguyen-thi-tu.jpg",
            desc:""
        }
    ]
}

export {aside,data}