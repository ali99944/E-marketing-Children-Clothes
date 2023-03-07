const branches = [
  {
    name:"فرع باب بن غشير",
    location:"لا يوجد عنوان محدد",
    workTime:"5am-6pm",
    image:"../images/branches/branch1.png"
  },{
    name:"فرع قرجي",
    location:"لا يوجد عنوان محدد",
    workTime:"12am-8pm",
    image:"../images/branches/branch2.png"
  },{
    name:"فرع سراج",
    location:"لا يوجد عنوان محدد",
    workTime:"8am-8pm",
    image:"../images/branches/branch3.png"
  },{
    name:"فرع جنزور",
    location:"لا يوجد عنوان محدد",
    workTime:"12am-12pm",
    image:"../images/branches/branch4.png"
  },{
    name:"فرع زناتة جديدة",
    location:"لا يوجد عنوان محدد",
    workTime:"24H",
    image:"../images/branches/branch5.png"
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

let portfolios = [
  "../images/portfolios/work1.png",
  "../images/portfolios/work2.png",
  "../images/portfolios/work3.png",
  "../images/portfolios/work4.png",
  "../images/portfolios/work5.png",
  "../images/portfolios/work6.png",
  "../images/portfolios/work7.png",
  "../images/portfolios/work8.png",
  "../images/portfolios/work9.png",
  "../images/portfolios/work10.png",
  "../images/portfolios/work11.png",
  "../images/portfolios/work12.png",
  "../images/portfolios/work13.png",
  "../images/portfolios/work14.png",
  "../images/portfolios/work15.png",
  "../images/portfolios/work16.png",
  "../images/portfolios/work17.png",
  "../images/portfolios/work18.png",
  "../images/portfolios/work19.png",
  "../images/portfolios/work20.png",
  "../images/portfolios/work21.png",
  "../images/portfolios/work22.png",
  "../images/portfolios/work23.png",
  "../images/portfolios/work24.png",
  "../images/portfolios/work25.png",
  "../images/portfolios/work26.png",
  "../images/portfolios/work27.png",
  "../images/portfolios/work28.png",
  "../images/portfolios/work29.png",
  "../images/portfolios/work30.png",
  "../images/portfolios/work31.png",
  "../images/portfolios/work32.png",
  "../images/portfolios/work33.png"
]


let branchesPortfolio = document.querySelector('.branches-portfolio')
for(let src of portfolios){
  let container = document.createElement('div')
  let image = document.createElement('img')
  image.src = src

  container.appendChild(image)
  branchesPortfolio.appendChild(container)
}
