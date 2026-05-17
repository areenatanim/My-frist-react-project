import { useState } from "react"

export default function AnimatedToggle() {

    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <h2>Button Status</h2>
            <button onClick={() => setIsActive(!isActive)}
                style={{
                    padding: '10px 20px',
                    backgroundColor: isActive ? '#4CAF50' : '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }}
            >{isActive ? 'Active' : 'Inactive'}</button>
        </div>
    )
}