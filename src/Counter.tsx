import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

export const Counter: Component = () => {
    const [count, setCount] = createSignal(0)

    createEffect(() => {
        console.log(`now count is ${count()}`)
    })
    
    return (
        <>
            <button onClick={() => setCount(count() + 1)}>Click!</button>
            <p>Count is : {count()}</p>
        </>
    )
}