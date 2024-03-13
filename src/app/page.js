import { Container } from "react-bootstrap";
import { auth, currentUser, SignedIn } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = auth();

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()
  return (
    <main>
      <Container>
      <SignedIn>
      <h1 className="text-danger">Hello {user ? user.firstName : null}</h1>
      <p>User Id: {userId}</p>
      </SignedIn>
      </Container>
      
    </main>
  );
}
