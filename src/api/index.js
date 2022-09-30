import axios from '@/utils/axios'

export const login = (data) => {
    return axios.get({
        url: '/login',
        data
    })
}