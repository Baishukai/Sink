import type { H3Event } from 'h3'

export function useWAE(event: H3Event, query: string) {
  const runtimeConfig = useRuntimeConfig(event)
  const cfEnv = event.context.cloudflare?.env as Record<string, string> | undefined
  const cfAccountId = cfEnv?.NUXT_CF_ACCOUNT_ID || cfEnv?.CF_ACCOUNT_ID || runtimeConfig.cfAccountId
  const cfApiToken = cfEnv?.NUXT_CF_API_TOKEN || cfEnv?.CF_API_TOKEN || runtimeConfig.cfApiToken
  console.info('useWAE', query)
  return $fetch(`https://api.cloudflare.com/client/v4/accounts/${cfAccountId}/analytics_engine/sql`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${cfApiToken}`,
    },
    body: query,
    retry: 1,
    retryDelay: 100, // ms
  })
}
