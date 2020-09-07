const BASE_URL = 'http://localhost:3306';

export class VolService {
    async getVols() {
        const response = await fetch(`${BASE_URL}/vols`)
            .then((response) => response.json());

        return response;
    }
}
