import { cn } from "@/lib/utils";

export type DashboardGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardPage({ className, children }: DashboardGenericProps) {
  return <section className={cn(["h-screen", className])}>{children}</section>;
}

export function DashboardPageHeader({
  className,
  children,
}: DashboardGenericProps) {
  return (
    <header
      className={cn([
        "px-6 py-3 border-b border-border flex items-center justify-between",
        className,
      ])}
    >
      {children}
    </header>
  );
}

export function DashboardPageHeaderTitle({
  className,
  children,
}: DashboardGenericProps) {
  return (
    <h1 className={cn(["text-muted-foreground uppercase", className])}>
      {children}
    </h1>
  );
}

export function DashboardPageHeaderNav({
  className,
  children,
}: DashboardGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}

export function DashboardPageMain({
  className,
  children,
}: DashboardGenericProps) {
  return <main className={cn(["p-6", className])}>{children}</main>;
}
