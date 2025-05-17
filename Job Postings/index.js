const jobs = [
    {id: 1, title: 'Software Engineer', category: 'IT', location: 'New York', postDate: '2023-01-15', details: 'Job description for a software engineer.'},
    {id: 2, title: 'Financial Analyst', category: 'Finance', location: 'San Francisco', postDate: '2023-02-20', details: 'Job description for a financial analyst.'},
    {id: 3, title: 'Marketing Manager', category: 'Marketing', location: 'San Francisco', postDate: '2023-04-05', details: 'Job description for a marketing manager.'}
];

const jobsListContainer = document.querySelector('#jobsListContainer')

function renderJobList(filteredJobs){
for(let i =  0; i<= filteredJobs.length - 1; i++){
    const jobElement = document.createElement('div')
    jobElement.className = 'col-md-6 my-2'
    jobElement.innerHTML = 
       `<div class='card'>
            <div class='card-header'>${filteredJobs[i].title}</div>
            <div class='card-body'>
                <p><strong>Category: </strong>${filteredJobs[i].category}</p>
                <p><strong>Location: </strong>${filteredJobs[i].location}</p>
                <p><strong>Post Date: </strong>${filteredJobs[i].postDate}</p>
                <a class='btn btn-primary' href='details.html?id=${filteredJobs[i].id}'>Details</a>
            </div>
        </div>`
    jobsListContainer.appendChild(jobElement) 
    }  
         
}

renderJobList(jobs)