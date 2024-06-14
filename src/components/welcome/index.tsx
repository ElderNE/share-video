"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Welcome() {

    const router = useRouter();

    const [ inputMessage, setInputMessage ] = useState<string>("Write user Id:")

    const handlerSubmit = (e:React.SyntheticEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        id: { value: string | number};
      };
      const id = String(target.id.value);
      if(id) { //validation
        router.push(`/collections/${id}`);
      }
      else {
        setInputMessage("User Id fiels is empty:")
      }
    }

    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Card className="w-[350px] min-h-1">
          <CardHeader>
            <CardTitle>Sharing video service</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlerSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="id">{inputMessage}</Label>
                  <Input id="id" placeholder="User id" />
                </div>
              </div>
              <div className="mt-4">
                <Button type="submit" >Go</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }