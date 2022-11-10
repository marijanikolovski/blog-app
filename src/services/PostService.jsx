import React from 'react'
import { axiosInstance } from './AxiosService'

class PostService {
    async getAll() {
        try {
            const { data } = await axiosInstance.get('/posts');
            return data
        } catch (error) {
            console.log(error);
        }
        return [];
    }
}

export default new PostService();
