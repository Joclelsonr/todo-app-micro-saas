"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const result = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!result.ok) {
      toast({
        title: "Erro ao criar usuário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Usuário criado com sucesso",
      description: "Você já pode fazer login",
    });
    redirect("/auth");
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="self-center text-3xl">Registrar</CardTitle>
          <CardDescription className="self-center">
            Preencha os campos abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome:</Label>
                <Input
                  type="name"
                  // placeholder="Seu nome"
                  {...register("name")}
                  required
                />
              </div>
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
                Registrar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
