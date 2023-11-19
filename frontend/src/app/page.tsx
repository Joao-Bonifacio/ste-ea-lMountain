import auth from "@hooks/auth"

export default async function SwitchPage() {
  const autenticate = await auth()
  console.log(autenticate)

  return <></>
}