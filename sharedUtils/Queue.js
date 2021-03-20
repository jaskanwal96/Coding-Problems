export class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.items.length > 0) {
            this.items.shift();
        } else {
            throw new Error('Stack Underflow');
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}