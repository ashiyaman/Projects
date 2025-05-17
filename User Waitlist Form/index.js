const userWaitlistForm =  document.querySelector('#userWaitlistForm')
const submittedForm =  document.querySelector('#submittedForm')

userWaitlistForm.addEventListener('submit', function(e){
    e.preventDefault()
    const fullName =  document.querySelector('#fullname').value
    const phoneNo =  document.querySelector('#phoneNo').value
    const email =  document.querySelector('#email').value
    const gender =  document.querySelector('input[name="gender"]:checked').value
    const dropout =  document.querySelector('input[name="dropout"]:checked').value
    const workHours =  document.querySelector('#workHours').value
    const reason =  document.querySelector('#reason').value
    const know =  document.querySelectorAll('input[name="know"]:checked')
    const selected = []
    for(let i = 0; i < know.length; i++){
        selected.push(know[i].value)
    }

    submittedForm.innerHTML = 
        `
        <h2>Submitted Form</h2>
        <p><strong>Fullname: </strong>${fullName}</p>
        <p><strong>Gender: </strong>${gender}</p>
        <p><strong>Phone No: </strong>${phoneNo}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Are you a college graduate: </strong>${dropout}</p>
        <p><strong>Are you working anywhere full-time or part-time: </strong>${workHours}</p>
        <p><strong>Why dou you want to learn web development?: </strong>${reason}</p>
        <p><strong>How did you learn about us: </strong>${selected.join(', ')}</p>
        `
})