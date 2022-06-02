import React,{ useState } from 'react'
import './App.css';


const App = () => {
  const [user,setUser] = useState('');
  const [data,setData] = useState({})

  const url = 'https://api.github.com/users/'

  
  const getGitUsersData = () => {
    fetch(url + user).then(response => response.json())
    .then(data => setData(data))
  }

  console.log(data)

  return (
    <div className="main-container">
      <div className="input-container">
        <input
          className="input"
          placeholder="Search Github Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="btn" onClick={getGitUsersData}>
          Search
        </button>
      </div>

      {data.message === "Not Found" || data.message === "undefiend" ? (
        <div className="notfound-container">
          <p className="notfound">Result not found</p>
        </div>
      ) : Object.keys(data).length < 1 ? (
        <></>
      ) : (
        <div className="result-container">
          {/* <img className="avatar" src={data.avatar_url} alt='User' />
          <p className="user-name">{data.login}</p>
          <div className="about-repo">
            <div className="about">
              <p>Repos</p>
              <p className="about-info">{data.public_repos}</p>
            </div>

            <div className="about">
              <p>Followers</p>
              <p className="about-info">{data.followers}</p>
            </div>

            <div className="about">
              <p>Following</p>
              <p className="about-info">{data.following}</p>
            </div>
          </div> */}
          <div className="image-container">
            <img className="avatar" src={data.avatar_url} alt="User" />
          </div>

          <div className='information-container'>
            <div className='joined-date'>
              <p className="user-name">{data.login}</p>
              <p className="date">Joined 2020-05-12 </p>
            </div>
            
            <div className='tag-container'>
              <p>@{data.login}</p>
            </div>

            <div>
              {data.bio === null ? (
                <p className='bio'>Bio not found</p>
              ):(
                <p className='bio'>{data.bio}</p>
              )}
            </div>


            <div className="about-repo">
            <div className="about">
              <p>Repos</p>
              <p className="about-info">{data.public_repos}</p>
            </div>

            <div className="about">
              <p>Followers</p>
              <p className="about-info">{data.followers}</p>
            </div>

            <div className="about">
              <p>Following</p>
              <p className="about-info">{data.following}</p>
            </div>
          </div>



          </div>
        </div>
      )}
    </div>
  );
}

export default App