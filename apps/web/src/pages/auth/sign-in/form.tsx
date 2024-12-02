import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
   email: z.string().email({
      message: "Invalid email address."
   }),
   password: z.string().min(4, {
      message: "Password must be at least 4 characters."
   })
})

const SignInForm = () => {

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: ""
      }
   })

   return (
      <div className={cn("grid gap-1")}>
         <Form {...form}>
            <form onSubmit={() => console.log('test')}>
               <div className="grid gap-4">
                  <div className="grid gap-3">
                     <Label className="text-muted-foreground">Email Address</Label>
                     <Input placeholder="johndoe@email.com" />

                     <Label className="text-muted-foreground">Password</Label>
                     <Input placeholder="*****" />
                  </div>
                  <LoadingButton type="submit">
                     Login Account
                  </LoadingButton>
               </div>
            </form>
         </Form>
         <div className="relative mt-3">
            <div className="absolute inset-0 flex items-center">
               <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
               <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
               </span>
            </div>
         </div>
         <div className="grid gap-2 mt-3">
            <Button className="w-full" variant="outline" type="button">
               <Icons.google className="mr-2 h-3 w-3" />
               Google
            </Button>
            <Button className="w-full" variant="outline" type="button">
               <Icons.gitHub className="mr-2 h-3 w-3" />
               Github
            </Button>
         </div>
      </div>
   )
}

export type signInFormProps = z.infer<typeof formSchema>
export default SignInForm;