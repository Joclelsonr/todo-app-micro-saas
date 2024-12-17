"use server";

import { z } from "zod";
import { auth } from "../../../services/auth";
import { prisma } from "../../../services/database";
import { deleteTodoSchema, upsertTodoSchema } from "../schema";

export async function getUserTodos() {
  const session = await auth();

  const todos = await prisma.todo.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return todos;
}

export async function upsertTodo(input: z.infer<typeof upsertTodoSchema>) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Usuário não autenticado",
      data: null,
    };
  }

  if (input.id) {
    const todo = await prisma.todo.findUnique({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      select: {
        id: true,
      },
    });

    if (!todo) {
      return {
        error: "Tarefa não encontrada",
        data: null,
      };
    }

    const updated = await prisma.todo.update({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      data: {
        title: input.title,
        doneAt: input.doneAt,
      },
    });
    return {
      error: null,
      data: updated,
    };
  }

  if (!input.title) {
    return {
      error: "Título é obrigatório",
      data: null,
    };
  }
  const todo = await prisma.todo.create({
    data: {
      title: input.title,
      userId: session?.user?.id,
    },
  });
  return todo;
}

export async function deleteTodo(input: z.infer<typeof deleteTodoSchema>) {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      error: "Usuário não autenticado",
      data: null,
    };
  }

  const todo = await prisma.todo.findUnique({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
    select: {
      id: true,
    },
  });
  if (!todo) {
    return {
      error: "Tarefa não encontrada",
      data: null,
    };
  }

  await prisma.todo.delete({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
  });
  return {
    error: null,
    data: "Tarefa deletada com sucesso",
  };
}
