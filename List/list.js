class EditableList {
    listItems = [];
  

    constructor(listItems) {
        this.init(listItems);
    }

    init(listItems){
        this.getHtmlElements();
        this.buildList(listItems);
        this.setListeners();
    }

    getHtmlElements(){
        this.mainDiv = document.querySelector('div.main');
        this.list = document.querySelector('ol');
        this.input = document.querySelector('input');
        this.addBtn = document.querySelector('input.add');
        this.deleteBtn = document.querySelector('input.delete');
    }

    buildList(listItems){
        for (const item of listItems){
            const li = document.createElement('li');
            li.innerHTML = item;
            this.list.append(li);
            li.addEventListener('click', this.switchLiToInput.bind(this, li));

            this.listItems.push(li);
        }
        
        this.mainDiv.append(this.list);
    }

    switchLiToInput(li){
        if(li.firstChild.nodeType !== 3){
            return;
        }

        const input = document.createElement('input');
        input.value = li.innerHTML;
        input.addEventListener('blur', () => li.innerHTML = li.firstChild.value);

        li.innerHTML = '';
        li.append(input);
    }

    setListeners(){
        this.addBtn.addEventListener('click', this.addItem.bind(this));
        this.deleteBtn.addEventListener('click', this.deleteItem.bind(this));
    }

    addItem(){
        const value = this.input.value;

        if(!value){
            return;
        }

        this.buildList([value]);
        this.input.value = '';

        this.switchDeleteButtonStatus();
    }

    deleteItem(){
        const deletingItem = this.listItems.pop();
        deletingItem.remove();

        this.switchDeleteButtonStatus();
    }

    switchDeleteButtonStatus(){
        const disableAttribute = this.deleteBtn.getAttribute('disabled');

        if (!this.listItems.length && !disableAttribute) {
            this.deleteBtn.setAttribute('disabled', 'true');
        }

        if(this.listItems.length && disableAttribute){
            this.deleteBtn.removeAttribute('disabled');
        }
    }
}

new EditableList(['Основы JS', 'Массивы', 'DOM'])