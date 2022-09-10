export async function Login(data = { password: string, username: string }) {
  const response = await fetch(
    '/login?username=' + data.username + '&password=' + data.password,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
      },
      body: '',
    },
  );
  return response.json();
}
