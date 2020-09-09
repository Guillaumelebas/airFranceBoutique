const BASE_URL = 'https://intech-airfrance-api.herokuapp.com';

export class VolService {
    getVols() {
        return fetch(`${BASE_URL}/vols`)
            .then((response) => response.json())
            .then((response) => response.data);
    }
}
