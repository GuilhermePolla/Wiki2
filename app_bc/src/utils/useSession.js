export default async function useSession() {
  // const session = await getIronSession(cookies(), ironOptions);
  async function fetchSession() {
    const response = await fetch("http://localhost:3000/sessions");
    const session = await response.json();
    return session;
  }
  return fetchSession();
}
