import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Account from '../../components/user/Account';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserThunk } from '../../features/userProfileThunk';
import { useEffect } from 'react';

function User() {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.auth.token);

  //Utilisation de useEffect pour déclencher le fetchUserThunk dès que User est monté, après avoir vérifié que userToken existe.
  useEffect(() => {
    if (userToken) {
      dispatch(fetchUserThunk(userToken));
    }
  }, [userToken, dispatch]);

  return (
    <>
      <Header />
      <Account />
      <Footer />
    </>
  );
}

export default User;
