<template>
    <section class="pb-10">
        <div class="relative w-full overflow-hidden bg-white">
            <div class="relative w-[830px] max-w-full pb-[45px] px-4 block mx-auto">
                <!-- <img class="w-full" src="assets/pets.a13ce774.jpg" alt="Thú cưng Pet Pro"> -->
                <div class="text-center pb-[25px]">
                    <h2 class="text-[48px] text-cerulean-400 leading-[55px] md:leading-[72px] capitalize">Đặt lịch hẹn
                    </h2>
                    <HeartIcon class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />
                </div>
                <form id="myForm" action="https://petpro.com.vn/dat-lich-hen/xac-nhan" method="post"
                    enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="RnHXVXpMkB58vhMBa0yxDPbzjSH7HkGtuYkBdk2j">
                    <div id="toFrom" class="grid grid-cols-1 sm:grid-cols-2 gap-[15px] mb-[15px]">
                        <select required id="department" name="department"
                            class="w-full h-[44px] outline-none border-[1.5px] border-solid pl-[8px] pr-[12px] py-[10px] border-gray-130 rounded-[4px] placeholder:text-gray-600 bg-white">
                            <option value="null">Chọn chuyên khoa</option>
                            <option value="Khoa Nhiễm">Khoa Nhiễm</option>
                            <option value="Khoa Nội">Khoa Nội</option>
                            <option value="Khoa Ngoại">Khoa Ngoại</option>
                            <option value="Tiêm Phòng">Tiêm Phòng</option>
                            <option value="X-Quang">X-Quang</option>
                            <option value="Xét Nghiệm">Xét Nghiệm</option>
                            <option value="Siêu Âm">Siêu Âm</option>
                            <option value="Chẩn Đoán Cận Lâm Sàng">Chẩn Đoán Cận Lâm Sàng</option>
                            <option value="Khám Bệnh Tại Nhà">Khám Bệnh Tại Nhà</option>
                            <option value="Chăm Sóc Răng Miệng">Chăm Sóc Răng Miệng</option>
                            <option value="Bảo Hiểm">Bảo Hiểm</option>
                            <option value="Xuất Cảnh">Xuất Cảnh</option>
                            <option value="Dịch Vụ Lưu Chuồng">Dịch Vụ Lưu Chuồng</option>
                            <option value="Grooming">Grooming</option>
                            <option value="Thuốc Kê Toa">Thuốc Kê Toa</option>
                            <option value="Đào Tạo">Đào Tạo</option>
                            <option value="Cấp Cứu 24/7">Cấp Cứu 24/7</option>
                        </select>

                        <select required id="pet" name="pet"
                            class="w-full h-[44px] outline-none border-[1.5px] border-solid pl-[8px] pr-[12px] py-[10px] border-gray-130 rounded-[4px] placeholder:text-gray-600 bg-white">
                            <option value="null">Chọn thú nuôi</option>
                            <option value="Chó">Chó</option>
                            <option value="Mèo">Mèo</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] pb-[17px]">
                        <input
                            class="w-full outline-none h-[44px] border-[1.5px] px-[12px] py-[10px] border-gray-130 rounded-[4px]  placeholder:text-gray-600"
                            placeholder="Tên" type="text" id="name" name="name"
                            pattern="[A-z\s_áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ]{2,30}">
                        <input
                            class="w-full outline-none h-[44px] border-[1.5px] px-[12px] py-[10px] border-gray-130 rounded-[4px]  placeholder:text-gray-600"
                            placeholder="Email" type="email" id="email" name="email"
                            pattern="[A-Za-z0-9._%+-]+@[a-z]+\.[a-z]{3}">
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] pb-[17px]">
                        <input
                            class="w-full outline-none h-[44px] border-[1.5px] px-[12px] py-[10px] border-gray-130 rounded-[4px]  placeholder:text-gray-600"
                            placeholder="Số Điện Thoại" type="tel" id="phone" name="phone" pattern="[0-9]{9,13}">
                        <input
                            class="w-full outline-none h-[44px] border-[1.5px] px-[12px] py-[10px] border-gray-130 rounded-[4px]  placeholder:text-gray-600 required:invalid:text-gray-220"
                            type="date" id="date" name="date">
                    </div>
                    <div class="grid grid-cols-1 pb-[17px]">
                        <select required id="location" name="location"
                            class="w-full h-[44px] outline-none border-[1.5px] border-solid pl-[8px] pr-[12px] py-[10px] border-gray-130 rounded-[4px] placeholder:text-gray-600 bg-white">
                            <option value="null">Chọn nơi khám</option>
                            <option value="Cơ sở 1 - 550 Lũy Bán Bích, P.Hòa Thạnh Q.Tân Phú, TP.HCM">550 Lũy Bán Bích,
                                P.Hòa Thạnh Q.Tân Phú, TP.HCM</option>
                            <option value="Cơ sở 2 - 387-389 Cộng Hòa, P. 13, Q. Tân Bình, TP. HCM">387-389 Cộng Hòa, P.
                                13,
                                Q. Tân Bình, TP. HCM</option>
                            <option value="Cơ sở 3 - 111 Trường Chinh, P. 12, Q. Tân Bình, TP. HCM">111 Trường Chinh, P.
                                12,
                                Q. Tân Bình, TP. HCM</option>
                            <option value="Cơ sở 4 - 155 Nguyễn Thị Tú, P.Bình Hưng Hòa B, Q.Bình Tân, TP.HCM">155
                                Nguyễn Thị Tú, P.Bình Hưng Hòa B, Q.Bình Tân, TP.HCM</option>
                            <option value="Cơ sở 5 - 277 Kinh Dương Vương, P.An Lạc, Q.Bình Tân, TP.HCM">277 Kinh Dương
                                Vương, P.An Lạc, Q.Bình Tân, TP.HCM
                            </option>
                            <option value="Cơ sở 6 - 383 Đường Nguyễn An Ninh, Khu Phố 6, Phường 9, TP. Vũng Tàu, Bà Rịa – Vũng
            Tàu">383 Đường Nguyễn An Ninh, Khu Phố 6, Phường 9, TP. Vũng Tàu, Bà Rịa – Vũng
                                Tàu</option>
                            <option value="Cơ sở 7 - 145 Trần Quý, Phường 4, Quận 11, TP. HCM`">145 Trần Quý, Phường 4,
                                Quận
                                11, TP. HCM</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 pb-[17px]">
                        <textarea
                            class="w-full outline-none h-[100px] px-[12px] py-[10px] border-[1.5px] border-gray-130 rounded-[4px] placeholder:text-gray-600"
                            placeholder="Nhập nội dung" id="text" name="text"></textarea>
                    </div>
                    <div class="flex justify-end w-full pt-2">
                        <button
                            class="w-full sm:w-[240px] outline-none h-[45px] text-center border-cerulean-600 uppercase border-[2px] text-cerulean-600 rounded-full text-lg bg-transparent"
                            id="btnSend" type="button" onclick="showThongBao()">GỬI
                            YÊU CẦU</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid';


</script>

<style scoped></style>