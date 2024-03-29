"use client"

import { useState, useEffect } from "react";

export default function Todo() {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                const result = await response.json();
                setTodo(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>{todo.title}</h2>
        </div>
    );
}