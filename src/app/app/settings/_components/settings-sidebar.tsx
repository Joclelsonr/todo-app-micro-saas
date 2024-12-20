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
            Perfil
          </SidebarNavLink>
          <SidebarNavLink
            href="/app/settings/theme"
            active={isActive("/app/settings/theme")}
          >
            Tema
          </SidebarNavLink>
          <SidebarNavLink
            href="/app/settings/billing"
            active={isActive("/app/settings/billing")}
          >
            Pagamento
          </SidebarNavLink>
        </SidebarNavMain>
      </SidebarNav>
    </aside>
  );
}
