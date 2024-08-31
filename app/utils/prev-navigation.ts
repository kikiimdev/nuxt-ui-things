export const prevNavigation = () => {
    if (import.meta.server) return

    const router = useRouter()
    window.history.length > 1 ? router.back() : router.push('/app')
}