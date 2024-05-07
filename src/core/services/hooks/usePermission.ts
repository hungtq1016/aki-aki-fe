import { post } from "../helpers/request.helper"

export const hasPermission = async (payload: string) => {
    const data = await post<String[],boolean>("/api/roles/has-permission",payload)
    if (!data) {
        return false
    }
    return true
}