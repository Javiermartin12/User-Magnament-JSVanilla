
export const getCourseCall = async() => {
    try {
        const response = await fetch('http://localhost:3000/courseCall')
        console.log(response)
        const courseCalls = await response.json()
        if (!Array.isArray(courseCalls) || courseCalls.length === 0) {
            console.error('There are no courseCall')
            alert('There are no courseCall')
            return
        }
        console.log(courseCalls)
         
        const courseCallTable = document.getElementById('#courseCallTable tbody')
        courseCalls.forEach(courseCall => {

            const row = document.createElement('tr')




            
        })
    } catch (error) {
        
    }
}