
function TalkHero(phrase){
    this.phrase=phrase;
    this.speak=function(){
        return this.phrase;
    }
}

function showTalkHero(newTalk){
   console.log(newTalk.speak());
}

var geraldTalk=new TalkHero("Зараза!");
var ciriTalk=new TalkHero("Это сложнее, чем я думала...");

showTalkHero(geraldTalk);
showTalkHero(ciriTalk);

class ManaHero{

    constructor(nameMana){
        this.mana=0;
        this.nameMana=nameMana;
        this.time=0;
    }

    action(mana,time){
        this.mana=mana;
        this.time=time;
        alert(`Персонаж выпил эликсир ${this.nameMana} в количестве: ${this.mana} - персонаж получил эффект на ${this.time} cек.`);
    }
    empty(){
        this.nameMana=0;
        this.time=0;
        alert(`Действие эликсира ${this.nameMana} закончилось`);
    }  
} 
class ManaName extends ManaHero{
    useMana(){
        alert(`${this.nameMana} добавляет малую дозу токсичности`)
    }
}
let manaName = new ManaName("Ласточка");
manaName.action(1, 30);
manaName.useMana();


