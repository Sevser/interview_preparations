const $node = $('.js-node');

$node
    .addClass('node')
    .toggleClass('item')
    .removeClass('node')
    .css({
        color: 'red',
        paddingTop: '10px'
    })
    .html('<li>hello</li>');
        
function $(selector) {
    this.node = document.querySelector(selector); // получаем текущий элемент
    
    this.addClass = (...classList) => {
        this.node.classList.add(...classList);
        return this;
    }
    
    this.toggleClass = (className) => {
        this.node.classList.toggle(className);
        return this;
    }
    
    this.removeClass = (className) => {
        this.node.classList.remove(className);
        return this;
    }
    
    this.css = (styles) => {
        this.node.style = {
            ...this.node.style,
            ...styles,
        }
        return this;
    }
    
    this.html = (html) => {
        this.node.innerHtml = html;
        return this;
    }
    
    return this;
}