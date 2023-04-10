import { useState, useEffect } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className="bg-charcoal text-white py-4 px-2 w-full flex">
            <p className="m-auto text-xs">© TrainWithDean {currentYear}</p>
        </div>
    );
}