// // api 
// Get ⚡ All Levels
// https://openapi.programming-hero.com/api/levels/all
// Get ⚡ Words by Levels
// https:// openapi.programming-hero.com/api/level/{id}
// https://openapi.programming-hero.com/api/level/5
// Get ⚡ Words Detail
// https:// openapi.programming-hero.com/api/word/{id}
// https://openapi.programming-hero.com/api/word/5
// Get ⚡ All Words
// https://openapi.programming-hero.com/api/words/all



const loadLevel=()=>{
   fetch("https://openapi.programming-hero.com/api/levels/all")
   .then(res=> res.json())
   .then(jeson=> displayleson(jeson.data))
    
}
loadLevel()
const loadLevelWords=(id)=>{
    console.log(id);
    
}
const displayleson=(lesons)=>{
    const buttonContainer=document.getElementById('button__container')
    buttonContainer.innerHTML='';
    for (const element of lesons) {
        const btnDiv=document.createElement('div');
        btnDiv.innerHTML=`
            <button onclick="loadLevelWords(${element.level_no})" class="btn custom-tab">
                <i class="fa-solid fa-book-open"></i>Lesson - ${element.level_no}
            </button>
        `
        buttonContainer.append(btnDiv)
    }
    
}
// const loadLevelWords=()=>{
//    fetch("https://openapi.programming-hero.com/api/level/${}")
//    .then(res=> res.json())
//    .then(jeson=> displayleson(jeson.data))
    
// }