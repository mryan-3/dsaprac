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
    insert (value, index){
        if (index < 0 || index > this.size){
            return
        }
        if (index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++

        }

    }
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if (index === 0){
            removedNode = this.head
            this.head = removedNode.next
        } else{
            let prev = this.head
            for (let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.values

    }
    search(value){
       if (this.isEmpty()){
           return -1
       }
        let i = 0
        let curr = this.head
        while(curr){
            if (curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1

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
