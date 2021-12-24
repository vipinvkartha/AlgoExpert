  // Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name: string) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array: string[]) {
      // Write your code h+ere.
          array.push(this.name);
          for (const child of this.children) {
              child.depthFirstSearch(array);
          }
      return array;
    }

    depthFirstSearchIterative(array: string[]) {
      const stack: Node[] = [];
      stack.push(this);
      const visitedMap = new Set<string>();
      while(stack.length !== 0) {
        const curr = stack.pop()!;
        if(!visitedMap.has(curr.name)) {
          array.push(curr.name);
          visitedMap.add(curr.name);
        }
        for (let j = curr.children.length - 1; j >= 0;j--) {
          if(!visitedMap.has(curr.children[j].name)) {
            stack.push(curr.children[j]);
          }
        }
      }
      return array;
    }
  }
  