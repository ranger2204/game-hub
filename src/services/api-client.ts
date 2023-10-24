import axios from "axios";

export default axios.create({
    baseURL: 'https://rawg.io/api/',
    params: {
        key: '082412e01e5241faa6f04ab23b793d95'
    }
})