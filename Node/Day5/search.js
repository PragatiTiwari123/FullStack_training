const users = [{
    id: 101, name: "xyz"
},
    {id: 102, name: "abc"},
{id: 103, name: "pqr"}

]
if (users.find(u => u.id === 102))
{
    console.log("id found")
}
else {
    console.log("not found")
    }