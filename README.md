# 🌟 Rede Autoestima-se Website

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

## 📋 Sobre o Projeto

Portal web da Rede Autoestima-se, uma organização dedicada ao fortalecimento da saúde mental de jovens e mulheres no Brasil. O site oferece acesso a atendimentos psicológicos online, recursos de saúde mental e informações sobre nossas iniciativas.

### 🎯 Principais Funcionalidades

- Solicitação de atendimento psicológico online
- Informações sobre programas e iniciativas
- Portal de transparência
- Sistema de doações
- Blog e recursos sobre saúde mental
- Área de voluntariado

## 🛠️ Tecnologias

- **Frontend**:
  - Next.js (Framework React)
  - TypeScript
  - Sass
- **Backend**:
  - Node.js
  - Nest.js

## 🗂️ Estrutura do Projeto

```
frontend/
├── public/
│   ├── icons/ ️         # Ícones acessíveis via URL
│   ├── images/         # Imagens gerais
│   ├── logos/ ️‍         # Logotipos da marca
│   ├── fonts/          # Arquivos de fontes
│   └── illustrations/  # Ilustrações
└── src/
    ├── app/
    │   ├── _breakpoints.scss  # Variáveis de breakpoints para design responsivo
    │   ├── _variables.scss    # Variáveis de cores, tipografia e outros estilos globais
    │   ├── globals.scss       # Estilos globais e reset CSS
    │   ├── layout.tsx         # Componente de layout principal da aplicação
    │   └── page.tsx           # Componente de página padrão
    ├── pages/
    │   ├── acolhimento/       # Página de acolhimento
    │   ├── doe/               # Página de doação
    │   ├── iniciativas/       # Página de iniciativas
    │   │   ├── atendimento-para-ativistas.tsx  # Componente da página de atendimento para ativistas
    │   │   └── styles.module.scss  # Estilos específicos para a página de iniciativas
    │   ├── o-que-fazemos/     # Página sobre o que fazemos
    │   ├── sobre-nos/         # Página sobre nós
    │   └── transparencia/ ️    # Página de transparência
    └── components/            # Componentes reutilizáveis
        ├── Banner/
        │   ├── Banner.tsx     # Componente de banner
        │   └── styles.module.scss  # Estilos específicos para o componente de banner
        ├── Button/            # Componente de botão
        ├── CardMedia/ 🃏      # Componente de card de midias sociais
        ├── Footer/ <footer>   # Componente de rodapé
        ├── Header/ HEADER     # Componente de cabeçalho
        ├── Navbar/            # Componente de barra de navegação
        ├── Slider/ ↔️          # Componente de slider
        └── SplitView/ ➗       # Componente de grid imagem e texto

```

## 📱 Páginas

1. **Início** (`/`)

   - Apresentação da organização
   - Chamadas para ação principais

2. **Sobre nós** (`/sobre`)

   - História
   - Missão e valores
   - Equipe

3. **O que fazemos** (`/servicos`)

   - Atendimento psicológico
   - Programas e iniciativas
   - Impacto social

4. **Acolhimento** (`/acolhimento`)

   - Processo de atendimento
   - Formulário de solicitação
   - FAQ

5. **Iniciativas** (`/iniciativas`)

   - Projetos ativos
   - Parcerias
   - Cases de sucesso

6. **Transparência** (`/transparencia`)

   - Relatórios financeiros
   - Prestação de contas
   - Documentos institucionais

7. **Doe** (`/doe`)
   - Opções de doação
   - Accountability
   - Impacto das doações

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**

```bash
git clone https://gitlab.com/rede-autoestima-se-grupo-de-ti1/new-website-autoestima-se.git
cd new-website-autoestima-se
```

2. **Instale as dependências**

```bash
npm install next -g
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Acesse o projeto**

```
http://localhost:3000
```

🤝 Guia de Colaboração - Comandos Principais

1. Configuração Inicial (Uma única vez)

```bash
 Clone o projeto após fazer fork
git clone https://gitlab.com/SEU-USUARIO/new-website-autoestima-se.git
```

# Entre na pasta do projeto

```cd new-website-autoestima-se
 # Adicione o repositório original como upstream
 bash
git remote add upstream https://gitlab.com/rede-autoestima-se-grupo-de-ti1/new-website-autoestima-se.git
```

2. Rotina Diária de Desenvolvimento

````bash
# 1. Atualize seu repositório
git checkout main
git pull upstream main ```

# 2. Crie uma branch para sua tarefa
``` bash
git checkout -b feature/nome-da-sua-tarefa ```

# 3. Faça suas alterações e commit
``` bash git add .
git commit -m "tipo: descrição curta da alteração" ```

# 4. Envie para seu fork
``` bash
git push origin feature/nome-da-sua-tarefa ```

3. Padrões de Commit
- Use estes prefixos:

