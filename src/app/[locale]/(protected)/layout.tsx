import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { PropsWithChildren } from 'react';

/**
 * inspired by dashboard-01
 * https://ui.shadcn.com/blocks
 */
export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
          '--background': '#F6FAFF',
          '--sidebar': '#F5F9FF',
          '--sidebar-border': 'rgba(148, 163, 184, 0.35)',
        } as React.CSSProperties
      }
    >
      <DashboardSidebar variant="inset" />

      <SidebarInset className="md:peer-data-[variant=inset]:m-0 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:shadow-none">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
