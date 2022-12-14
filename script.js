let div = document.createElement("div");
div.classList.add("container");

let row = document.createElement("div");
row.classList.add("row","d-flex","justify-content-center");

//appending to document
div.append(row);
document.body.append(div);

let col = document.createElement("div");
col.classList.add("col-8","my-5");


let random = Math.floor(Math.random() * 6236);
async function getData() {
  try {
    const fetchData = await fetch(`http://api.alquran.cloud/v1/ayah/${random}`);
    const fetchDatainenglish = await fetch(`http://api.alquran.cloud/v1/ayah/${random}/en.asad`);
    const fetchDataintamil = await fetch(`http://api.alquran.cloud/v1/ayah/${random}/ta.tamil`);
    const inArabic = await fetchData.json()
    const inEnglish = await fetchDatainenglish.json()
    const inTamil = await fetchDataintamil.json()


    
        col.innerHTML = `
    
        <div class="card text-white bg-light mb-3 h-100 mt-3 shadow-lg" >
        <div class="card-header bg-dark">
        <h4 class="text-center">${inArabic.data.surah.name}</h4>
        <h6 class="text-center">${inArabic.data.surah.englishName
        }  -  <span class="text-center "  style="font-size: 1 rem">  ${inArabic.data.surah.englishNameTranslation}</span> </h6>
        
       
        
        </div>
        <div class="card-body text-center bg-transparent">
            <div class="card-text text-dark d-flex justify-content-end"> ${inArabic.data.text}</div>
            <div class="card-text text-dark">${inEnglish.data.text}</div>
            <div class="card-text text-dark">${inTamil.data.text}</div>
            <div class="card-text text-dark d-flex justify-content-end">${inArabic.data.surah.englishName
            } : ${inArabic.data.numberInSurah} </div>
            <div class="card-text text-dark d-flex justify-content-end">Chapter : Verse</div>
        <a onclick="load()" class="btn btn-lg btn-transparent d-flex justify-content-end "><i class="fa-solid fa-rotate-right"></i></a>
        
        </div>
        
        </div>`;
        row.append(col);
        
        // console.log(eng_translation);
      } catch (error) {
        console.log(error);
        
        
        col.innerHTML = `
        
        <div class="card text-white bg-light mb-3 h-100 mt-3 shadow-lg" >
        
        <div class="card-body text-center bg-transparent">
        <div class="card-text text-dark">Something Went Wrong</div>
        <div class="card-text text-dark">Try by enabling insecure content in your site settings</div>
        <a onclick="load()" class="btn btn-lg btn-transparent"><i class="fa-solid fa-rotate-right"></i> Click to Refresh</a>
        
      </div>

 </div>`;
    row.append(col);
  }
}
getData()

function load(){
    return location.reload()
}
