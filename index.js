class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector
        this.targetDate = targetDate
    }

    timer() {
        const time = this.targetDate - Date.now()

        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        const secs = Math.floor((time % (1000 * 60)) / 1000)

        document.querySelector('[data-value="days"]').textContent = days < 10 ? `0${days}` : days
        document.querySelector('[data-value="hours"]').textContent = hours < 10 ? `0${hours}` : hours
        document.querySelector('[data-value="mins"]').textContent = mins < 10 ? `0${mins}` : mins
        document.querySelector('[data-value="secs"]').textContent = secs < 10 ? `0${secs}` : secs
    }

    start() {
        setInterval(() => {
            this.timer()
        }, 1000)
    }
}

const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("May 27, 2030"),
})
timer.start()
