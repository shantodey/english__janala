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


// api gatting level button 
const loadLevel = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")// Get ⚡ All Levels
        .then(res => res.json())
        .then(jeson => displayleson(jeson.data))

}

// loading word by level

const loadLevelWords = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;// Get ⚡ Words by Levels
    fetch(url)
        .then(res => res.json())
        .then(jeson => cardS(jeson.data))
}

// creating level button
const displayleson = (lesons) => {
    const buttonContainer = document.getElementById('button__container')
    buttonContainer.innerHTML = '';
    for (const element of lesons) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <button onclick="loadLevelWords(${element.level_no})" class="btn custom-tab">
                <i class="fa-solid fa-book-open"></i>Lesson - ${element.level_no}
            </button>
        `
        buttonContainer.append(btnDiv)
    }

}


const cardS = (cardss) => {
    const cardContainer = document.getElementById('card__container');
    cardContainer.innerHTML = '';
    if(cardss.length ==0){
        cardContainer.innerHTML = `
            <div  class="flex flex-col justify-center items-center mt-10 col-span-full">
            <img src="assets/alert-error.png" alt="">
            <p class="font-thin mb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-4xl">নেক্সট Lesson এ যান</h2>
            </div>
        `
        return
    }
    for (const ele of cardss) {
        console.log(ele);
        const cardDiv = document.createElement('div');
        cardDiv.className = 'bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full';
        cardDiv.innerHTML = `
            <div>
                <div class="flex flex-col items-center justify-center mb-1 gap-3">
                    <h2 class="text-2xl font-semibold text-slate-800 tracking-tight">${ele.word}</h2>
                    <p class="text-sm font-medium text-slate-400 italic font-serif">
                    Meaning /Pronounciation
                    </p>
                    <p class="text-slate-600 leading-relaxed text-base">“ ${ele.meaning}/${ele.pronunciation}”</p>
                </div>
            </div>
            <div class="flex justify-between items-center gap-4 mt-6">
                <button class="text-slate-300 hover:text-blue-500 transition-colors duration-200">
                    <i class="fa-solid fa-circle-info text-lg"></i>
                </button>
                <button class="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white shadow-sm transition-all active:scale-90">
                    <i class="fa-solid fa-volume-high text-sm"></i>
                </button>
            </div>
        `
        cardContainer.append(cardDiv)
    }
}
loadLevel()