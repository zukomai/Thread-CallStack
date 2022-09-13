# Thread and Call Stack 
Day 5/100 of Coding Challenge ✅

I spent day five learning about Javascript "under the hood" from the [Traversy Media](https://youtu.be/-G9c4CMMUKc) Channel. 

## Main Takeaways from Thread and Call Stack Video
1. Javascript is a single-threaded language:
    - Javascript is known as a synchronous language (single thread) with *asynchronous* capabilities (multi-thread):
    - Only uses *one* call stack and memory heap to execute the program.
    - Execution of instructions are in a single sequence. Slower to execute code compaired to multi-threaded execution. See example below ⇩ <br>
    <img src="/img/single-thread-ex.png" alt="Single Thread Example Image" width="300px"> <br>
    <img src="/img/multi-threaded-ex.png" alt="Multi Threaded Example Image" width="300px"> <br>
    - The flow of control is sequential, as we see in the single thread image. 

2. What is the *Call Stack*? 
    - Stack of functions to be executed: 
    <img src="/img/call-stack" alt="Call Stack Example" width="300px"> <br>
    - Manages execution contexts (global, local):
    <img src="/img/execution-context" alt="Execution Context Example" width="300px"> <br>
    - Stacks are Last In First Out (LIFO):
    <img src="/img/lifo" alt="LIFO Example" width="300px"> <br>


