import DossierMedicalPDF from "@/components/pdfs/DossierMedicalPDF";
import { pdf } from "@react-pdf/renderer";



export default function Page(params :string) {

    const handleOpenPDF = async () => {
        const blob = await pdf(<DossierMedicalPDF />).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      };
    return(
        <DossierMedicalPDF />
    );
}
