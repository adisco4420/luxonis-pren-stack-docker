import axios from 'axios';
interface IPagination {
    page?: number;
    limit?: number;
}
class PropertiesService {

    private readonly BASEURL = 'http://localhost:4000';

    fetchAll = ({page, limit}: IPagination) => {
        const params = {page, limit}
        return axios.get(`${this.BASEURL}/properties`, {params})
    }
}
export default new PropertiesService;