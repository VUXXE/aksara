# Aksara B2B2B SaaS Implementation Plan

## Vision
A Multivendor B2B2B SaaS platform designed for Agencies to manage Sub-accounts. Features include a full Website Builder, CRM, Project Management, and automated AI workflows.

## User Review Required
> [!IMPORTANT]
> **Architecture Change**: Moving to a strict Agency -> Sub-account hierarchy. All current dashboard routes will be moved under `/subaccount/[id]/...`.
> **Stripe Integration**: UI mocks will be created for Plans and Add-ons. Real integration requires backend setup later.

## Phase 1: Landing Page Redesign (Immediate)
- [ ] **Hero Section**: Redesign with "Spotlight" effect, high-contrast typography, and "Build. Market. Scale." tagline.
- [ ] **Visuals**: Improve background gradients to be subtle yet premium (Aurora effect).
- [x] **Components**: Updated Navbar, Features, and AI Demo for dark/light mode.

## Phase 1.5: Monorepo Migration (New)
- [ ] **Structure**: Initialize Turborepo and restructure folders (`apps/web`, `packages/ui`, `packages/database`).
- [ ] **Migration**: Move current Next.js app to `apps/web`.
- [ ] **Shared Packages**: Extract UI components to `packages/ui` and database logic to `packages/database`.

## Phase 1.6: Backend Setup
- [ ] **Database**: Set up Supabase project and Postgres database.
- [ ] **ORM**: Install and configure Prisma.
- [ ] **Schema**: Define `Agency`, `SubAccount`, `User`, `Permissions` models.
- [ ] **Auth**: Integrate Supabase Auth (Middleware & SSR).

## Phase 2: Architecture & Navigation (B2B2B Expansion)
### [NEW] Agency & Sub-account Structure
- **Route Restructuring**: Move current `/dashboard` to `/subaccount` context.
- **Agency Portal**: New `/agency` routes for managing sub-accounts and billing.
- **Context Switching**: Update Sidebar to toggle between Agency Admin and specific Sub-account views.

## Phase 2: Agency Features
### [NEW] Agency Dashboard
- Aggregated metrics (Total Revenue, Active Clients).
- Sub-account management table (Create, Delete, Login As).
### [NEW] Billing & Plans
- Stripe Subscription UI (Plans: Starter, Agency, Enterprise).
- Add-on Marketplace UI.

## Phase 3: Core Platform Enhancements
### [MODIFY] Project Management
- Refactor CRM Kanban into a generic `KanbanBoard` component.
- Implement **Project Management** module with Tasks, Swimlanes, and Assignees.
### [NEW] Media Storage
- File Manager UI for uploading and organizing assets.

## Phase 4: Advanced Website Builder
### [MODIFY] Builder UI
- Implement "Drag and Drop" simulation.
- Sidebar with draggable components (Hero, Features, Testimonials).
- Interactive Canvas for page assembly.

## Phase 5: Visuals & Polish
### [NEW] Charts & Analytics
- Integrate `recharts` for detailed Agency and Sub-account metrics.
### [MODIFY] Theme System
- Verify Light/Dark mode compatibility across all new components.
- Add Notification Center dropdown.

## Verification Plan
### Automated Tests
- Verify route navigation between Agency and Sub-account views.
### Manual Verification
- Test "Login as Sub-account" flow.
- Verify Drag and Drop interactions in Builder.
- Check Light/Dark mode toggle on all pages.
