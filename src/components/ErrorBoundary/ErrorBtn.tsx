import { useState, useEffect } from "react";
import Button from "../Button/Button";

export const ErrorBtn = () => {
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error('This is Error');
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>{'Кинуть ошибка'}</Button>

    );
};