import {render, screen,waitFor} from '@testing-library/react';
import user from '@testing-library/user-event'
import UserForm from './components/UserForm';

test('UserForm should show two inputs', () =>{
    //first step to render the component 
    render(<UserForm/>);
    //manipulate the component or find an element in it 
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    //assertion - making sure the component is doing what we expect it to do 
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

// NOT THR BEST IMPLEMENTATION
// test('calls userAdd when form is submitted', () =>{
//     const argList = [];
//     const callback = (...args)=>{   
//         argList.push(args);
//     }
//     //render the component 
//     render(<UserForm onUserAdd={callback}/>)
//     //find the two inputs 
//     const [nameInput,emailInput] = screen.getAllByRole('textbox');
//     //simulate typing in a name
//     user.click(nameInput)
//     user.keyboard('Mayank')
//     //simulate typing in a email 
//     user.click(emailInput)
//     user.keyboard('myk@gmail.com')

//     //find the button
//     const button = screen.getByRole('button');
//     //simulate clicking a button (submitting the form)
//     user.click(button)
//     //Assertion to make sure 'onUserAdd' gets called with email and name 
//     expect(argList).toHaveLength(1);
//     expect(argList[0][0]).toEqual({name:'Mayank', email:'myk@gmail.com'})
// });

//Better approach
test('calls userAdd when form is submitted', () =>{
    const mock = jest.fn();
    //render the component 
    render(<UserForm onUserAdd={mock}/>)
    //find the two inputs 
    // const [nameInput,emailInput] = screen.getAllByRole('textbox');
    const nameInput = screen.getByRole('textbox',{
        name : /name/i,
    })
    const emailInput = screen.getByRole('textbox',{
        name: /email/i,
    })
    //simulate typing in a name
    user.click(nameInput)
    user.keyboard('Mayank')
    //simulate typing in a email 
    user.click(emailInput)
    user.keyboard('myk@gmail.com')

    //find the button
    const button = screen.getByRole('button');
    //simulate clicking a button (submitting the form)
    user.click(button)
    //Assertion to make sure 'onUserAdd' gets called with email and name 
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:"Mayank", email:"myk@gmail.com"})
});


test('empty the two inputs after form is submitted', async () => {
    render(<UserForm onUserAdd={() => {}} />); // Render your UserForm component
  
    // Find input fields and button
    const nameInput = screen.getByPlaceholderText(/Enter your name/i);
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const addButton = screen.getByRole('button', { name: /Add User/i });
  
    // Type user information and click Add button
    user.type(nameInput, 'mayank');
    user.type(emailInput, 'myk@gmail.com');
    user.click(addButton);
  
    // Wait for inputs to be cleared
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
    });
  });