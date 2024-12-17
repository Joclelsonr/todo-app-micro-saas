"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo } from "../types";
import { upsertTodo } from "../_actions/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { upsertTodoSchema } from "../schema";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

export type TodoUpsertSheetProps = {
  children: React.ReactNode;
  deefaultValues?: Todo;
};

export function TodoUpsertSheet({ children }: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(upsertTodoSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const res = await upsertTodo(data);
    console.log(res);
    router.refresh();
    form.reset();

    ref.current?.click();

    toast({
      title: "Tarefa salva com sucesso",
      description: "Sua tarefa foi salva com sucesso",
    });
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <SheetHeader className="mb-4">
            <SheetTitle>Criar Tarefa</SheetTitle>
            <SheetDescription>
              Faça alterações na sua tarefa aqui. Clique em salvar quando
              terminar.
            </SheetDescription>
          </SheetHeader>
          <form
            onSubmit={onSubmit}
            className="space-y-8 h-screen flex flex-col"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite o titulo da sua tarefa"
                    />
                  </FormControl>
                  <FormDescription>
                    Este é seu nome de exibição público.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter>
              <Button type="submit">Salvar</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
