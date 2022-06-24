import { kategori_makanan } from "@/sample_data/data_kategori_makanan"
export default function handler({query:{id}}, res) {
    const filtered = kategori_makanan.filter((kategori) => kategori.id === id)
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }else{
        // res.status(500);
        res.status(500).json({message:`kategori makanan dengan id = ${id} tidak ditemukan`})
    }
  
}
