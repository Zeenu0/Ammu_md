const config = require('../config')
const {cmd , commands} = require('../command')
const os = require('os')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "🤵‍♂️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*Hi 🍄* ${pushname}

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Amaan Developer_
└────────────────

*I'm Alive Now 👸🏻*

┌────────────────
│ _*Ammu Official Youtub Chennal*_
│ https://youtube.com/shorts/t-1Z-8gDuk4?feature=share
└────────────────
┌────────────────
│ _*Public STATUS Group*_
│ https://chat.whatsapp.com/KYYjM6lDfmy49nzZH66oSQ 
└────────────────
┌────────────────
│ _*Public MOVIE Group*_
│ https://chat.whatsapp.com/Ibuc28fWQ4yEmlQvcg4ifV
└────────────────

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ amaaN ᴄᴏᴅᴇʀ  🧑🏻‍💻*
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/Rgj7Y6Y/20241002-093501.jpg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})


