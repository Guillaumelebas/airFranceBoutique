const BASE_URL = 'http://localhost:4000';

export class VolService {
    getVols() {
        return fetch(`${BASE_URL}/vols`)
            .then((response) => response.json())
            .then((response) => response.data);
    }
}
