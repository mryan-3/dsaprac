class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else{
            node.next = this.head
            this.head = node
        }
        this.size++

    }
    print() {
        if(this.isEmpty()){
            console.log("List is empty")
        } else{
            let current = this.head
            let listValues = ''
            while(current){
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues)
        }
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

}

const list = new LinkedList()
list.append(20)
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.print()
list.prepend(30)
list.print()
