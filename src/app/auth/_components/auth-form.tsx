"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import Link from "next/link";

export function AuthForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!result?.ok) {
      toast({
        title: "Algo deu errado",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Login bem-sucedido",
      description: "Redirecionando...",
    });
    redirect("/app");
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="self-center text-3xl">Entrar</CardTitle>
          <CardDescription className="self-center">
            Insira suas credenciais para fazer login
          </CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail:</Label>
              <Input
                type="email"
                // placeholder="Seu e-mail"
                {...register("email")}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha:</Label>
              <Input
                type="password"
                // placeholder="Sua senha"
                {...register("password")}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </CardContent>
        </form>
        <CardFooter>
          <Link
            href="/auth/register"
            className="text-sm text-zinc-400 hover:underline"
          >
            Não tem uma conta? Cadastre-se aqui
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
