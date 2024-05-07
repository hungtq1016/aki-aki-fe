import { hasPermission } from '@/core/services/hooks/usePermission'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export default async function hasAdminPermission(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const data = await hasPermission(String(to.name));
    if (data) return next();
    next("/oauth2")
}