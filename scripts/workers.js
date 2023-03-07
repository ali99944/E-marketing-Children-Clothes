const workers = [
  {
    name:'احمد ابراهيم',
    age:30,
    image:'../images/workers/ahmed.png',
    position:'نائب المدير'
  },{
    name:'محمد عبدالله',
    age:27,
    image:'../images/workers/mohammed.png',
    position:'رئيس قسم التحرير'
  },{
    name:'يوسف عمران',
    age:26,
    image:'../images/workers/yousef.png',
    position:'مطور الموقع'
  },{
    name:'اروى احمد',
    age:28,
    image:'../images/workers/arwa.png',
    position:'مختبرة امان الموقع'
  },{
    name:'مريم احمد',
    age:25,
    image:'../images/workers/mariem.png',
    position:'المديرة التنفيذي'
  },{
    name:'امل محمد',
    age:27,
    image:'../images/workers/amal.png',
    position:'محللة بيانات'
  },
]

let workersGrid = document.querySelector('#workers-grid')

for(let worker of workers){
  let container = document.createElement('div')
  container.classList.add('worker-container')

  let header = document.createElement('h2')
  header.textContent = worker.name

  let position = document.createElement('p')
  position.textContent = worker.position

  let image = document.createElement('img')
  image.src = worker.image
  image.classList.add('avatar-xx')

  container.appendChild(image)
  container.appendChild(header)
  container.appendChild(position)

  workersGrid.appendChild(container)
}

