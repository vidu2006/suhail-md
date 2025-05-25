const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="vidushanedhirisingha@gmail.com"
global.location="colombo"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Colombo";
global.github=process.env.GITHUB|| "https://github.com/vidu2006";
global.gurl  =process.env.GURL  || "wa.me/ 94789178809?text=Hi";
global.website=process.env.GURL || "wa.me/ 94789178809?text=Hi" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "××VIDU Md××" 


global.devs = "254703255099" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254703255099";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6)  || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_37_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWWWhUcFdVR1NZRVF6bFZNM2tEWERiWmRSN1YwUkx3Mk5uTFFZcXgrWVhzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwMzI1NTA5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjhBMUQ0MjkwQTZGQUMwRUQzREEyRDRBN0NEMkVBRkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ4MDc5NDM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzAzMjU1MDk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4N0UxRTlGNDREMzVDRDUyMzJCMEEzQTdGMEM3MUNDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDgwNzk0MzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkJUWmhoMGxUcU9jUG5IZE9Gc3RKQVwiLFxuICBcInBob25lSWRcIjogXCJlYjBhNmNlMi0wZmYyLTQ1MjAtOWRmMy0xNWQwOTNmMGQzNmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAyMDMsXG4gICAgICAyMDUsXG4gICAgICA3NCxcbiAgICAgIDI3LFxuICAgICAgMzcsXG4gICAgICA1MCxcbiAgICAgIDIzMCxcbiAgICAgIDcxLFxuICAgICAgOTcsXG4gICAgICAxNTksXG4gICAgICA5LFxuICAgICAgNTIsXG4gICAgICAxMzIsXG4gICAgICA5MSxcbiAgICAgIDEzMCxcbiAgICAgIDIzMSxcbiAgICAgIDgwLFxuICAgICAgNzcsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDEzMyxcbiAgICAgIDEwNCxcbiAgICAgIDU3LFxuICAgICAgMCxcbiAgICAgIDE4MSxcbiAgICAgIDI3LFxuICAgICAgNTcsXG4gICAgICAxMzAsXG4gICAgICAxNzQsXG4gICAgICAyNDgsXG4gICAgICAxLFxuICAgICAgMjEsXG4gICAgICAxNixcbiAgICAgIDk5LFxuICAgICAgMTA4LFxuICAgICAgMTA1LFxuICAgICAgMzYsXG4gICAgICAxODgsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01INDk3d0JFTUdteHNFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY1ZiK1REbHMrK1VuN1BIT2FoaUx5cU9PclhnQ3NyREo5WnMydUUwankxVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRQ1htdk1QMDFJb2Y4QlVOdUl3KytJUlJMYjN2ZmhTWFAyZy9DazVDOHcrZTZ5N3ZXSjF5SzlBUkp1Z3hZdE1IM0JUVUl3dmJYZWliNHVrN3NYdlZEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTWGJ2UHIzbStiZFZxeEY4d2F3QVpGZElLVkMzcEQxRStsdUhYWTkwYnMrcUVMUHpqSS9LUStlVU5ZQ0huYkhLNFVxOWJkUTdqbkpmWDNhbmpCTytEZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwMzI1NTA5OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVmlkdXNoYW5cIixcbiAgICBcImxpZFwiOiBcIjIzNjIwNjU3NTA1OTExMjozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAzMjU1MDk5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4MDc5NDMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWNlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJY2UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkb2RTT0dETmhGdlR2Sk5Ha0M1N0YyWGVkMDNhTEhjTVUrKzVpV3FqOUFrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5NjIyOTY5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ4MDc5NDM0NTM5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ VIDU²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • Beat world』*\n youtube.com/@beatworld2006"),
 
  author : process.env.PACK_AUTHER|| "★彡[🥇VIDU🥇]彡★",
  packname: process.env.PACK_NAME || "Sticker by VIDU",
  botname : process.env.BOT_NAME  || "××😎VIDU Md😎××",
  ownername:process.env.OWNER_NAME|| "★彡[××VIDUSHAN××]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "VIDU"  ).toUpperCase(),



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
