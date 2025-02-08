/* 
BACA INI SEBELUM RECODE !!!!

Script By : Khalid Al-Khawarizmi / khalid
Uploader by : MUHAMMAD SYIFARIZAL / rizal-dev

• Owner : 6285655548594 
• Contributor : 6283119115977
• Castomer Service : 6288213993436

NOTE : mau replod script jangan lupa credits !!!!!

TEAM :  < K.R > © 2022-2025
----------------------------------------------------------------------
Thanks To :                                
- Allah Swt          
- My Parents       
- rizal-dev        
- khalid
- Creator Bot Lainnya
- Pengguna Bot Yang Selalu Support
----------------------------------------------------------------------

*/

const fs = require('fs');
const chalk = require('chalk');

global.ytname = 'Tiktok: @camzym7'; // Nama YouTube Kamu
global.socialm = 'GitHub: GitZymzz'; // Nama GitHub Kamu
global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang'; // Lokasi Kamu

global.botName = '𝙇𝙪𝙣𝙤𝙭-𝘽𝙤𝙩𝙕'; // Nama Bot Kamu
global.ownerNumber = '6283853787611'; // Nomor Kamu
global.ownerName = '𝒁𝒚𝒎𝒛𝒛'; // Nama Kamu
global.website = 'www.tiktok.com/@camzym7'; // Web Kamu
global.wagc = 'https://chat.whatsapp.com/Jv5SIEQV3jNGpIvWy2lmSC'; // Web Kamu
global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.footer = '© 𝒁𝒚𝒎𝒛𝒛 || 𝙇𝙪𝙣𝙤𝙭';
global.creator = '6283853787611@s.whatsapp.net'; // Nomor Creator
global.premium = ['6283853787611']; // User Premium
global.hituet = 0 // Hit Command
global.prefa = '.'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363300298271061@newsletter'; // ID Saluran Kamu
global.saluranName = 'SALURAN PAJANGAN 🗿'; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = ''; // Link Panel Kamu
global.cred = ''; // API PTLA Kamu
global.apiuser = ''; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.typereply = 'v2'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = true // Auto Welcome Msg
global.anticall = true // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true // Group Event Msg
global.notifRegister = true // Notif Register
global.onlyRegister = true // Hanya Pendaftar

global.payment = {
	dana: '6283853787611',
	gopay: '6283853787611',
	ovo: '-',
	qris: '-',
	shopeePay: '-',
	seabank: ''
};

global.limit = {
	free: 100, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: 'VIP' // Limit User VIP 👑
};

global.uang = {
	free: 0, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya, Kak! 🫢",
	botAdmin: "Mora harus jadi admin dulu biar bisa jalanin ini! 😭",
	done: "Done Kak! ✨",
	error: "Eh, ada yang salah nih... coba lagi ya, Kak! 😖",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	limit: "Yah, limit penggunaan Kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit, atau upgrade ke premium ✨",
	noCmd: "Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini, Kak! 👑",
	premium: "Fitur ini cuma buat pengguna premium, Kak! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌",
	success: "Yeay, berhasil! 🎉",
	wait: "Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗"
};

global.imageDonasi = 'https://files.catbox.moe/5td0tr.jpg'; // Url Image Donasi (dana, qris etc..)
global.imageUrl = 'https://files.catbox.moe/5td0tr.jpg'; // Url Image
global.imageBuffer = fs.readFileSync('./media/image.png'); // Buffer Image

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
