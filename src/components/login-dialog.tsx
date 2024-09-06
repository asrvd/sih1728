import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "./icons";
import { useState } from "react";

export default function LoginDialog() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="max-w-max lg:text-lg py-2 lg:py-6 lg:px-6 flex gap-2 items-center justify-center"
          variant="default"
        >
          Apply Now
          <ArrowRight className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:w-[40%] w-full max-w-none">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Login using your PMSSS account credentials
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="studentId" className="text-right">
              Email or applicant ID
            </Label>
            <Input
              id="studentId"
              placeholder="Enter your email and student ID"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="default">Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
