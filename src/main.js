function Node() {
    const value = null;
    const nextNode = null;
    return { value, nextNode };
}

function LinkedList() {
    let headNode = new Node();

    const append = (value) => {
        const newNode = new Node();
        newNode.value = value;
        let current = headNode;
        if(current.value==null){
            headNode.value = value;
            return headNode;
        }
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
        return newNode;
    }

    const prepend = (value) => {
        const newNode = new Node();
        newNode.value = value;
        if(headNode.value) {
            newNode.nextNode = headNode;
        }
        headNode = newNode;
    }

    const size = () => {
        let count = 0;
        let current = headNode;
        if(current.value == null) {
            return 0;
        }
        count++;
        while(current.nextNode) {
            current = current.nextNode;
            count++;
        }
        return count;
    }

    const head = () => {
        return headNode;
    }

    const tail = () => {
        let current = headNode;
        while(current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    const toString = () => {
        let current = headNode;
        
        if(current.value == null) {
            return 'Error: empty list';
        }
        
        let listString = '( ' + current.value + ' )';
        while(current.nextNode) {
            listString += ' -> ( ' + current.nextNode.value + ' )';
            current = current.nextNode;
        }
        listString += ' -> null';
        return listString;
    }
    return {append, prepend, size, toString, head, tail};
}

const list = LinkedList();
list.append('dog');
list.append('cat');
list.prepend('squirrel');
console.log(list.size());
console.log(list.toString());
console.log(list.head());
console.log(list.tail());