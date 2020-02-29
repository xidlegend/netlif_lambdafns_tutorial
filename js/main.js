// Async Fn to send GET request to Netlify server 
// (localhost in this case), returns promise
// const fetchUsers = async () =>
//     await (await fetch('http://localhost:9000/getusers')).json();

const fetchUsers = async () =>
    await (await fetch('/.netlify/functions/getusers')).json();

// Site Javascript to deal with response from
// Lambda Function (in this case) getUser.js
fetchUsers().then(data =>{
    // DOM element variable
    userList = document.querySelector('#users');
    // Loop through each element in userList
    data.forEach(user => {
        // Create li element
        const li = document.createElement('li');
        // Set li class
        li.className = 'list-group-item';
        // Create link element
        const link = document.createElement('a');
        // Append to link(a-tag) login(username) of user as text
        link.appendChild(document.createTextNode(user.login));
        // Set href to html_url from data of user
        link.href = user.html_url;
        // Open in new tab
        link.target = '_blank'
        // Append link to li
        li.appendChild(link);
        // Append li to userlist
        userList.appendChild(li);
    });
})
.catch(
    err => {
        userList = document.querySelector('#users');
        userList.appendChild(document.createTextNode(err))
    }
)