import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Action/action";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      {loading && <h2>Loading .....</h2>}
      {error && !loading && <h2>{error}</h2>}
      <h1>REDUX SAGA</h1>
      {users && users.map((usr, i) => <h2 key={i}>{usr.name}</h2>)}
    </>
  );
};

export default App;
