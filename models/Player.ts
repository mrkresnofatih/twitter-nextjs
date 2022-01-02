export type Player = {
    id: number,
    userName: string,
    fullName: string,
    email: string,
    imageUrl: string
}

export const getSamplePlayer = (playerId: number): Player => {
    return {
        userName: "legionOne",
        imageUrl: "https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg",
        email: "legionOne@google.co.jp",
        id: 1,
        fullName: "Kresno Fatih Imani"
    }
}