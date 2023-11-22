const Notification = ({ message, tone }) => {
    const tone_style = `notification ${tone}`
    if (message === "") {
        return null
    }

    return (
        <div className={tone_style}>
            {message}
        </div>
    )
}

export default Notification