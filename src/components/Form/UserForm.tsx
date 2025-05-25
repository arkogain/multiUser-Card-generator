"use client";

import { formSchema, FormSchemaType } from "@/lib/FormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const UserForm = () => {
  const { push, replace } = useRouter();

  useEffect(() => {
    if (window.location.pathname === "/[num]") {
      // refresh();

      replace("/");
    } else {
      push("/");
    }
  }, []);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      num: 3,
    },
    mode: "all",
  });

  const formSubmit = ({ num }: FormSchemaType) => {
    push(`/${num}`);
  };
  return (
    <>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(formSubmit)} className="flex gap-3">
            <FormField
              control={form.control}
              name="num"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter a number"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant={"outline"}>
              Refetch
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default UserForm;
