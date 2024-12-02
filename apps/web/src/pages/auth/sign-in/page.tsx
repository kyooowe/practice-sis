import { Link } from "react-router";
import { Helmet } from "react-helmet";
import SignInForm from "./form";
import { Suspense } from "react";

const SignInPage = () => {
   return (
      <Suspense>
         <Helmet>
            <title>Sign In</title>
         </Helmet>
         <div className="container relative h-screen flex-col items-center justify-center min-[320px]:flex lg:max-w-none lg:px-0">
            <div className="lg:p-8">
               <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                  <div className="flex flex-col space-y-2 text-center">
                     <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome Back!
                     </h1>
                     <p className="text-sm text-muted-foreground">
                        {`We're thrilled to see you again. Your journey continues here. 🚀`}
                     </p>
                  </div>
                  <SignInForm />
                  <p className="px-8 text-center text-sm text-muted-foreground">
                     <Link
                        to="/signin"
                        className="hover:text-brand underline underline-offset-4"
                     >
                        {`Don't have an account? Sign Up`}
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </Suspense>
   )
}

export default SignInPage;