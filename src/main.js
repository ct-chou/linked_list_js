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
        // special case: linked list is empty
        let current = headNode;
        if(current.value==null){
            headNode.value = value;
            return headNode;
        }
        // base case:
        let tailNode = tail();
        tailNode.nextNode = newNode;
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
        let pop_minus_1 = at(size()-2); //size returns index + 1
        let popped = pop_minus_1.nextNode;
        pop_minus_1.nextNode = null;
        return popped;
    }

    const contains = (value) => {
        let value_index = find(value);
        if(value_index != null)
            return true;
        else   
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
        return null;
    }

    const insertAt = (value, index) => {
        if(index == 0) {
            return prepend(value);
        }
        
        let node_prior = at(index-1);
        if(node_prior) {
            let newNode = new Node();
            newNode.value = value;
            newNode.nextNode = node_prior.nextNode;
            node_prior.nextNode = newNode;
            return newNode;
        }
        else 
            return 'error: index out of bound'
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

module.exports = { LinkedList };

// const list = LinkedList();
// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// console.log(list.size());
// console.log(list.toString());
// // console.log(list.head());
// // console.log(list.tail());
// // console.log(list.at(2));
// // console.log(list.toString());
// // console.log(list.pop())
// // // console.log(list.toString());
// // // console.log(list.contains('squirrel'));
// // console.log(list.contains('cat'));
// // console.log(list.contains('dog'));
// // console.log(list.contains('squirrel'));
// // // console.log(list.find('dog'));
// // // console.log(list.find('cat'));
// // // console.log(list.find('squirrel'));
// // console.log(list.toString());
// console.log(list.insertAt("Oni", 0));
// console.log(list.toString());
// console.log(list.insertAt("Oni", 4));
// console.log(list.toString());

// // console.log(list.removeAt(0));
// // console.log(list.removeAt(3));
// // console.log(list.toString());
// // console.log(list.removeAt(8));
