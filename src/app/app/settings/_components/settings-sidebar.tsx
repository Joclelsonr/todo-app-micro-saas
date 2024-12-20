"use client";

import {
  SidebarNav,
  SidebarNavMain,
  SidebarNavLink,
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";

export function SettingsSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <aside>
      <SidebarNav>
        <SidebarNavMain>
          <SidebarNavLink
            href="/app/settings"
            active={isActive("/app/settings")}
          >
            Meu Perfil
          </SidebarNavLink>
          <SidebarNavLink
            href="/app/settings/theme"
            active={isActive("/app/settings/theme")}
          >
            Aparência
          </SidebarNavLink>
          <SidebarNavLink
            href="/app/settings/billing"
            active={isActive("/app/settings/billing")}
          >
            Assinatura
          </SidebarNavLink>
        </SidebarNavMain>
      </SidebarNav>
    </aside>
  );
}
