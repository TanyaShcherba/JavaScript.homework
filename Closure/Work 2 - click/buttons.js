function counter(button) {
    let count = 0;
    button.onclick = () => {
        count++;
        button.textContent = count;
    };
    button.click();
}
    
