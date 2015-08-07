
function p90() {
document.getElementById("name").innerHTML="P90X/P90X2"
document.getElementById("txtwrp").innerHTML= "My journey began with popping in the first disk to a fitness program that changed my life; P90X. I had a hard time going to a gym in the past because of the intimidating environment most gyms had. I was laughed at, questioned why I was there and that I was wasting my time. Needless to say, I didn't want to work out at that gym anymore! So I started P90X at home. Fast forward about 9 months, I completed 3 rounds of P90X and I got hooked on working out at home and enjoyed doing the program! I've continued to do home workouts for 6 year now with a few sessions at local gyms, but about 90% of my workouts at home. I currently follow the P90X2 program, which builds off of the original P90X just with more athletic training!";}
function wV(){
document.getElementById("name").innerHTML="Weighted Vest"
document.getElementById("txtwrp").innerHTML= "AGAIN, PLEASE KNOW I'M NOT A TRAINER AND DO NOT RECOMMENDING THIS STYLE OF TRAINING FOR JUST ANYONE IN THIS SECTION!!! I say this, because after doing P90X for about 2 years, i decided i wanted to increase the intensity with weighted vest and wrist weights. The added weight from these items will add extra stress to the body and if you don't train with proper form you may end up hurting yourself. I worked my way up from an 8lb weight vest and gradually over time increased the weight as my body became accustomed to the weight. I currently train with 40lbs on my weighted vest and also wear two 2.5lb wrist weights. I want to say i don't believe this is a necessary training method to achieve your goals. I personally enjoy this style because I've done it for so long and enjoy the challenge!";}
function phil(){
document.getElementById("name").innerHTML="Philosophy"
document.getElementById("txtwrp").innerHTML= "The whole point to any workout program should come down to this, why are you doing it? If you're training JUST to lose weight and to look good, while it's great to be in shape and we all want to look our best, this should be a very small reason to train. Instead, workout because you are becoming healthier. Don't workout to impress others, instead impress yourself. Push yourself to do the things you thought you'd never be able to do, try to see what you are truly capable of! Let's face it, working out isn't easy, it's tough and some days will be harder than others. If you are gonna do something this difficult for others instead of yourself, it'll become far more challenging. The best part is if you focus on making yourself better, for yourself, the other stuff (The Looks) will come naturally!";}
function que(){
document.getElementById("name").innerHTML="Questions?"
document.getElementById("txtwrp").innerHTML= "As i stated before, i'm not a personal trainer. I'm just a guy who figured it out through trial and error. I made mistakes and i learned from them. I'd love to help others skip the mistakes i made in my training and help anyone reach their goals! Along with a good exercise program, your diet is key to getting the best results possible. So check out the Diet Tab for more info on how proper diet will lead to awesome results!!! I will post in the Calendar tab what workouts i'll be doing so you may follow long. If you'd like more information on anything training related or just have specific questions please click the email tab at the top right and i'll answer you as soon as i can!";}

var val = false;
function menu(){
if (val === false) {
 document.querySelector("#Home").style.display = "block";   
        val = true
}else{
close();
}

}
    function close(){
    document.querySelector("#Home").style.display = "none";
    val = false;
    }
