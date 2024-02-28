import { useSelector, useDispatch } from 'react-redux';
import { updateUserThunk } from '../../features/userProfileThunk';
import { useState } from 'react';

function Account() {
  const userFirstName = useSelector((state) => state.userProfile.firstName);
  const userLastName = useSelector((state) => state.userProfile.lastName);
  const dispatch = useDispatch();
  const [editView, setEditView] = useState(false);
  const userToken = useSelector((state) => state.auth.token);
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);

  const updateProfile = async () => {
    setEditView(true);
  };

  const handleSave = async () => {
    dispatch(updateUserThunk({ token: userToken, firstName, lastName }));
    setEditView(false); // Revenir à la vue normale après la mise à jour
  };

  const handleCancel = () => {
    // Réinitialiser les champs et revenir à la vue normale
    setFirstName(userFirstName);
    setLastName(userLastName);
    setEditView(false);
  };

  return (
    <main className='main bg-dark'>
      {!editView ? (
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {userFirstName} {userLastName}
          </h1>
          <button className='edit-button' onClick={updateProfile}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className='header'>
          <h1>Welcome back</h1>
          <div className='edit-form'>
            <input
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={userFirstName}
            />
            <input
              type='text'
              onChange={(e) => setLastName(e.target.value)}
              placeholder={userLastName}
            />
            <div className='edit-buttons'>
              <button className='cancel-button' onClick={handleCancel}>
                Cancel
              </button>
              <button className='save-button' onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className='sr-only'>Accounts</h2>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
          <p className='account-amount'>$2,082.79</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
          <p className='account-amount'>$10,928.42</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
          <p className='account-amount'>$184.30</p>
          <p className='account-amount-description'>Current Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Account;
