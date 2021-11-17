// 함수로 잘 굴러가는지 테스트 중... 
const todolist = document.querySelector('#todolist');

// 리스트 생성은 잘 되는데 체크박스와 삭제버튼은 첫번째 리스트에만 적용된다.
todolist.addEventListener('click', e => { 
  const addBtn = document.querySelector('#form_addBtn');
  const deleteBtn = document.querySelector('.deleteIcon');
  const checkBtn = document.querySelector('.checkIcon');

  if (e.target === deleteBtn) removeList();
  if (e.target === addBtn) addList();
  if (e.target === checkBtn) checkBtnOnOff()
})

// 할일 추가
function addList() {
  const inputValue = document.querySelector('#form_input').value;
  const itemList = document.querySelector('#todo_contents');

  if (inputValue === '') {
    return console.log('입력하세요');
  }

  const addNewItem = createItem(inputValue);
  return itemList.appendChild(addNewItem);
}

function createItem(inputValue) {
  const newItem = document.createElement('li');
  newItem.setAttribute('class', 'todo_item');
  newItem.innerHTML = `
    <button class="item_checkBtn">
      <i class="far fa-square checkIcon"></i>
    </button>
    <span class="item_text">${inputValue}</span> 
    <button class="item_deleteBtn">
      <i class="fas fa-minus-circle deleteIcon"></i>
    </button>
  `;

  return newItem
}

function checkBtnOnOff() {
  const checkIcon = document.querySelector('.checkIcon');
  const itemText = document.querySelector(".item_text");

  checkIcon.classList.toggle('fa-square');
  checkIcon.classList.toggle('fa-check-square');

  checkIcon.classList.contains('fa-check-square') 
  ? itemText.style.textDecoration = "line-through"
  : itemText.style.textDecoration = "none";
}

function removeList() {
  const item = document.querySelector('.todo_item');
  item.parentNode.removeChild(item);
}