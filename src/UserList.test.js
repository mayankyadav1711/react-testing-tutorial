import { render, screen, within } from "@testing-library/react";
import UserList from "./components/UserList";

// fallback - 1 : using data-testid
test('Render one row per user', ()=>{
//Render the component
const users = [
    {name:"Mayank", email:'myk@gmail.com'},
    {name:"Anuj", email:'anuj@gmail.com'}
]
render(<UserList users = {users}/>)
//Find all the rows in the table
const rows = within(screen.getByTestId('users')).getAllByRole('row')
//Assertion : Correct no. of rows in the table
expect(rows).toHaveLength(2);

})

// fallback - 2: container query selector 
// test("Render one row per user", () => {
//   //Render the component
//   const users = [
//     { name: "Mayank", email: "myk@gmail.com" },
//     { name: "Anuj", email: "anuj@gmail.com" },
//   ];
//   const { container } = render(<UserList users={users} />);
//   //Find all the rows in the table
//   const rows = container.querySelectorAll("tbody tr");
//   //Assertion : Correct no. of rows in the table
//   expect(rows).toHaveLength(2);
// });

test('Render the email and name of each user', () => {
    const users = [
        {name:"Mayank", email:'myk@gmail.com'},
        {name:"Anuj", email:'anuj@gmail.com'}
    ]
    render(<UserList users = {users}/>)
    for(let user of users) {
        const name = screen.getByRole('rowheader', {name : user.name});
        const email = screen.getByRole('cell', {name : user.email});
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})


// we can also make the helper function for rendering and stuff as these code is repeating many time :

// const users = [
//     {name:"Mayank", email:'myk@gmail.com'},
//     {name:"Anuj", email:'anuj@gmail.com'}
// ]
// render(<UserList users = {users}/>)

// rendering component in the beforeEach is not recommended

