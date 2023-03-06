const branches = [
  {
    name:"فرع باب بن غشير",
    location:"لا يوجد عنوان محدد",
    workTime:"5am-6pm",
    image:"/images/workers/ahmed.png"
  },{
    name:"فرع قرجي",
    location:"لا يوجد عنوان محدد",
    workTime:"12am-8pm",
    image:"/images/workers/arwa.png"
  },{
    name:"فرع سراج",
    location:"لا يوجد عنوان محدد",
    workTime:"8am-8pm",
    image:"/images/workers/mariem.png"
  },{
    name:"فرع جنزور",
    location:"لا يوجد عنوان محدد",
    workTime:"12am-12pm",
    image:"/images/workers/amal.png"
  },{
    name:"فرع زناتة جديدة",
    location:"لا يوجد عنوان محدد",
    workTime:"24H",
    image:"/images/workers/mohammed.png"
  },
]

const branchesGrid = document.querySelector('.branches-grid')

for(let branch of branches){
  let container = document.createElement('div')
  container.classList.add('branch-container')

  let image = document.createElement('img')
  image.src = branch.image

  container.appendChild(image)
  branchesGrid.appendChild(container)
}
