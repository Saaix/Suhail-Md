const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_42_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5janRpYjRCdStmRk1Bck5vSWVQeiszZHgvU0NJWkV3d0gycXU3dkJQQ2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllPdDF6NEVSUXJpSkZOVmNhejBJb3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGUyNDZjZTYtMDY0My00NzA0LTkyY2YtNDI0MDY3NjYxYjE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDIwNixcbiAgICAgIDIzMixcbiAgICAgIDI0LFxuICAgICAgMTkwLFxuICAgICAgNzksXG4gICAgICAxNDcsXG4gICAgICAxMTUsXG4gICAgICAxODksXG4gICAgICAxMTYsXG4gICAgICAxMDMsXG4gICAgICA1MyxcbiAgICAgIDIxNyxcbiAgICAgIDIyNSxcbiAgICAgIDE0MCxcbiAgICAgIDE2MixcbiAgICAgIDM2LFxuICAgICAgMzIsXG4gICAgICA1MCxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDE4NyxcbiAgICAgIDIyMCxcbiAgICAgIDgyLFxuICAgICAgODEsXG4gICAgICAyNTIsXG4gICAgICAxNjAsXG4gICAgICAxMTYsXG4gICAgICA0NCxcbiAgICAgIDMwLFxuICAgICAgNDgsXG4gICAgICAxODcsXG4gICAgICAxOTEsXG4gICAgICAxMCxcbiAgICAgIDE5NSxcbiAgICAgIDU3LFxuICAgICAgMTA5LFxuICAgICAgNDQsXG4gICAgICAxNTgsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQjlWR0YxUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzczODgxMzU1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NjE2MzkzODQwNjQ2Mzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01EQXVmMENFSzJJbWJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidWp6YWxpN1hqRGR5Rk9qL0l0c1VXbEZPS0UyNE82S28yVDFlcGp3Vzd6Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDNXZ3VmpwVDVjWDRFZGVPK0pyUzRwZzZvb25xMXRDYWlHMk83S2svY2ovK1RGWGpUdEFwcVNQaFcrQ3VSOUo1RUx2bkVnbnRjTHVtRGxOS1ErSm5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOdnkraTZxWlBoRlVvZUdZbG01TFpBTFFxNGJISlBjcjlrci9ZVmlYVXVielM2Nk8yRlZjOHhHRktuaTU2WDF2aWo5ZUZ3WElRaDZqNzZjZ0ZSV3FnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NzM4ODEzNTU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNzUzMTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLMzdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUszNy5qc29uIjogIntcImtleURhdGFcIjpcIkRUMDhHSFdJMDcrWU1JNkh1TkJFOVYxSVlUWUFLbUV0MkpRTjFMTWFQbzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzk5OTU3MDU2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzE5OTE3NTg1MTA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
