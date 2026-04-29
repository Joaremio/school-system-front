# Sistema Escolar Frontend

Um sistema de gerenciamento escolar moderno desenvolvido com Next.js, TypeScript e Tailwind CSS. Permite gerenciar alunos, turmas, matrículas e controle de frequência de forma intuitiva e eficiente.

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework para produção
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para JavaScript
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [Shadcn/ui](https://ui.shadcn.com/) - Componentes acessíveis
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Validação de formulários
- **HTTP Client**: [Axios](https://axios-http.com/) - Requisições HTTP
- **Ícones**: [Lucide React](https://lucide.dev/) - Biblioteca de ícones
- **Máscaras**: [React IMask](https://imask.js.org/) - Máscaras para inputs
- **Notificações**: [Sonner](https://sonner.emilkowal.ski/) - Toasts elegantes

## 📋 Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn, pnpm ou bun
- Backend do sistema escolar rodando (consulte o repositório do backend)

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/school-system-frontend.git
cd school-system-frontend
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente (se necessário):

```bash
cp .env.example .env.local
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas (App Router)
│   ├── (private)/         # Rotas protegidas
│   │   ├── alunos/        # Gestão de alunos
│   │   ├── dashboard/     # Dashboard principal
│   │   ├── frequencia/    # Controle de frequência
│   │   ├── matricula/     # Matrículas
│   │   └── turmas/        # Gestão de turmas
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── Attendance/        # Componentes de frequência
│   ├── Classroom/         # Componentes de turmas
│   ├── Dashboard/         # Componentes do dashboard
│   ├── Enrollment/        # Componentes de matrícula
│   ├── Student/           # Componentes de alunos
│   ├── ui/                # Componentes base (Shadcn/ui)
│   └── ...
├── lib/                   # Utilitários
├── schemas/               # Schemas de validação (Zod)
├── services/              # Serviços de API
├── types/                 # Tipos TypeScript
└── utils/                 # Funções utilitárias
```

## 🎯 Funcionalidades

### 👨‍🎓 Gestão de Alunos

- Cadastro e edição de alunos
- Visualização de detalhes completos
- Histórico acadêmico

### 📚 Gestão de Turmas

- Criação e gerenciamento de turmas
- Adição de alunos às turmas
- Estatísticas das turmas

### 📝 Matrículas

- Processo de matrícula de alunos
- Controle de status das matrículas
- Histórico de matrículas

### 📊 Controle de Frequência

- Registro de presença/falta
- Relatórios de frequência
- Controle por turma

### 📈 Dashboard

- Visão geral do sistema
- Estatísticas em tempo real
- Gráficos e métricas

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
# Adicione outras variáveis conforme necessário
```

### API Backend

Este frontend se conecta a um backend. Certifique-se de que o backend esteja rodando e acessível pela URL configurada.



---

Desenvolvido com ❤️ para facilitar a gestão escolar.
