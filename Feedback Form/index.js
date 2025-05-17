const feedbackForm = document.getElementById('feedbackForm')


feedbackForm.addEventListener("submit", function(e){
    e.preventDefault()
    const name = document.getElementById('name').value
    const feedback = document.getElementById('feedback').value
    const rating = document.querySelector('input[name="rating"]:checked').value
    const interests = document.querySelectorAll('input[name="interests"]:checked')
    let selectedInterests = []
    for(let i = 0; i < interests.length; i++){
        selectedInterests.push(interests[i].value)
    }
    const experience = document.getElementById('experience').value
    const feedbackSection = document.getElementById('feedbackSection')

    feedbackSection.innerHTML =
        `<h2>Feedback Submitted:</h2>
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Feedback: </strong>${feedback}</p>
        <p><strong>Service Rating: </strong>${rating}</p>
        <p><strong>Topics of Interest: </strong>${selectedInterests.join(', ')}</p>
        <p><strong>Overall Experience: </strong>${experience}</p>`
    
})