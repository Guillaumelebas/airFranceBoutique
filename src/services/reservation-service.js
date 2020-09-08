const BASE_URL = 'http://localhost:4000';

export class ReservationService {
    async getReservations(idUtilisateur) {
        const response = await fetch(`${BASE_URL}/reservations/${idUtilisateur}`)
            .then((response) => response.json());
        return response.data ;
    }
    async addReservation(idUtilisateur, idVol) {
        const response = await fetch(`${BASE_URL}/reservations/add?idUtilisateur=${idUtilisateur}&idVol=${idVol}`)
            .then((response) => response.json());
        return response.data ;
    }
}
