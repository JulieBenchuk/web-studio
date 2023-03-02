import {axiosInstance} from "@/pages/api/apiConfig";
import {portfolioData} from "@/components/06_Projects/ourProjects/moc";

export const Api = {
    portfolioAPI(data: any) {//fix any
        // return axiosInstance.get<{}>('', data) //example for fetch data

        new Promise(resolve => {
            return resolve(portfolioData)
        }) //need remove after write BackEnd
    },
}