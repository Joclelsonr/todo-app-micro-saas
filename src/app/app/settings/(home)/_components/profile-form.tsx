"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { updateProfileSchema } from "../schema";
import { updateProfile } from "../_actions";
import { SheetFooter } from "@/components/ui/sheet";
import { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProfileFormProps = {
  defaultValues: Session["user"];
};

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      email: defaultValues?.email || "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await updateProfile(data);
    router.refresh();

    toast({
      title: "Sucesso",
      description: "Nome atualizado com sucesso!",
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8 flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle>Nome</CardTitle>
            <CardDescription>
              Este é seu nome de exibição público.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Nome</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite seu nome"
                      //   defaultValue={defaultValues?.name || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>E-mail</CardTitle>
            <CardDescription>
              Entre em contato com o suporte para atualizar seu e-mail.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>E-mail</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite seu nome"
                      defaultValue={defaultValues?.email || ""}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <SheetFooter>
          <Button type="submit">Salvar</Button>
        </SheetFooter>
      </form>
    </Form>
  );
}
