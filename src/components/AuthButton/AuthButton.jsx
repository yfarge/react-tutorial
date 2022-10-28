import {
  signInWithGoogle,
  signOut,
  useAuthState,
} from '../../utilities/firebase';

const SignInButton = () => (
  <button
    className="ms-auto btn btn-dark"
    style={{ height: 'fit-content' }}
    onClick={() => signInWithGoogle()}
  >
    Sign in
  </button>
);

const SignOutButton = () => (
  <button
    className="ms-auto btn btn-dark"
    style={{ height: 'fit-content' }}
    onClick={() => signOut()}
  >
    Sign out
  </button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

export default AuthButton;
