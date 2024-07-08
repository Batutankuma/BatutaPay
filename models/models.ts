type UserModel = {
    id: string,
    fullname: string,
    avatar: string,
    email: string,
    password: string,
    solde: number
}

export type Transfert = {
    id: string,
    expediteur: UserModel,
    destinateur: UserModel,
    montant: number,
    data: string
}



const fakeUsers: UserModel[] = [
    {
        id: "1",
        fullname: "Alice Dupont",
        avatar: "https://example.com/avatar1.jpg",
        email: "alice.dupont@example.com",
        password: "password123",
        solde: 5000
    },
    {
        id: "2",
        fullname: "Bob Martin",
        avatar: "https://example.com/avatar2.jpg",
        email: "bob.martin@example.com",
        password: "password456",
        solde: 3000
    },
    {
        id: "3",
        fullname: "Charlie Durand",
        avatar: "https://example.com/avatar3.jpg",
        email: "charlie.durand@example.com",
        password: "password789",
        solde: 10000
    },
    {
        id: "4",
        fullname: "Diana Petit",
        avatar: "https://example.com/avatar4.jpg",
        email: "diana.petit@example.com",
        password: "password101",
        solde: 2000
    }
];

const fakeTransferts: Transfert[] = [
    {
        id: "t1",
        expediteur: fakeUsers[0],
        destinateur: fakeUsers[1],
        montant: 150,
        data: "2024-07-01"
    },
    {
        id: "t2",
        expediteur: fakeUsers[1],
        destinateur: fakeUsers[2],
        montant: 300,
        data: "2024-07-02"
    },
    {
        id: "t3",
        expediteur: fakeUsers[2],
        destinateur: fakeUsers[3],
        montant: 250,
        data: "2024-07-03"
    },
    {
        id: "t4",
        expediteur: fakeUsers[3],
        destinateur: fakeUsers[0],
        montant: 500,
        data: "2024-07-04"
    }
];

export { fakeUsers, fakeTransferts };
