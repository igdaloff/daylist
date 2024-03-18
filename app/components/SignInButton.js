'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()} className="btn btn-primary">
          Sign Out
        </button>
      </>
    );
  }
  return (
    <button onClick={() => signIn()} className="btn btn-primary">
      Sign in with Google
    </button>
  );
};

export default SignInButton;
