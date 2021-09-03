function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <p>Bem-vindo {user}</p> <button onClick={Logout}>Log out</button>
        </>
      ) : (
        <>
          <p>Você não tem acesso a essa página</p>
          <button onClick={Login}>Log in</button>
        </>
      )}
    </>
  );
}

export default RestrictedPage;
