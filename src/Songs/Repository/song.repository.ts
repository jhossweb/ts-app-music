import { PrismaClient } from "@prisma/client";

export class SongRepository
{
    constructor (
        private readonly prisma = new PrismaClient
    ) {}

    async allSongRepository () {
        const song = await this.prisma.song.findMany()
        return song
    }

    async createSongRepository (name: string, url_song: string) {
        const savedSong = await this.prisma.song.create({
            data: {
                name,
                url_song
            }
        })

        return savedSong
    }
}