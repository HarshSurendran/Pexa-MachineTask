// Write a function debounce that limits the rate at which a function func is called. The debounce function should return a new function that will only call func after it stops being invoked for a specified wait time (in milliseconds).

function debounce(func, waitTime) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, waitTime);
    };
};