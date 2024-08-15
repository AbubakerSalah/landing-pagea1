import { infoData, articleData} from "./data.js"

const chooseUs = document.getElementById("choose-us")
const articlesDiv = document.getElementById("articles-div")



function getItemsData() {
      let renderItem = ``
      infoData.forEach(data => {
            renderItem += `
            <div class="flex flex-col md:flex-row justify-center m-4">
              <div class="flex flex-col items-center min-w-32 ">

                   <div class="my-4">
                         <img class="" src="${data.image}" alt="${data.alt}">
                   </div>

                   <div class="my-4 ">
                        <h3 class="text-blue-900 ">${data.title}</h3>
                   </div>

                   <div class"">
                        <p class="text-gray-600 text-center ">${data.discription}</p>
                  </div>
             </div>
                   
             </div>
            `
      })

      return renderItem
      

}

function getActiclesData() {
      let articleItems = ``
      articleData.forEach(item => {
            articleItems += `
            <div class=" m-auto flex flex-col md:flex-row">


                        <div class="bg-white flex flex-col rounded-md">
                              <img class="rounded-t-md" src=${item.image} alt=${item.alt}>
                              <div class=" p-4  text-wrap md:w-52">
                                    <span class=" text-gray-500 text-xs">${item.author}</span>
                                    <h3 class=" text-blue-900 hover:text-green-400 text-sm font-light">${item.title}</h3>
                                    <p class=" text-gray-500 text-xs">${item.discription}</p>
                              </div>
                             
                        </div>

                  </div>
            `
      })
      return articleItems
}

function render() {
      chooseUs.innerHTML = getItemsData()
      articlesDiv.innerHTML = getActiclesData()
}
render()


