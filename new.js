// const x = ["micheal",'dickson',"tobi","idris"]
//   // x.push("victor")
// //splice(start, delete value)
// let numb = ["2","5","0","0","0","0"]
// numb.splice(-3, 0, ",")
// console.log(numb);

// const reuser = (cost)=>{
//   let newCost = String(cost).split("")
//   newCost.splice(-3,0,",")
//   return console.log(newCost.join(""));
// }
// reuser(5005004)
//


class LinkList {
  costructor(){
    this.head=null
    this.tail=null
  }
  push(value){
    let Node ={value:value,next:null}
    if(this.tail){
      this.tail.next = Node
    }
    this.tail= Node
    if(!this.head){
      this.head = Node
    }
  }
  log(){
    let el =[]
    let Node = this.head

    while(Node){
      el.push(Node)
      Node=Node.next
    }
    return el
  }
  header(value){
    let Node = {value:value, next:this.head}
    if(this.head){
      this.head=Node
    }
  }
  delete(value){
    if(!this.head){
      return null
    }
    if(this.head && this.head.value===value){
      this.head = this.head.next
    }
    let Node = this.head
    while(Node.next){
      if(Node.next.value===value){
        Node.next= Node.next.next
      }else{
        Node = Node.next
      }
    }
    if(this.tail.value===value){
      this.tail=Node
    }
  }
  
}
const list = new LinkList()
list.push("pre")
list.push("vek")
list.push("idr")
list.header("tho")
list.header("idris")
list.delete("idr")

console.log(list.log());