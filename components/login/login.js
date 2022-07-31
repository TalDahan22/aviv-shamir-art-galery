import { useSession, signIn, signOut } from "next-auth/react";
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const { data: session } = useSession()
 console.log(session);
  if (session) {
    return (
     
     <span style={{color :"white"}}>
       
        Signed in as {session.user.email}
        <GoogleIcon onClick={() => signOut()}>Sign out</GoogleIcon>
      </span>
       
    )
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <GoogleIcon onClick={() => signIn()}>Sign in</GoogleIcon>
    </>
  )
}