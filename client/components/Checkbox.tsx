import { useState } from "react"


/*
const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={isChecked} 
                onChange={() => setIsChecked((prev) => !prev)} />
                <span>{ label }</span>
            </label>

        </div>
    )

}
*/

const Checkbox = () => {
    const [tasks, setTasks] = useState({
        breakfast: false,
        dinner: false,
        walk: false,
    })

    const toggleTask = (task) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [task]: !prevTasks[task],
        }))
    }

    return (
        <>
        <div className ="task">
            <button
                className={tasks.breakfast ? 'completed' : ''}
                onClick={() => toggleTask('breakfast')}>   
                {tasks.breakfast ? '✓ ' : ''}Breakfast
            </button>
        </div>

        <div className ="task">
            <button
                className={tasks.dinner ? 'completed' : ''}
                onClick={() => toggleTask('dinner')}>               {tasks.dinner ? '✓ ' : ''}Dinner
            </button>
        </div>

        <div className ="task">
            <button
                className={tasks.walk ? 'completed' : ''}
                onClick={() => toggleTask('walk')}>               
                {tasks.walk ? '✓ ' : ''}Walk
            </button>
        </div>

</>
    )
}

export default Checkbox