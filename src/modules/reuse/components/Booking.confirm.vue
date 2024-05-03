<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <div class="modal" id="modal_show" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content" style="margin-top: 20rem;">
                            <div class="modal-header">
                                <b class="modal-title" style="font-size: 45px">Thông báo</b>
                            </div>
                            <div class="modal-body">
                                <input id="notification" type="text" value="abc"
                                    style="border: 0px solid black; background-color:white; width:100%;"
                                    :disabled="true">
                            </div>
                            <div class="modal-footer">
                                <button type="button" style="border-radius: 5px; background-color: #008CDD"
                                    class="btn btn-secondary" data-dismiss="modal" onclick="Close()">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
    <div id="modalConfirmBooking" class="modal" role="dialog" aria-hidden="true" tabindex="-1">
        <div class="modal-content">
            <div class="modal-body">
                <div class="text-center">
                    <!-- <img class="w-[88px] h-[88px] block mx-auto" src="assets/booking.d552112e.svg" alt=""> -->
                    <h3 class="mt-5 text-xl font-medium leading-6 text-blue-200">Xác Nhận Đặt Lịch Hẹn</h3>
                    <p class="mt-4 text-sm leading-[22px]">
                        Bạn đã gửi yêu cầu thành công!
                        <br>Chúng tôi sẽ liên hệ với bạn để xác nhận thông tin trong thời gian sớm nhất
                    </p>
                    <p class="inline-block mt-3 text-sm leading-5 text-blue-200">Hotline: 1800 5999 41</p>
                    <p class="mt-5">
                        <a class="inline-block py-3 text-lg leading-none text-white uppercase bg-blue-200 rounded-full px-18"
                            aria-close href="javascript:void(0)" onclick="submit()">ok</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>