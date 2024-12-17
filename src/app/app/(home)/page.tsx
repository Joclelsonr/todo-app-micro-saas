import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { TodoDataTable } from "./_components/data-table";
import { TodoUpsertSheet } from "./_components/todo-upsert-sheet";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { getUserTodos } from "./_actions/actions";

export default async function Page() {
  const todos = await getUserTodos();

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <TodoUpsertSheet>
            <Button variant="outline" size="sm">
              Adicionar Tarefa
              <PlusIcon className="h-4 w-4" />
            </Button>
          </TodoUpsertSheet>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable data={todos} />
      </DashboardPageMain>
    </DashboardPage>
  );
}
