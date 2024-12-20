import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  return (
    <Card>
      <CardHeader className="border-b border-border">
        <CardTitle>Uso do Plano</CardTitle>
        <CardDescription>
          Você está atualmente no <Badge>[current_plan]</Badge>. Ciclo de
          cobrança atual [next_due_date].
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <header className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">2 / 10</span>
            <span className="text-muted-foreground text-sm">20%</span>
          </header>
          <main>
            <Progress value={20} />
          </main>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-border pt-6">
        <span>
          Para um maior limite, assine o <span className="font-bold">PRO</span>
        </span>
        <Button className="font-bold">Atualizar para PRO</Button>
      </CardFooter>
    </Card>
  );
}
