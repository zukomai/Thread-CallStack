# Thread and Call Stack 
Day 5/100 of Coding Challenge ✅

I spent day five learning about Javascript "under the hood" from the [Traversy Media](https://youtu.be/-G9c4CMMUKc) Channel. 

## What I Learned
1. How to use the **Debugger** tool in Firefox: 
    - Creating breakpoints.
    - Stepping through code, line by line.
    - Viewing the Call Stack area inside the **Debugger**.

2. What the Call Stack and Heap is in Javascript:
    - The *Call Stack* is useful for the interpreter to keep track of its place in the script when calling multiple functions.
    - The *Heap* is a sifferent space for storing data; such as objects and functions. Does not allocate fixed memory for these objects.
 3. Synchronous vs. Asynchronous:
    - *Synchronous*: Single-Thread Code Execution
    - *Asynchronous*: Multi-Thread Code Execution

## Notes From Video
1. Javascript is a single-threaded language:
    - Javascript is known as a synchronous language (single thread) with *asynchronous* capabilities (multi-thread):
    - Only uses *one* call stack and memory heap to execute the program.
    - Execution of instructions are in a single sequence. Slower to execute code compaired to multi-threaded execution. See example below ⇩ <br>
    <img src="/img/single-thread-ex.png" alt="Single Thread Example Image" width="300px"> <br>
    <img src="/img/multi-threaded-ex.png" alt="Multi Threaded Example Image" width="300px"> <br>
    - The flow of control is sequential, as we see in the single thread image. 

2. What is the *Call Stack*? 
    - **A mechanism for an interpreter to keep track of its place in a script that calls multiple functions.**
    - Stack of functions to be executed: <Br>
    <img src="/img/call-stack.png" alt="Call Stack Example" width="300px"> <br>
    - Manages execution contexts (global, local): <br>
    <img src="/img/execution-context.png" alt="Execution Context Example" width="300px"> <br>
    - Stacks are Last In First Out (LIFO): <br>
    <img src="/img/lifo.png" alt="LIFO Example" width="300px"> <br>

3. Demo of Call Stack in the Browser
    - Debug mode in Firefox showing how the call stack works by calling three functions. Stop point put on the second function, call stack can be found in the bottom right corner of the screen. 
    - As seen in the screenshot, each function is executed (pushed and pop'd off the call stack) before moving to the next. <br>
    <img src="/img/debugging.png" alt="Call Stack in Firefox Demonstration" width="600"> <br>
    - The next screenshot shows the call stack when the functions are nested and called within each other. Notice how the call stack is not just one item in the call stack but all of them in the LIFO order. <br>
    <img src="/img/debuggin-2.png" alt="Second Call Stack in Firefox Demonstration" width="600"> <br>




