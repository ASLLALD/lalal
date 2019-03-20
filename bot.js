const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





var adminprefix = '+-'
let emojiss = require("node-emoji");//npm i node-emoji
client.on("message", msg=>{
  var ourserver = `Not_Bot Support` ;
if(msg.content.startsWith(`${adminprefix}`)){
if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("you don't have permission").then(s => {s.delete(1600);})
msg.reply("[#] الرجاء منشن الروم المراد به التفعيل, بعلامة").then(msgs=>{
  const filter = response => response.author.id === msg.author.id;
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
  .then( collected =>{
    msg.delete();
    let idC = msg.guild.channels.find(c=>c.id == collected.first().mentions.channels.first().id)
    if(!idC) return msgs.edit("الروم غير موجود في السيرفر او اسمه غلط");
     idC = idC.id;
     msgs.edit(`[قم بأدخل ايموجي الآن, [تنبيه الرجاء ادخال ايموجي من الدسكورد `)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
if(!emojiss.hasEmoji(collected.first().mentions._content)) return msgs.edit("الرجاء ادخل ايموجي");
newemoji = collected.first().mentions._content;
msg.delete();
msgs.edit(`[@] الرجاء منشن الرتبة , بعلامة`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
let roleW = collected.first().mentions.roles.first()
if(!roleW) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`منشن الرتبة وليس كتابتها`);
  msg.reply(embed).then( z => z.delete(3000)); return
};
let role = msg.guild.roles.find(`name`, roleW.name);
if(!role) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`[\`${roleW.name}\` ] : هذي الرتبة ليست موجوده بالسيرفر او اسمها غلط`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
roleNew = role;
msgs.edit(`الرجاء ادخل النص الآن`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
stringNew = collected.first().mentions._content;
let channel = msg.guild.channels.get(idC);
if(!channel) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`[\`${idC}\`] : هذا الروم غير موجود بالسيرفر`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
channel.bulkDelete(100)
channel.send(`[@everyone |-| @here]
 
${stringNew}
`).then( msgA =>{
msgA.react(newemoji).then(()=>{
  const Ac = (reaction, user) => reaction.emoji.name === newemoji && !user.bot;
  const Acc = msgA.createReactionCollector(Ac, {time: 120000});
  Acc.on("collect", r=>{
  let member = msg.guild.members.get(r.users.last().id);
  if(!member) return;
  r.remove(member.user);
if(member.roles.find(r=>r.name == roleNew.name)) return;
    member.addRole(roleNew);
             client.channels.get("557243409081958421").send(`:white_check_mark:  |-| [${member.user}] تم تفعيل العضو بنجاح`);
             
   
})})})
}).catch(e => {console.log(e.message)});  
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
})
///
}});













client.login(process.env.BOT_TOKEN);
