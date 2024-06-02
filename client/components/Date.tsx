import { useState } from "react"

function getDate() {
    const today = new Date()
    const year = today.getFullYear()
    const date = today.getDate()
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const day = weekday[today.getDay()]
    const month = monthName[today.getMonth() + 1]

    return `${day}, ${date} ${month} ${year} `
}

function SetDate() {
    const [currentDate, setCurrentDate] = useState(getDate())

    return (
        <div className = "setDate">
            <h3>{currentDate}</h3>
        </div>
    )
}

export default SetDate