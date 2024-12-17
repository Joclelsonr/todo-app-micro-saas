import { TypeWithoutPromise } from "@/app/types/type-without-promise";
import { getUserTodos } from "./_actions/actions";

export type Todo = TypeWithoutPromise<typeof getUserTodos>[0];

// export type Todo = {
//   id: string;
//   userId: string;
//   title: string;
//   createdAt: Date;
//   updatedAt: Date;
//   doneAt?: Date | null;
// };
