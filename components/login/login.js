import { useSession, signIn, signOut } from "next-auth/react";
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const { data: session } = useSession()
 console.log(session);
  if (session) {
    return (
     <>
        Signed in as {session.user.email} <br />
        <GoogleIcon onClick={() => signOut()}>Sign out</GoogleIcon>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <GoogleIcon onClick={() => signIn()}>Sign in</GoogleIcon>
    </>
  )
}