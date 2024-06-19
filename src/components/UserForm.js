import React,{useState} from 'react';

const UserForm = ({onUserAdd}) => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();

    const handleSubmit = (event) =>{
        event.preventDefault();
        onUserAdd({name,email})
        setName('');
        setEmail('')
        // console.log(name,email)
    }
    return (
        <div className='flex items-center justify-center '>
            <div className='w-full max-w-xs'>
                <h1 className='text-4xl m-2 p-4 text-center font-semibold'>UserForm</h1>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                    <input 
                        type='text' 
                        name='name' 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Enter your name' 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
                    />
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input 
                        type='email' 
                        name='email' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Enter your email' 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
                    />
                    <button 
                        type='submit' 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Add User
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
