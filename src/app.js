import { Client} from "discord.js"
import { readdirSync } from "fs"
import 'dotenv/config'

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    presence: { status: "dnd", activities: [{ name: "Valorant", type:"PLAYING" }] }
})

readdirSync("./events").forEach(async file => {
    const event = await import(`./events/${file}`).then(m => m.default)
    event(client)
})

client.login(process.env.token)