/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    let list = document.body;
    for (let i = 0; i < count; i++) {
        list.insertAdjacentHTML('afterbegin', `<${tag}>${content}</${tag}>`);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function plusOne(count, step) {
        let foundation = document.createElement('div');
        foundation.classList = `item_${step}`;
        if (step < level) {
            for (let i = 0; i < count; i++) {
                foundation.appendChild(plusOne(childrenCount, step + 1));
            }
        }
        return foundation;
    }
    return plusOne(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    function plusOne1(cou) {
        let parrant = document.createElement('div');
        parrant.classList = `item_${cou}`;
        if (cou < 3) {
            for (let i = 0; i < 2; i++) {
                parrant.appendChild(plusOne1(cou + 1));
            }
        }
        return parrant;
    }

    function plusChild(elem) {
        if (elem.className == 'item_2') {
            let y = document.createElement('section');
            y.classList.add('item_2');
            y.innerHTML = elem.innerHTML;
            elem.replaceWith(y);
        }
    }

    let obj = plusOne1(1);
    obj.childNodes.forEach(plusChild);
    return obj;
}
