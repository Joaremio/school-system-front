"use client";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardCheck,
  UserPlus,
  School,
} from "lucide-react";

import logoImg from "@/../public/images/logo.png";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `p-2 rounded transition flex items-center gap-2 font-semibold ${
      pathname === path
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-center">
          <Image
            src={logoImg}
            alt="Logo Reforço Escolar Professora Shirlei"
            className="h-24 w-auto"
            priority
          />
        </div>
      </div>

      <nav className="flex flex-col flex-1 p-4 space-y-1">
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link href="/alunos" className={linkClass("/alunos")}>
          <Users />
          Alunos
        </Link>

        <Link href="/turmas" className={linkClass("/turmas")}>
          <School />
          Turmas
        </Link>

        <Link href="/turmas" className={linkClass("/turmas")}>
          <ClipboardCheck />
          Frequência
        </Link>

        <Link href="/matricula" className={linkClass("/matricula")}>
          <UserPlus />
          Matricula
        </Link>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Prof. Shirley</p>
            <p className="text-xs text-muted-foreground">Administrador</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
