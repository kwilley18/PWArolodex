const storedUserData = JSON.parse(localStorage.getItem('userData'))

export const deleteRecord = (e) => {
    e.preventDefault()

    const userId = e.target.getAttribute('data-userid')

    const checkID = storedUserData.filter((item, i) => {
        if (item.id == userId) {
            storedUserData.splice(i, 1)
        }
    })
    console.log(storedUserData)

    localStorage.setItem('userData', JSON.stringify(storedUserData))
    location.reload()
}

export const updateRecord = (e) => {
    e.preventDefault()
    const userID = e.target.dataset.userid

    window.location.href = `./updateRecord.html?userId=${userID}`
}