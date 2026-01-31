# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Binorama is a React web application for viewing and converting between numeral systems (binary, decimal, hexadecimal). Built with Vite, TypeScript, and Tailwind CSS.

## Commands

```bash
bun run dev      # Start dev server
bun run build    # Production build
bun run test     # Run all tests
bun run lint     # Lint src/
bun run compile  # TypeScript type check
```

Run a single test file:
```bash
bun run test src/shared/systems/base2.spec.ts
```

## Architecture

### Module Structure

- `src/shared/` - Framework-agnostic business logic and types
- `src/client/` - React UI components and styling

### Path Aliases

Configured in `tsconfig.app.json`:
- `@shared/*` → `./src/shared/*`
- `@client/*` → `./src/client/*`

### Numeral Systems

Core logic lives in `src/shared/systems/`. Each numeral system implements the `NumeralSystem` interface with: `type`, `radix`, `label`, `symbols`, `isValid()`, `convertTo()`.

Conversion utilities in `src/shared/systems/utils.ts` provide: `convert()`, `isValid()`, `getMatchSymbols()`.

### UI Components

Located in `src/client/modules/shell/components/`:
- `Shell` - Main layout container
- `Navigation` - Header/nav bar
- `BaseView` - Individual numeral system display (receives NumeralSystem object and position)

Components use CSS Modules for scoped styling.

## Code Conventions

- Format all files with Prettier
- Use single quotes for all TypeScript/JavaScript code
- Uses `neverthrow` for Result types in error handling
- Strict TypeScript with `noUnusedLocals` and `noUnusedParameters` enabled
- Test files use `.spec.ts` extension and live alongside source files
- Tests use `test.each()` for data-driven testing with constants from `__tests__/constants.ts`
- In tests, add a blank line before assertions
