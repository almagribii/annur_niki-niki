import React, { useState, useEffect } from "react";

// Import the function to read markdown/json files.
// We'll use a placeholder for now, as the actual implementation depends on your build process.
// For local development, we can mock the data.
const getKegiatanData = async () => {
  // In a real app, you would fetch the list of files and read each one.
  // For this test, we'll just return some hardcoded data.
  return [
    {
      judul: "Kajian Subuh",
      tanggal: "2025-08-27T05:00:00.000Z",
      waktu: "05:00 WIB",
      deskripsi: "Kajian rutin setiap hari Jumat. Membahas Fiqh Islam.",
    },
    {
      judul: "Pengajian Maghrib",
      tanggal: "2025-08-28T18:30:00.000Z",
      waktu: "18:30 WIB",
      deskripsi: "Pengajian setelah Maghrib bersama Ust. Fuad.",
    },
  ];
};

const KegiatanList = () => {
  const [kegiatan, setKegiatan] = useState<any[]>([]);

  useEffect(() => {
    const fetchKegiatan = async () => {
      const data = await getKegiatanData();
      setKegiatan(data);
    };
    fetchKegiatan();
  }, []);

  return (
    <div>
      <h2>Jadwal Kegiatan Masjid</h2>
      {kegiatan.map((item, index) => (
        <div
          key={index}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h3>{item.judul}</h3>
          <p>
            <strong>Tanggal:</strong>{" "}
            {new Date(item.tanggal).toLocaleDateString()}
          </p>
          <p>
            <strong>Waktu:</strong> {item.waktu}
          </p>
          <p>{item.deskripsi}</p>
        </div>
      ))}
    </div>
  );
};

export default KegiatanList;
