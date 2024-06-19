import {render,screen,within} from '@testing-library/react'
import UserList from './components/UserList'

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

// test('Render the email and name of each user', {

// })