import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";

interface Props {
  login: () => void;
  closeModal: () => void;
}

const SignUpModal = ({ login, closeModal }: Props) => {
  const [pass1, setPass1] = useState<boolean>(false);
  const [pass2, setPass2] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      exit={{ y: -30 }}
      className="w-[400px]"
    >
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-between">
            <div className="text-start">
              <CardTitle className="text-primary">Sign Up</CardTitle>
              <CardDescription>Create an account</CardDescription>
            </div>
            <div>
              <button onClick={closeModal}>
                <MdOutlineCancel size={18} />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="h-9 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-within:border-primary/85">
              <input
                id="password"
                className="flex-1 outline-none placeholder:text-muted-foreground"
                type={pass1 ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button onClick={() => setPass1(!pass1)} type="button">
                {pass1 ? <LuEye size={18} /> : <LuEyeOff size={18} />}
              </button>
            </div>
          </div>
          <div>
            <Label htmlFor="password">Confirm Password</Label>
            <div className="h-9 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-within:border-primary/85">
              <input
                id="password"
                className="flex-1 outline-none placeholder:text-muted-foreground"
                type={pass2 ? "text" : "password"}
                placeholder="Re-Enter your password"
              />
              <button onClick={() => setPass2(!pass2)} type="button">
                {pass2 ? <LuEye size={18} /> : <LuEyeOff size={18} />}
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center gap-y-2">
          <AnimatePresence>
            <Button>Sign Up</Button>
            <div className="text-sm flex gap-x-1">
              <span>Already have an account?</span>
              <button
                type="button"
                className="underline text-primary"
                onClick={login}
              >
                Login!
              </button>
            </div>
          </AnimatePresence>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SignUpModal;
