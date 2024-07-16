export const dynamic = 'force-dynamic'

export async function DeleteDossiers(id: string , data : any) {
    try {
      const response = await fetch(`http://localhost:3001/visite/add/${id}`,{ cache: 'no-store', method: 'DELETE' }) ;
      if (!response.ok) {
        throw new Error(`Error fetching dossiers: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("aaaaa"+data);
      return data; 
    } catch (error) {
      console.error("There was an error fetching the dossiers!", error);
      throw error; 
    }
  }