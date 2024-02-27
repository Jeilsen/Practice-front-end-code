const lgs = document.querySelectorAll('.names .legendnames li')
let legends = [
  {mingzi:'动力小子<br>Octane', pic:'./png/octane.png',saying:'“Non terrae plus ultra！（已达极致）”'},
  {mingzi:'探路者<br>Pathfinder', pic:'./png/pathfinder.png',saying:'“输了可不好玩，所以我从来不会输”'},
  {mingzi:'地平线<br>Horizon', pic:'./png/horizon.png',saying:'“失败就意味着你努力过了，不是吗？亲爱的”'},
  {mingzi:'瓦尔基里<br>Valkyrie', pic:'./png/valkyrie.png',saying:'“没人在意谁更优秀。大家只会在意谁最优秀”'},
  {mingzi:'恶灵<br>Wraith', pic:'./png/wraith.png',saying:'“我知晓所有的道路，它们都通往同一个地方”'},
  {mingzi:'亡灵<br>Revenant', pic:'./png/revenant.png',saying:'“记忆是个糟糕的东西，别担心，我会是你记住的最后一样东西”'},

  {mingzi:'班加罗尔<br>Bangalore', pic:'./png/bangalore.png',saying:'“女士们，自动瞄准根本就是天方夜谭”'},
  {mingzi:'暴雷<br>Fuse', pic:'./png/fuse.png',saying:'"给他们来一份集束炸弹😡发射电弧星😡碎片手雷投出😡丢出铝热剂😡广域轰炸就要来了！天就要塌下来了！😡"'},
  {mingzi:'艾许<br>Ash', pic:'./png/ash.png',saying:'“思维敏捷，足智多谋，冷酷无情，你必须具备这一切，甚至还远远不够”'},
  {mingzi:'疯玛吉<br>Mad Maggie', pic:'./png/madmaggie.png',saying:'“真是风景如画啊！现在让我们把它毁灭吧！”'},
  {mingzi:'弹道<br>Ballistic', pic:'./png/ballistic.png',saying:'“那些漂洋过海的人，他们改变的不是他们的天空，而是他们的灵魂！”'},

  {mingzi:'罗芭<br>Loba', pic:'./png/loba.png',saying:'“你认为自己很强大?那就试试穿上六英寸的高跟鞋来战斗吧”'},
  {mingzi:'命脉<br>Lifeline', pic:'./png/lifeline.png',saying:'“让开!阿杰切来了”'},
  {mingzi:'纽卡斯尔<br>Newcastle', pic:'./png/newcastle.png',saying:'“只要呆在我的身边，你就会平安无事”'},
  {mingzi:'导线管<br>Conduit', pic:'./png/conduit.png',saying:'“要么闪耀光芒，要么逐渐消失。随你”'},
  {mingzi:'幻象<br>Mirage', pic:'./png/mirage.png',saying:'“我能在这里可不是靠自己，是靠打败了很多人”'},
  {mingzi:'直布罗陀<br>Gibraltar', pic:'./png/gibraltar.png',saying:'“嘿，来试试撼动我，会很好玩的。哈哈哈哈!”'},

  {mingzi:'催化<br>Catalyst', pic:'./png/catalyst.png',saying:'“这不是我第一次用尘土和梦想制造东西了”'},
  {mingzi:'侵蚀<br>Caustic', pic:'./png/caustic.png',saying:'“我不享受功名，我享受杀戮”'},
  {mingzi:'沃特森<br>wattson', pic:'./png/wattson.png',saying:'“爸爸会为我感到骄傲的”'},
  {mingzi:'兰伯特<br>Rampart', pic:'./png/rampart.png',saying:'“我不认为自己是最好的......不过你们都是最差的。真想不到”'},

  {mingzi:'寻血猎犬<br>Bloodhound', pic:'./png/bloodhound.png',saying:'“众神之父赐予我视野”'},
  {mingzi:'密客<br>Crypto', pic:'./png/crypto.png',saying:'“我不是棋子。我是来搅局的”'},
  {mingzi:'希尔<br>Seer', pic:'./png/seer.png',saying:'“成为你们所见到的最后光景是我的荣幸,传奇们”'},
  {mingzi:'万蒂奇<br>Vantage', pic:'./png/vantage.png',saying:'“猎物与猎人的根本区别在于谁先发现了对方”'},
  
]
let maps = [
  {pic:'./png/canyon.png'},
  {pic:'./png/world.png'},
  {pic:'./png/alps.png'},
  {pic:'./png/point.png'},
  {pic:'./png/moon.png'},
  
]
for(let i = 0; i < lgs.length; i ++) {
  const thename = document.querySelector('.legends .thename')
  const pic = document.querySelector('.legends .thepic span img')
  const saying = document.querySelector('.legends .saying')
  lgs[i].addEventListener('click', function(){
    document.querySelector('.active').classList.remove('active')
    thename.innerHTML = legends[i].mingzi
    pic.src = legends[i].pic
    saying.innerHTML = legends[i].saying
    this.classList.add('active')
  })
}
const mps = document.querySelectorAll('.body .map .mapname ul li')
for(let i = 0; i < mps.length; i ++) {
  const mappic = document.querySelector('.map .mappic img')
  mps[i].addEventListener('mouseenter', function(){
    document.querySelector('.activemap').classList.remove('activemap')
    mappic.src = maps[i].pic
    this.classList.add('activemap')
  })
}