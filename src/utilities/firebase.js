import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { useEffect, useState } from 'react';

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { connectAuthEmulator } from 'firebase/auth';
import { connectDatabaseEmulator } from 'firebase/database';
import { useCallback } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyDjtzK_b1ji20nZ3tNs7NulV2gODuOHOQw',
  authDomain: 'react-tutorial-e9c41.firebaseapp.com',
  projectId: 'react-tutorial-e9c41',
  storageBucket: 'react-tutorial-e9c41.appspot.com',
  messagingSenderId: '960564173182',
  appId: '1:960564173182:web:6d850be220430e5ae13b2f',
  measurementId: 'G-VXRY793RHS',
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const database = getDatabase(firebase);

if (!window.EMULATION && import.meta.env['VITE_EMULATE']) {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
  connectDatabaseEmulator(database, '127.0.0.1', 9000);

  signInWithCredential(
    auth,
    GoogleAuthProvider.credential(
      '{"sub": "xlscwJDZGCrH1EtIZ0kEXpWtEuyg", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
    )
  );

  window.EMULATION = true;
}

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser));

  return [user];
};
