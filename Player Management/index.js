const selectedRole = document.querySelector('#selectedRole')
const playersListSection = document.querySelector('#playersList')
let players = []
function renderplayersList(players){
    playersListSection.textContent = ``
    for(let i = 0; i < players.length; i++){
        const liElement = document.createElement('li')
        liElement.className = 'list-group-item d-flex justify-content-between'
        liElement.innerHTML =
        `
            ${players[i].fullName} - Playing Role: ${players[i].playingRole} - Nationality: ${players[i].nationality}
            <button onClick='deletePlayerHandler("${players[i]._id}")' class='btn btn-danger'>Delete</button>
        `
        playersListSection.appendChild(liElement)
    }
}

function deletePlayerHandler(playerId){
    fetch(`https://players-backend-student-neog-ca.replit.app/players/${playerId}`, {
        method: 'DELETE'
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        fetchData()
    })
}

function fetchData(){
    fetch(`https://players-backend-student-neog-ca.replit.app/players`)
        .then(function (response){
            return response.json()
        })
        .then(function(data){
            if(data){
                if(data.length > 0){
                    players = data
                    renderplayersList(players)
                }
            }
        })
}

selectedRole.addEventListener('change', function(){
    console.log(selectedRole.value)
    let filteredPlayers = []
    if(selectedRole.value === 'All'){
        filteredPlayers = players
    }
    else{
        for(let i = 0; i <= players.length - 1; i++){
            console.log(players[i].playingRole)
            if(players[i].playingRole === selectedRole.value){
                filteredPlayers.push(players[i])
            }
        }
    }
    console.log(filteredPlayers)
    renderplayersList(filteredPlayers)
})

fetchData()