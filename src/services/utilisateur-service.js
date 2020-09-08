export class UserService {
    users = [];

    async addReservation(idUtilisateur, idVol) {
        const response = await fetch(`${BASE_URL}/reservations/add?idUtilisateur=${idUtilisateur}&idVol=${idVol}`)
            .then((response) => response.json());
        return response.data ;
    }
}
