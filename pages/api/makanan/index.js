import { kategori_makanan } from "@/sample_data/data_kategori_makanan"
export default function handler(req, res) {
  res.status(200).json(kategori_makanan)
}
