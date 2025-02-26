const { LinkedList } = require('./main');

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = LinkedList();
    });

    test('append elements to the list', () => {
        list.append('dog');
        list.append('cat');
        expect(list.size()).toBe(2);
        expect(list.toString()).toBe('( dog ) -> ( cat ) -> null');
    });

    test('prepend elements to the list', () => {
        list.append('dog');
        list.prepend('cat');
        expect(list.size()).toBe(2);
        expect(list.toString()).toBe('( cat ) -> ( dog ) -> null');
    });

    test('get size of the list', () => {
        expect(list.size()).toBe(0);
        list.append('dog');
        expect(list.size()).toBe(1);
    });

    test('get head of the list', () => {
        list.append('dog');
        expect(list.head().value).toBe('dog');
    });

    test('get tail of the list', () => {
        list.append('dog');
        list.append('cat');
        expect(list.tail().value).toBe('cat');
    });

    test('get element at specific index', () => {
        list.append('dog');
        list.append('cat');
        expect(list.at(1).value).toBe('cat');
    });

    test('pop element from the list', () => {
        list.append('dog');
        list.append('cat');
        expect(list.pop().value).toBe('cat');
        expect(list.size()).toBe(1);
    });

    test('check if list contains a value', () => {
        list.append('dog');
        list.append('cat');
        expect(list.contains('cat')).toBe(true);
        expect(list.contains('parrot')).toBe(false);
    });

    test('find index of a value in the list', () => {
        list.append('dog');
        list.append('cat');
        expect(list.find('cat')).toBe(1);
        expect(list.find('parrot')).toBe(null);
    });

    test('insert element at specific index', () => {
        list.append('dog');
        list.append('cat');
        list.insertAt('parrot', 1);
        expect(list.size()).toBe(3);
        expect(list.at(1).value).toBe('parrot');
    });

    test('remove element at specific index', () => {
        list.append('dog');
        list.append('cat');
        list.append('parrot');
        list.removeAt(1);
        expect(list.size()).toBe(2);
        expect(list.at(1).value).toBe('parrot');
    });
});