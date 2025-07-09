import React from 'react';
import avatar from '../../images/Avatar.png';
import editButtonIcon from '../../images/editButton.png';
import plusIcon from '../../images/plus.png';

function Main() {
  return (
    <main className="main">
      <div className="container">
        <section className="profile">
          <div className="profile__avatar">
            <img className="profile__avatar-image" alt="Profile avatar" src={avatar} />
          </div>
          
          <div className="profile__info">
            <div className="profile__info-text">
              <div className="profile__info-up">
                <h1 className="profile__info-up-name">Jacques Cousteau</h1>
                <button className="profile__info-up-edit-button" type="button">
                  <img src={editButtonIcon} alt="Edit" />
                </button>
              </div>
              <p className="profile__info-down-profession">Explorador</p>
            </div>
          </div>
          
          <button className="add__card-button" type="button">
            <img src={plusIcon} alt="Add" />
          </button>
        </section>
        
        <section className="posts">
          {/* Espacio para los posts */}
        </section>
      </div>
    </main>
  );
}

export default Main;