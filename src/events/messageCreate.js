import { MessageEmbed } from "discord.js"

export default client => {

    client.on("messageCreate", message => {
        if (message.content == "Bilgi") {

            const response = new MessageEmbed()
                .setAuthor({ name: "ᴬᴳ戀•ᴀssᴀsɪɴ•戀", iconURL: client.user.displayAvatarURL() })
                .setDescription("ᴬᴳ戀•ᴀssᴀsɪɴ•戀, Sunucumuzun Üstün Özelliklere Sahip Olması İçin Oluşturulmuş Bir Moderasyon Botudur.(Valorant Oynamayı Çok Sever!)")
                .setColor("#00b3ff")
                .setFooter({ text: "ᴬᴳ戀•ᴀssᴀsɪɴ•戀 Hizmetinizde", iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
                .setThumbnail("https://cdn.discordapp.com/attachments/987655131204030544/990293484835602483/SPOILER_unnamed.jpg")
                .addField("Developer", "Kaan Akgül")
                .addField("Ping", "20MS")
                .addField("Ram", "%76")
            message.channel.send({content: "**ᴬᴳ戀•ᴀssᴀsɪɴ•戀**", embeds: [response] })
        }
        if (message.content == "Merhaba") {
            message.reply("Merhaba Bizimle Valorant Oynamak İstersen Nicklerimiz:= CRMİKA#TR1 Mon CrozZyy # Croz")
        }
    })

}