# 🐳 Documentación de Containerización - CD Pipeline

## Descripción General

Este documento describe el workflow de **containerización automatizada** del proyecto Movinin-Plus. El workflow construye imágenes Docker para los tres componentes principales (frontend, backend, admin) y las publica automáticamente en **GitHub Container Registry (GHCR)**.

---

## 📋 Workflow: `containerize.yml`

### Ubicación
`.github/workflows/containerize.yml`

### Propósito
- 🔨 Construir imágenes Docker para frontend, backend y admin
- 📤 Publicar imágenes en GitHub Container Registry (GHCR)
- 🏷️ Etiquetar imágenes con SHA del commit y `latest`

---

## ⚙️ Configuración

### Triggers (Cuándo se ejecuta)

```yaml
on:
  push:
    branches: [ main ]
  workflow_dispatch:
    inputs:
      name:
        type: choice
        description: environment for the container image
        options:
          - development
          - staging
          - production
```

**Se ejecuta en:**
- ✅ Push a la rama `main`
- ✅ Ejecución manual (workflow_dispatch) con opción de seleccionar environment

### Permisos

```yaml
permissions:
  contents: read
  packages: write
```

- `contents: read` - Leer el código del repositorio
- `packages: write` - Escribir paquetes en GHCR

---

## 🔑 Cambios Implementados

### Antes (Comentado)
```yaml
# Uncomment this block if we want to push to GHCR
# - name: login-ghcr
#   run: echo ${{ secrets.GITHUB_TOKEN }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin

# Uncomment these lines if we want to push images to GHCR
# docker push $REPO_PREFIX_LOWER:${{ github.sha }}
# docker tag $REPO_PREFIX_LOWER:${{ github.sha }} $REPO_PREFIX_LOWER:latest
# docker push $REPO_PREFIX_LOWER:latest
```

**Problema:** El push a GHCR estaba desactivado, las imágenes solo se construían localmente.

### Después (Activado)
```yaml
- name: Login to GitHub Container Registry
  uses: docker/login-action@v4
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}

- name: build-and-push-docker-image
  run: |
    REPO_PREFIX_LOWER=$(echo "$REPO_PREFIX" | tr '[:upper:]' '[:lower:]')
    
    docker build \
      -t $REPO_PREFIX_LOWER:${{ github.sha }} \
      -f ${{ matrix.component }}/Dockerfile .
    
    docker push $REPO_PREFIX_LOWER:${{ github.sha }}
    
    docker tag \
      $REPO_PREFIX_LOWER:${{ github.sha }} \
      $REPO_PREFIX_LOWER:latest
    
    docker push $REPO_PREFIX_LOWER:latest
```

**Beneficio:** Las imágenes ahora se construyen Y se publican automáticamente en GHCR.

---

## 🏗️ Componentes que se Containerizar

El workflow construye imágenes para 3 componentes (matrix):

| Componente | Dockerfile | Propósito |
|-----------|-----------|----------|
| **frontend** | `frontend/Dockerfile` | Aplicación React/Vite |
| **backend** | `backend/Dockerfile` | Servidor Node.js/Express |
| **admin** | `admin/Dockerfile` | Panel administrativo |

---

## 🏷️ Etiquetado de Imágenes

Las imágenes se publican con **dos tags**:

### 1. Tag por SHA del Commit
```
ghcr.io/movidinteam/movinin-plus/[environment]/[component]:[COMMIT_SHA]
```
**Ejemplo:**
```
ghcr.io/movidinteam/movinin-plus/development/frontend:abc123def456
```

**Ventaja:** Trazabilidad completa a qué commit corresponde cada imagen.

### 2. Tag `latest`
```
ghcr.io/movidinteam/movinin-plus/[environment]/[component]:latest
```
**Ejemplo:**
```
ghcr.io/movidinteam/movinin-plus/development/frontend:latest
```

**Ventaja:** Facilita deployments siempre con la última versión.

---

## 🌍 Ambientes

El workflow soporta 3 ambientes diferentes (seleccionables en manual trigger):

| Ambiente | Uso | Cuándo |
|----------|-----|--------|
| **development** | Desarrollo local/staging | Default en push a main |
| **staging** | Pre-producción | Manual selection |
| **production** | Producción | Manual selection |

```yaml
REPO_PREFIX: ghcr.io/${{ github.repository }}/${{ github.event.inputs.name || 'development' }}/${{ matrix.component }}
```

---

## 🔐 Autenticación GHCR

### Token utilizado
```yaml
password: ${{ secrets.GITHUB_TOKEN }}
```

