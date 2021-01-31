import React, {useState} from 'react';

import {useHistory} from 'react-router-dom'
import Service from './service'

const SignInPage = () => {
    const [form, setForm] = useState({
        userId: '',
        password: ''
    });
    const history = useHistory();

    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const resp = await Service.signIn(form.userId, form.password)
        localStorage.setItem('token', resp)
        history.push('/todo')
    }

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        setForm(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div style={{textAlign: 'left', height: '100vh', width: '100%'}}>
            <form onSubmit={signIn} style={{fontSize: '20px', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <label
                 htmlFor="user_id"
                 style={{display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center' }}>
                    User id
                    <input
                        id="user_id"
                        name="userId"
                        className="userID"
                        value={form.userId}
                        style={{marginTop: 12}}
                        onChange={onChangeField}
                    />
                </label>
                <br/>
                <label
                 htmlFor="password"
                 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                    Password
                    <input
                        id="password"
                        name="password"
                        className="passWork"
                        type="password"
                        style={{marginTop: 12}}
                        value={form.password}
                        onChange={onChangeField}
                    />
                </label>
                <br />
                <button type="submit" style={{marginTop: 12}} className='btn'>
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default SignInPage;