export const sendConvocation = () => {
    try {
         const starDateInput = document.getElementById('startDate')
         const startDate = new Date(starDateInput.value)

         const communicateDaysBeforeInput = document.getElementById('communicateDaysBefore')
         const communicateDaysBefore = parseInt(communicateDaysBeforeInput.value)

         //Calculate the limit time to send convocation
         const comunicationDate = new Date(startDate)
         comunicationDate.setDate(startDate.getDate() - communicateDaysBefore)

        const today = new Date()

        if(today > comunicationDate) {
            sendCommunication()
            console.log('Convocation sended automaticly')
        }else {
            console.log('It is not time to send the call')
        }
    } catch (error){
        console.error('Error to send the convocation:', error);
    }
}
const sendCommunication = () => {
    console.log('Sending convocation...');
}
sendConvocation()