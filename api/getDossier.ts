export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export async function getPDFDossiers(id: string) {
    try {
      const response = await fetch(`http://localhost:3001/dossier/getPDFDossiers/${id}`
        ,{ cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Error fetching dossiers: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("API Response Data: ", data);
      return data; // Return the fetched data
    } catch (error) {
      console.error("There was an error fetching the dossiers!", error);
      throw error; // Rethrow the error for further handling if needed
    }
  }