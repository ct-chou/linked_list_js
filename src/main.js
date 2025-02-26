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
        return newNode;
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

    const at = (index) => {
        let current = headNode;
        let count = 0;
        while(count < index) {
            if(current == null)
                return null;
            current = current.nextNode;
            count++;
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

    const pop = () => {
        let current = headNode;
        console.log('head: ' + current.value);
        while(current.nextNode.nextNode) {
            console.log('current value: ' + current.value);
            current = current.nextNode;
            console.log('next value: ' + current.value);
        }
        let popped = current.nextNode;
        current.nextNode = null;
        return popped;
    }

    const contains = (value) => {
        let current = headNode;

        while(current.nextNode) {
            if(current.value == value)
                return true;
            current = current.nextNode;
        }
        if(current.value == value)
            return true;
        return false;
    }

    const find = (value) => {
        let current = headNode;
        let index = 0;

        while(current.nextNode) {
            if(current.value == value)
                return index;
            index++;
            current = current.nextNode;
        }
        if(current.value == value)
            return index;
        return 'error - value not found, no index';
    }

    const insertAt = (value, index) => {
        let current = headNode;
        let count = 0;

        if(index == 0) {
            return prepend(value);
        }

        while(count < index) {
            if(current == null)
                return 'error - index out of range';
            count++;
            if(count == index) {
                const newNode = new Node();
                newNode.value = value;
                newNode.nextNode = current.nextNode;
                current.nextNode = newNode;
                return newNode;
            }
            current = current.nextNode;
        }
        return 'error - index out of range';

    }

    const removeAt = (index) => {
        if(index == 0) {
            let removed = headNode;
            headNode = headNode.nextNode;
            return removed;
        }
        
        let node_prior = at(index-1);
        if(node_prior) {
            let removed = node_prior.nextNode;
            node_prior.nextNode = removed.nextNode;
            return removed;
        }
        else 
            return 'error: index out of bound'
    }

    return {append, prepend, size, toString, head, tail, at, pop, contains, find, insertAt, removeAt};
}

const list = LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.size());
console.log(list.toString());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(2));
// console.log(list.toString());
// console.log(list.pop())
// console.log(list.toString());
// console.log(list.contains('squirrel'));
// console.log(list.contains('cat'));
// console.log(list.contains('dog'));
// console.log(list.find('dog'));
// console.log(list.find('cat'));
// console.log(list.find('squirrel'));
console.log(list.insertAt("Oni", 0));
console.log(list.toString());
console.log(list.removeAt(0));
console.log(list.toString());
console.log(list.removeAt(3));
console.log(list.toString());
console.log(list.removeAt(8));