- feat: nova funcionalidade
- fix: correção de bug
- docs: documentação
- style: formatação
- refactor: refatoração

4. Resolução de Conflitos
``` bash
# Atualize sua branch com a main
git checkout main
git pull upstream main
git checkout sua-branch
git merge main ```

# Após resolver conflitos
``` bash  git add .
git commit -m "fix: resolve conflitos"
git push origin sua-branch ```

5. Dicas Importantes

- Sempre crie uma nova branch para cada tarefa
- Faça commits frequentes e com mensagens claras
- Mantenha sua branch atualizada com a main
- Faça pull request quando a feature estiver pronta
- Peça review dos colegas antes de mergear

# Arquitetura Full-Stack: Rede Autoestima-se

## Visão Geral do Projeto
O projeto será dividido em dois diretórios principais:
- frontend/ - Aplicação Next.js
- backend/ - Aplicação NestJS

## Estrutura do Backend (NestJS)
````

backend/
├── src/
│ ├── config/ # Arquivos de configuração
│ │ ├── database.config.ts
│ │ └── supabase.config.ts
│ ├── modules/ # Módulos de funcionalidades
│ │ ├── auth/
│ │ │ ├── dto/
│ │ │ ├── entities/
│ │ │ ├── auth.controller.ts
│ │ │ ├── auth.service.ts
│ │ │ └── auth.module.ts
│ │ ├── appointments/
│ │ │ ├── dto/
│ │ │ ├── entities/
│ │ │ ├── appointments.controller.ts
│ │ │ ├── appointments.service.ts
│ │ │ └── appointments.module.ts
│ │ ├── users/
│ │ ├── donations/
│ │ └── reports/
│ ├── common/ # Recursos compartilhados
│ │ ├── decorators/
│ │ ├── filters/
│ │ ├── guards/
│ │ ├── interceptors/
│ │ └── pipes/
│ ├── interfaces/ # Interfaces TypeScript
│ └── utils/ # Funções utilitárias
├── test/ # Arquivos de teste
└── prisma/ # Schema e migrações do Prisma
├── schema.prisma
└── migrations/

````

## Schema do Banco de Dados Supabase

```sql
-- Tabela de usuários
create table public.users (
  id uuid references auth.users not null primary key,
  email text unique not null,
  full_name text,
  role text not null default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela de agendamentos
create table public.appointments (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) not null,
  therapist_id uuid references public.users(id) not null,
  status text not null default 'pending',
  date timestamp with time zone not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela de doações
create table public.donations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id),
  amount decimal not null,
  payment_status text not null default 'pending',
  payment_method text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela de relatórios
create table public.reports (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text not null,
  type text not null,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
````

## Endpoints da API

### Autenticação

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/me

### Agendamentos

- POST /api/appointments
- GET /api/appointments
- GET /api/appointments/:id
- PATCH /api/appointments/:id
- DELETE /api/appointments/:id

### Doações

- POST /api/donations
- GET /api/donations
- GET /api/donations/:id
- GET /api/donations/stats

### Usuários

- GET /api/users
- GET /api/users/:id
- PATCH /api/users/:id
- DELETE /api/users/:id

### Relatórios

- POST /api/reports
- GET /api/reports
- GET /api/reports/:id
- PATCH /api/reports/:id
- DELETE /api/reports/:id

## Implementação das Funcionalidades Principais

### Fluxo de Autenticação

1. Registro/login de usuário através do Supabase Auth
2. Gerenciamento de tokens JWT
3. Controle de acesso baseado em papéis
4. Rotas protegidas no frontend e backend

### Sistema de Agendamentos

1. Agendamento de consultas
2. Integração com calendário
3. Notificações por email
4. Gerenciamento de status (pendente, confirmado, concluído, cancelado)

### Sistema de Doações

1. Integração de pagamento (Stripe/PayPal)
2. Geração de recibos
3. Rastreamento de doações
4. Doações recorrentes

### Sistema de Relatórios

1. Relatórios financeiros
2. Métricas de impacto
3. Logs de atividade
4. Visualização de dados

## Configuração do Ambiente de Desenvolvimento

1. Configuração do Frontend

```bash
cd frontend
npm install
npm run dev
```

2. Configuração do Backend

```bash
cd backend
npm install
npm run start:dev
```

3. Configuração do Supabase

- Criar um novo projeto no Supabase
- Configurar as tabelas do banco de dados usando o schema fornecido
- Configurar variáveis de ambiente

```env
SUPABASE_URL=sua_url_supabase
SUPABASE_ANON_KEY=sua_chave_anonima_supabase
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_supabase
```

## Considerações de Segurança

1. Implementar limitação de taxa
2. Usar proteção CORS
3. Validação de entrada
4. Criptografia de dados
5. Registro de auditoria
6. Atualizações regulares de segurança

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- Email: organizacao@redeautoestimase.com
- Website: [redeautoestimase.com](https://redeautoestimase.com)
