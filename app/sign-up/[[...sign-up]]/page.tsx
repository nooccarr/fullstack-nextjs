import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />;
};

export default SignUpPage;

// we're using this wrapper, that way we can style this page
