(() => {

let theSword = document.querySelector("#sword");
function logThisSword() {
		console.log(this.id);
}
theSword.addEventListener("click", logThisSword);


let theShield = document.querySelector("#shield");
function logThisShield() {
console.log(this.id);
}
theShield.addEventListener("click", logThisShield);


let theWand = document.querySelector("#wand");
function logThisWand() {
console.log(this.id);
}
theWand.addEventListener("click", logThisWand);


let theDaggers = document.querySelector("#daggers");
function logThisDaggers() {
console.log(this.id);
}
theDaggers.addEventListener("click", logThisDaggers);


let theSpells = document.querySelector("#spells");
function logThisSpells() {
console.log(this.id);
}
theSpells.addEventListener("click", logThisSpells);


let theBow = document.querySelector("#bow");
function logThisBow() {
console.log(this.id);
}
theBow.addEventListener("click", logThisBow);


let theSpellBow = document.querySelector("#spellbow");
function logThisSpellBow() {
console.log(this.id);
}
theSpellBow.addEventListener("click", logThisSpellBow);


let theStaff = document.querySelector("#staff");
function logThisStaff() {
console.log(this.id);
}
theStaff.addEventListener("click", logThisStaff);


let theHelmet = document.querySelector("#helmet");
function logThisHelmet() {
console.log(this.id);
}
theHelmet.addEventListener("click", logThisHelmet);

let theSpellSword = document.querySelector("#spellsword");
function logThisSpellSword() {
console.log(this.id);
}
theSpellSword.addEventListener("click", logThisSpellSword);

// document.querySelector('#test').addEventListener("click", fill);
// function fill() {
// document.getElementById("#test").classList.add("fill");
// }

document.querySelector('#shield').addEventListener("click", fill);
function fill() {
document.getElementById("shield").classList.add("fill");
}

document.querySelector('#sword').addEventListener("click", shfill);
function shfill() {
document.getElementById("sword").classList.add("fill");
}

document.querySelector('#wand').addEventListener("click", wfill);
function wfill() {
document.getElementById("wand").classList.add("fill");
}

document.querySelector('#daggers').addEventListener("click", dfill);
function dfill() {
document.getElementById("daggers").classList.add("fill");
}

document.querySelector('#spells').addEventListener("click", spellsfill);
function spellsfill() {
document.getElementById("spells").classList.add("fill");
}

document.querySelector('#bow').addEventListener("click", bfill);
function bfill() {
document.getElementById("bow").classList.add("fill");
}

document.querySelector('#spellbow').addEventListener("click", spfill);
function spfill() {
document.getElementById("spellbow").classList.add("fill");
}

document.querySelector('#staff').addEventListener("click", stfill);
function stfill() {
document.getElementById("staff").classList.add("fill");
}

document.querySelector('#helmet').addEventListener("click", hfill);
function hfill() {
document.getElementById("helmet").classList.add("fill");
}

document.querySelector('#spellsword').addEventListener("click", spellswordfill);
function spellswordfill() {
document.getElementById("spellsword").classList.add("fill");
}

})();