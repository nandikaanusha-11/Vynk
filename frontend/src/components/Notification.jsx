import {useEffect} from 'react';

export default function Notification({ message, type ,onClose}) {
     useEffect(() => {
     if (!message) return;

     const timer = setTimeout(() => {
       onClose();
     }, 3000);

      return () => clearTimeout(timer);
     }, [message, onClose]);

    if (!message) {
        return null;
    }
   
    return (
        <div className={`notification ${type}`}>
            {type === "success" ? "✓" : "✕"}
            <span>{message}</span>
        </div>
    );
}