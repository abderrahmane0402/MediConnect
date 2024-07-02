import myAxios from '@/lib/axios';
import { json } from 'node:stream/consumers';

export const dynamic = 'force-dynamic'

export async function listMateriel(
    // token: string
) {
  try {
    const res = await myAxios.get("/materiel/get"
  //     , {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  );
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("Error: Status is not 200");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
  }
  