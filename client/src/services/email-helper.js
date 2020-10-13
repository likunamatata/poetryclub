import emailjs from 'emailjs-com'

export const sendEmail = async (registerFormData) => {
  const serviceID = 'default_service'
  const templateID = process.env.REACT_APP_TEMPLATE_ID
  const userID = process.env.REACT_APP_USER_ID

  emailjs.send(
    serviceID,
    templateID,
    registerFormData,
    userID
  ).then(() => {
    console.log('Email successfully sent!')
  })
    .catch(err => console.error('there was an error with sending the email: ', err))
}
