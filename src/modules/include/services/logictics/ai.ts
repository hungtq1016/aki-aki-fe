import { ref, type Ref } from 'vue'
import type { TChat } from '../../models/type';

export const content = ref('')
export const res = ref('✅ The answer will be displayed here.')
export const isLoading: Ref<boolean> = ref(false)
export const isOpen: Ref<boolean> = ref(false)
export const messages: Ref<TChat[]> = ref([])
export const prompt: Ref<string> = ref("Tôi muốn bạn đóng vai một bác sĩ ảo. Tôi sẽ mô tả các triệu chứng của tôi và bạn sẽ đưa ra kế hoạch chẩn đoán và điều trị. Bạn chỉ nên trả lời về chẩn đoán và kế hoạch điều trị của mình, không có gì khác. Đừng viết lời giải thích. Yêu cầu đầu tiên của tôi là")

export async function createCompletionsChat() {
  try {
    isLoading.value = true

    const userMessages = [{ role: 'user', content: prompt.value + content.value }]
    messages.value.push({ isBot: false, message: content.value })
    const requestData = JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: userMessages,
      stream: true,
    })

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_CHAT_GPT_KEY}`,
      },
      body: requestData,
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', fetchOptions)
    const reader: any = response.body?.getReader()
    res.value = ''

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunkStr = new TextDecoder('utf-8').decode(value)
      const lines = chunkStr
        .split('\n')
        .filter((line) => line !== '' && line.length > 0)
        .map((line) => line.replace(/^data: /, '').trim())
        .filter((line) => line !== '[DONE]')
        .map((line) => JSON.parse(line))
      for (const line of lines) {
        console.log(line)
        const {
          choices: [
            {
              delta: { content },
            },
          ],
        } = line
        if (content) {
          res.value += content
        }
      }
    }

  } catch (error: any) {
    console.error(error)
    res.value = error.response.data.error.message
  } finally {
    isLoading.value = false
    messages.value.push({ isBot: true, message: res.value })
    prompt.value = ""
    content.value = ""
  }
}

export const submitChat = () => {
  createCompletionsChat()
}