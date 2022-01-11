export default {
  // Envia as informações do usuario para o E-mail da LTDeveloper
  sendEmail: async (name: string, email: string, message: string) => {
    let data = `name=${name}&email=${email}&message=${message}`;

    let req = await fetch('https://albicod.com/api_ltdeveloper/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: data
    })

    let json = await req.json();

    return json;
  }
}