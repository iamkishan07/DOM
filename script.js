const todoList = document.querySelector('.todo-list');
const inp = document.querySelector('input');
const btn = document.querySelector('#add');
const main = document.querySelector('main')

const heading = document.createElement('h1')
main.prepend(heading)
heading.prepend()
heading.textContent = 'Todo-Task'



btn.addEventListener('click', () => {
    const value = inp.value;

    if (value.trim() === '') return;

    const list = document.createElement('div');
    const div = document.createElement('div');
    const deletebtn = document.createElement('button');
    const edit = document.createElement('button');
    const para = document.createElement('p');

    para.textContent = value;

    deletebtn.textContent = 'Delete';
    edit.textContent = 'Edit';

    list.classList.add('list');

    div.setAttribute("class", "add-remove")

    deletebtn.style.padding = '10px 20px';
    deletebtn.style.borderRadius = '20px';
    deletebtn.style.border = 'none';


    edit.style.padding = '10px 20px';
    edit.style.borderRadius = '20px';
    edit.style.border = 'none';

    div.append(deletebtn, edit);
    list.append(para, div);
    todoList.append(list);

    deletebtn.addEventListener('click', () => {
        list.remove();
    });

    edit.addEventListener('click', () => {

        if (para.contentEditable === 'true') {
            para.contentEditable = false;
            edit.textContent = 'Edit';
            para.style.border = 'none';
        } else {
            para.contentEditable = true;
            para.focus();
            edit.textContent = 'Save';
            para.style.padding = '5px 10px';
            para.style.borderRadius = '20px'
            para.style.border = '1px solid black'
        }

    });

    para.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            para.contentEditable = false;
        }
    });



    inp.value = '';
    });