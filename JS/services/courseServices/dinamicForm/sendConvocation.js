export const sendConvocation = () => {
    try {
         const starDateInput = document.getElementById('startDate')
         const startDate = new Date(starDateInput.value)
            console.log(startDate)

         const communicateDaysBeforeInput = document.getElementById('communicateDaysBefore')
         const communicateDaysBefore = parseInt(communicateDaysBeforeInput.value)
            console.log(communicateDaysBefore)

         //Calculate the limit time to send convocation
         const comunicationDate = new Date(startDate)
         comunicationDate.setDate(startDate.getDate() - communicateDaysBefore)
             console.log(comunicationDate)

        const today = new Date()
         console.log(today)
    
         const sendCommunication = () => {
        console.log('Sending convocation...');

         }
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
sendConvocation()