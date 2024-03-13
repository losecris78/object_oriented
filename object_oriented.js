function Bolo(flavor,size,shape) {
    this.flavor= flavor,
    this.size= size,
    this.shape= shape,
    this.isGood= function(){
        return (`This ${this.flavor} is good`);
    }
}
function ChocolateFilled(flavor,chocolateType){
    this.chocolateType = chocolateType;
    Bolo.call(this,flavor)
}
function CreamFilled(flavor,frosting){
    this.frosting = frosting;
    Bolo.call(this.flavor)
}
const aniversario = new ChocolateFilled('chocolate','big', 'round');

const choko = new Bolo('chocolate','big','square');

const Strawberry = new CreamFilled ('strawberry', 'small', 'triangle');

const Napoleon = new CreamFilled ('cream', 'medium', 'circular');



