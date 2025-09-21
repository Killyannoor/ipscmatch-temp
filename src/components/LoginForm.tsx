"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/app/actions/actions";
import { useActionState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Gebruikersnaam moet 2 of meer karakters bevatten.",
  }),
  password: z.string(),
});

const initialState = {
  message: "",
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gebruikersnaam</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wachtwoord</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Gebruik de inloggegevens van het forum
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {state?.message && (
          <p className="text-red-600" aria-live="polite">
            {state.message}
          </p>
        )}

        <Button type="submit" className="cursor-pointer">
          Inloggen
        </Button>
      </form>
    </Form>
  );
}
