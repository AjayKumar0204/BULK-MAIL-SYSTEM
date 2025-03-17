import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ users, setUsers }) => {
    const navigate = useNavigate();
    const [eusername, setEusername] = useState('');
    const [epassword, setEpassword] = useState('');

    const handleUInput = (evt) => setEusername(evt.target.value);
    const handlePInput = (evt) => setEpassword(evt.target.value);

    const addUser = () => {
        // Check if user already exists
        const userExists = users.some((user) => user.username === eusername);

        if (!userExists) {
            setUsers([...users, { username: eusername, password: epassword }]);
            console.log('User added successfully');
            navigate('/');
        } else {
            alert('Username already exists. Please choose another username.');
        }
    };

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                        onChange={handleUInput}
                    />
                    <input
                        type="password"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePInput}
                    />
                    <button
                        className="bg-[#FCA201] w-24 p-1 rounded-md"
                        onClick={addUser}
                    >
                        Sign Up
                    </button>
                    <p>
                        Already have an account?{' '}
                        <Link to="/" className="underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
