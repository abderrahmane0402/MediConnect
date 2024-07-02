export async function getUsers() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      //   Authorization: "Bearer ....",
    },
  }

  const response = await fetch(
    "http://localhost:3001/user/getUsersSimplified",
    options
  )

  const data = await response.json()

  return data
}

export async function addUser(body: any) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }

  const response = await fetch("http://localhost:3001/user/addUser", options)

  if (!response.ok) {
    throw new Error("Failed to add user")
  }

  const data = await response.json()

  return data
}

export async function deleteUser(id: string) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const response = await fetch(
    `http://localhost:3001/user/deleteUser/${id}`,
    options
  )

  if (!response.ok) {
    throw new Error("Failed to delete user")
  }

  const data = await response.json()

  return data
}

export async function getUser(id: string) {
  const response = await fetch(`http://localhost:3001/user/getUser/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to get user")
  }

  const data = await response.json()

  return data
}

export async function updateUser(user:any) {
  const options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user.data),
  }

  const response = await fetch(
    `http://localhost:3001/user/updateUser/${user.id}`,
    options
  )

  if (!response.ok) {
    throw new Error("Failed to get user")
  }

  const data = await response.json()

  return data
}
