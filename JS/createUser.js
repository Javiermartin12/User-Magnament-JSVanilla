const userForm = document.getElementById('createUser')

export const processDataForm = (event) => {
    event.preventDefault()
    const data = new FormData(event.target) // Catch values
    const dataToObject = Object.fromEntries(data.entries)
    console.log(dataToObject)
    userForm.addEventListener('submit',processDataForm )
}