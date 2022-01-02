export type Tweet = {
    id: number,
    createdAt: number,
    lastModified: number,

    playerId: number,
    message: string,
    imageUrl: string,

    replyOf: number,
    retweetOf: number,
    tags: string[]
}

export const getSampleTweet = (tweetId: number): Tweet => {
    return {
        id: 4,
        // message: "I've learned.",
        message: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        imageUrl: "https://cutewallpaper.org/21/anime-wallpapaer/30-PSP-Anime-Wallpapers-Download-at-WallpaperBro.jpg",
        // imageUrl: "",
        playerId: 2,
        createdAt: 832798,
        lastModified: 732987,
        replyOf: 4,
        retweetOf: 0,
        tags: [
            "anime",
            "japan",
            // "cool",
            // "playItCool",
            // "kobe24",
            // "mjPrime",
            "leKing",
            "winIt"
        ]
    }
}