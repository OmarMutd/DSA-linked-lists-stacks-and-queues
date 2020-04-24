class _Node {
    constructor(data, next) {
      this.date = data;
      this.next = next;
    }
  }

  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(data) {
      if (this.top === null) {
        this.top = new _Node(data, null);
        return this.top;
      }
  
      const node = new _Node(data, this.top);
      this.top = node;
    }
  
    pop() {
      const node = this.top;
      this.top = node.next;
      return node.data; 
    }
  }

  const displayStack = (stack) => { 
    let node = stack.top; 
    while (node !== null) 
    { 
      console.log(node); 
      node = node.next; 
    } 
  }

   main = () => {
    const starTrek = new Stack();

   starTrek.push('Kirk');
   starTrek.push('Spock');
   starTrek.push('McCoy');
   starTrek.push('Scotty');
   starTrek.pop()
   starTrek.pop()
   starTrek.push('Scotty')

   displayStack(starTrek);
  }

  main();

  function peek (stack) {
    return stack.top;
  }

  isEmpty = (stack) => {
    if(stack.top === null) {
        return true;
    } return false;
}

  is_palindrome = (str) => {
    string = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    if(string.length === 0) {
        return false
    }
    if(string.length === 1) {
        return true
    }
    let stack = new Stack();
    let midpoint = Math.ceil(string.length/2)
    for(let i = 0; i < string.length; i++) {
        stack.push(string[i])
    }
    // displayStack(stack)
    for(let j = 0; j < midpoint; j++) {
        if(stack.pop() !== string[j]) {
            return false;
        }
    }
    return true;
}
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


matchingParens = (str) => {
  if(str.length <= 1) {
      return false
  }
  let openParens = new Stack();
  console.log(str.length)
  for(let i = 0; i < str.length; i++) {
      if(str[i] === '(' ) {
          openParens.push(str[i])
      }
      if(str[i] === ')') {
         if(isEmpty(openParens)){
             return false;
         }
         openParens.pop();
      }
  }
  if(isEmpty(openParens)) {
      return 'match';
  }
  return 'no match';
}

matchingParens('(Hello)');