**Notas:**
- Usa el `GITHUB_TOKEN` automático (no requiere configuración manual)
- Permisos: Incluyen `packages: write` definido arriba
- Válido solo durante la ejecución del workflow

### Variables de Entorno Docker
```yaml
- name: create-env-files
  run: |
    cp ${{ matrix.component }}/.env.docker.example ${{ matrix.component }}/.env.docker
```

Cada componente debe tener un archivo `.env.docker.example` en su raíz.

---

## 📊 Flujo de Ejecución

```
┌─────────────────────────────────────────┐
│ Push a main o Workflow Dispatch         │
└──────────────┬──────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│ Checkout código                          │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│ Para cada componente (matrix):           │
│  - frontend, backend, admin              │
└──────────────┬───────────────────────────┘
               │
               ├─────────────────────────────────────┐
               │                                     │
               ▼                                     ▼
    ┌──────────────────────┐      ┌──────────────────────┐
    │ Copy .env file       │      │ Login to GHCR        │
    │ (.example -> .docker)│      │ (Docker login)       │
    └──────────────────────┘      └──────────────────────┘
               │                                     │
               └─────────────┬───────────────────────┘
                             │
                             ▼
                ┌──────────────────────────────┐
                │ Build Docker image           │
                │ (tag: commit SHA)            │
                └──────────────┬───────────────┘
                               │
                               ▼
                ┌──────────────────────────────┐
                │ Push to GHCR                 │
                │ (con tag SHA)                │
                └──────────────┬───────────────┘
                               │
                               ▼
                ┌──────────────────────────────┐
                │ Tag como 'latest'            │
                │ y push a GHCR                │
                └──────────────┬───────────────┘
                               │
                               ▼
                     ✅ Imagen disponible
```

---

## 🚀 Cómo Usar

### Opción 1: Push Automático a Main
```bash
git push origin main
# El workflow se ejecuta automáticamente
# Las imágenes aparecen en GHCR con ambiente 'development'
```

### Opción 2: Trigger Manual (Select Environment)
1. Ve a **Actions** en GitHub
2. Selecciona **containerize**
3. Click en **Run workflow**
4. Selecciona el ambiente (development/staging/production)
5. Click en **Run workflow**

---

## 📦 Acceder a las Imágenes

### Ver imágenes publicadas
```bash
# CLI: Lists packages en el repositorio
gh api repos/MovidinTeam/Movinin-Plus/packages
```

### Pull una imagen
```bash
docker pull ghcr.io/movidinteam/movinin-plus/development/frontend:latest
docker pull ghcr.io/movidinteam/movinin-plus/development/backend:latest
docker pull ghcr.io/movidinteam/movinin-plus/development/admin:latest
```

### Usar en docker-compose
```yaml
services:
  frontend:
    image: ghcr.io/movidinteam/movinin-plus/development/frontend:latest
    ports:
      - "3000:3000"
  
  backend:
    image: ghcr.io/movidinteam/movinin-plus/development/backend:latest
    ports:
      - "5000:5000"
  
  admin:
    image: ghcr.io/movidinteam/movinin-plus/development/admin:latest
    ports:
      - "3001:3001"
```

---

## ⚠️ Requisitos Previos

1. **Archivos Dockerfile** en cada directorio:
   - `frontend/Dockerfile`
   - `backend/Dockerfile`
   - `admin/Dockerfile`

2. **Archivos .env de ejemplo**:
   - `frontend/.env.docker.example`
   - `backend/.env.docker.example`
   - `admin/.env.docker.example`

3. **Permisos GHCR**:
   - El token debe tener permisos de escritura (incluido por defecto)

---

## 🔧 Troubleshooting

### ❌ Error: "failed to push image"
**Causa:** Token de autenticación inválido o sin permisos
**Solución:** Verifica que `packages: write` esté en permisos

### ❌ Error: "Dockerfile not found"
**Causa:** El Dockerfile no existe en la ruta especificada
**Solución:** Verifica que `componente/Dockerfile` existe

### ❌ Error: ".env.docker.example not found"
**Causa:** Archivo de configuración faltante
**Solución:** Crea `componente/.env.docker.example` con las variables necesarias

---

## 📚 Referencias

- [GitHub Container Registry Documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [docker/login-action](https://github.com/docker/login-action) - Action oficial de Docker para autenticación en registros
- [docker/build-push-action](https://github.com/docker/build-push-action) - Action oficial de Docker para build y push de imágenes
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Última actualización:** 10/07/2026  
**Autor:** Christian Alex Yana  
**Estado:** ✅ Activo
