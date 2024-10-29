import Overlay from "./Overlay";
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
import { TActiveModal } from "../types";
import SignUpModal from "./SignUpModal";
import { LuEye, LuEyeOff } from "react-icons/lu";

const LoginCard = () => {
  const [activeModal, setActiveModal] = useState<TActiveModal>("login");
  const [show, setShow] = useState<boolean>(false);
  return (
    <Overlay>
      {activeModal === "login" && (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -30 }}
          className="w-[400px]"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-primary">Login</CardTitle>
              <CardDescription>Login to your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action="">
                <div className="flex-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="h-9 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-within:border-primary/85">
                    <input
                      id="password"
                      className="flex-1 outline-none placeholder:text-muted-foreground"
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <button onClick={() => setShow(!show)} type="button">
                      {show ? <LuEye size={18} /> : <LuEyeOff size={18} />}
                    </button>
                  </div>
                </div>
              </form>
              <span className="text-[12px] underline">Forgot Password?</span>
            </CardContent>
            <CardFooter className="flex items-center flex-col gap-y-2">
              <AnimatePresence>
                <Button type="button">Login</Button>
                <div className="flex gap-x-1">
                  <span className="text-sm">Doesn't have an account yet?</span>
                  <button
                    className="text-sm text-primary underline"
                    onClick={() => setActiveModal("signup")}
                  >
                    Sign Up!
                  </button>
                </div>
              </AnimatePresence>
            </CardFooter>
          </Card>
        </motion.div>
      )}
      {activeModal === "signup" && (
        <SignUpModal login={() => setActiveModal("login")} />
      )}
    </Overlay>
  );
};

export default LoginCard;
