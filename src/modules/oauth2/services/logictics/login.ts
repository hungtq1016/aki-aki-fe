import { reactive } from "vue";
import type { TLoginRequest } from "../../models/type";
import type { Rules } from 'async-validator'
import { post } from "@/core/services/helpers/request.helper";
import type { TTokenResponse } from "@/core/models/type";
import { errorNotification, successNotification } from "@/core/services/helpers/alert.helper";
import { useAuthInfo } from '@/core/services/helpers/indexedDB.helper';
import { useRouter } from 'vue-router';
const router = useRouter()

const init_state = {
    email: '',
    password: '',
}

const state = reactive<TLoginRequest>(init_state)

const rules: Rules = {
  password: {
    type: 'string',
    min: 5,
    max: 20,
    required: true,
  },
  email: [
    {
      type: 'email',
      required: true,
    },
  ],
}

const submit = async () => {
  const {updateAuthAsync } = useAuthInfo()
  try {
      const data = await post<TLoginRequest,TTokenResponse>("/api/authenticate/login",state);
      if (data?.data) {

      const auth: TTokenResponse = data.data;

      const saveResult: boolean | undefined = await updateAuthAsync(auth);
      if (saveResult) {    
          successNotification(data.message)
          router.push({
            name: 'home',
  
          })
         
      }
      }
  
  } catch (error) {
      errorNotification(String(error))
  }
}

export { state, rules, submit }