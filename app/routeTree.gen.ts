/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TreningsplanImport } from './routes/treningsplan'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TreningsplanRoute = TreningsplanImport.update({
  id: '/treningsplan',
  path: '/treningsplan',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/treningsplan': {
      id: '/treningsplan'
      path: '/treningsplan'
      fullPath: '/treningsplan'
      preLoaderRoute: typeof TreningsplanImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/treningsplan': typeof TreningsplanRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/treningsplan': typeof TreningsplanRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/treningsplan': typeof TreningsplanRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/treningsplan'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/treningsplan'
  id: '__root__' | '/' | '/treningsplan'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TreningsplanRoute: typeof TreningsplanRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TreningsplanRoute: TreningsplanRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/treningsplan"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/treningsplan": {
      "filePath": "treningsplan.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
