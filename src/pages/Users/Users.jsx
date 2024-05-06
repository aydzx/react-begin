import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './Users.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

export const UsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);


  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch(err => {
        console.warn(err);
        alert('Ошибка при получении пользователей')
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [... prev,id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="Users">
      {
        success ? (<Success count={invites.length} />) : 
      (<Users 
        onChangeSearchValue={onChangeSearchValue} 
        searchValue={searchValue} 
        items={users} 
        isLoading={isLoading}
        invites={invites}
        onClickInvite={onClickInvite}
        onClickSendInvites={onClickSendInvites}
      />)
      }
      <button className="back-btn" onClick={() => {navigate('/')}}>Назад</button>
    </div>
  )
};

// https://reqres.in/api/users