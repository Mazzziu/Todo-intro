import { useState, useEffect } from "react";

const useLocalStorage = (storageName, initialValue) => {
    if (!initialValue) initialValue = "";
    let [parsed, setParsed] = useState(initialValue);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);

    useEffect(() => {
        try {
            setTimeout(() => {
                let item = localStorage.getItem(storageName);
                if (!item) {
                    localStorage.setItem(
                        storageName,
                        JSON.stringify(initialValue)
                    );
                    item = localStorage.getItem(storageName);
                }
                setParsed(JSON.parse(item));
                setLoading(false);
            }, 2000);
        } catch (err) {
            setError(err);
        }
    }, [parsed, initialValue, storageName]);

    const updateStorage = (value) => {
        localStorage.setItem(storageName, JSON.stringify(value));
        setParsed(value);
    };

    return {
        state: parsed,
        setState: updateStorage,
        loading,
        error,
    };
};

export { useLocalStorage };
