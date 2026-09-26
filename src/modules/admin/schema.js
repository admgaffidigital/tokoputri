/**
 * ============================================================
 * MODUL ADMIN: SKEMA FORM BUILDER (CRUD SCHEMA)
 * Mendefinisikan field input dinamis untuk produk, varian,
 * warna, kategori, brand, bank, customer member, reward,
 * banner slider, dan voucher diskon.
 * ============================================================
 */

export const aF = {
    products: [
        {key:'name', label:'Nama Produk', type:'text'}, {key:'sku', label:'Barcode / SKU (Kosongkan utk Auto)', type:'text'},
        {key:'price', label:'Harga Jual Promo (Rp)', type:'number'}, 
        {key:'priceNormal', label:'Harga Coret / Normal (Rp) - Opsional', type:'number'}, 
        {key:'hpp', label:'Harga Modal / HPP (Rp) — Hanya Seller', type:'number'},
        {key:'poin', label:'Poin Member (per unit terjual, Produk Tanpa Varian)', type:'number'},
        {key:'stock', label:'Stok Awal (Qty) — Aktif jika Manajemen Stok ON', type:'number'},
        {key:'unit', label:'Satuan Dasar (Cth: Pcs, Kg)', type:'text'},
        {key:'poTime', label:'Estimasi Pre-Order (Opsional)', type:'text'}, 
        {key:'video', label:'Link Video YouTube (Opsional)', type:'text'},
        {key:'img', label:'URL Gambar', type:'text'},
        {key:'category', label:'Kategori', type:'dynamic_select_category'}, {key:'subCategory', label:'Jenis / Sub-Kategori (Cth: Cat Tembok, Pipa PVC, Power Tools)', type:'text'}, {key:'brand', label:'Merek', type:'dynamic_select_brand'},
        {key:'supplierId', label:'Supplier / Rekanan Pemasok', type:'dynamic_select_supplier'},
        {key:'tag', label:'Label/Tag', type:'text'}, {key:'isActive', label:'Status', type:'select', options:[{val:'true',text:'Tersedia'},{val:'false',text:'Habis'}]},
        {key:'desc', label:'Deskripsi Lengkap', type:'richtext'}, {key:'specTable', label:'Tabel Spesifikasi (Opsional)', type:'spec_table_builder'}, {key:'wholesale', label:'Grosir', type:'wholesale_builder'}, {key:'variants', label:'Varian', type:'variants_builder'}
    ],
    suppliers: [
        {key:'code', label:'Kode Supplier (Cth: SUP-001)', type:'text'},
        {key:'name', label:'Nama Perusahaan / Supplier', type:'text'},
        {key:'picName', label:'Nama Sales / Kontak PIC', type:'text'},
        {key:'phone', label:'Nomor WhatsApp / Telp Sales', type:'text'},
        {key:'city', label:'Kota / Wilayah', type:'text'},
        {key:'address', label:'Alamat Kantor / Gudang', type:'textarea'},
        {key:'bankName', label:'Nama Bank Rekening', type:'text'},
        {key:'bankAccount', label:'Nomor Rekening', type:'text'},
        {key:'bankHolder', label:'Atas Nama Pemilik Rekening', type:'text'},
        {key:'defaultTerm', label:'Termin / Cara Bayar Default', type:'select', options:[{val:'cash',text:'Cash / Tunai / Transfer'},{val:'tempo_7',text:'Tempo 7 Hari'},{val:'tempo_14',text:'Tempo 14 Hari'},{val:'tempo_30',text:'Tempo 30 Hari'},{val:'tempo_60',text:'Tempo 60 Hari'},{val:'konsinyasi',text:'Konsinyasi / Barang Titipan'}]},
        {key:'notes', label:'Catatan / Jadwal Rutin Kunjungan Sales', type:'textarea'}
    ],
    colors: [
        {key:'name', label:'Nama Warna', type:'text'},
        {key:'hex', label:'Kode Warna (Hex) - Opsional', type:'text'},
        {key:'catalog', label:'Katalog / Merek (Contoh: No Drop)', type:'text'}
    ],
    categories: [{key:'name', label:'Kategori', type:'text'}, {key:'img', label:'URL Ikon', type:'text'}],
    brands: [{key:'name', label:'Nama Merek', type:'text'}, {key:'img', label:'URL Logo Merek', type:'text'}],
    banks: [{key:'bankName', label:'Nama Bank', type:'text'}, {key:'bankAccount', label:'No. Rekening', type:'text'}, {key:'bankOwner', label:'Atas Nama', type:'text'}],
    customers: [
        {key:'name', label:'Nama Lengkap', type:'text'},
        {key:'phone', label:'No. WhatsApp Aktif (Cth: 081234567890)', type:'text'},
        {key:'points', label:'Poin Member (Penyesuaian Manual)', type:'number'}
    ],
    rewards: [
        {key:'name', label:'Nama Hadiah', type:'text'},
        {key:'img', label:'URL Gambar Hadiah', type:'text'},
        {key:'pointsCost', label:'Poin yang Dibutuhkan', type:'number'},
        {key:'stock', label:'Stok Hadiah Tersedia', type:'number'},
        {key:'isActive', label:'Status', type:'select', options:[{val:'true',text:'Aktif (Bisa Ditukar)'},{val:'false',text:'Nonaktif'}]}
    ],
    banners: [
        {key:'title',    label:'Judul Banner',    type:'text'},
        {key:'desc',     label:'Deskripsi Pendek (Opsional)', type:'textarea'},
        {key:'type',     label:'Tipe Banner', type:'select', options:[{val:'image',text:'🖼 Gambar (Default)'},{val:'video',text:'🎬 Video (Drive / YouTube / MP4)'}]},
        {key:'img',      label:'URL Gambar (jika Tipe = Gambar)', type:'text'},
        {key:'videoUrl', label:'URL / Link Video (Google Drive, YouTube, atau MP4)', type:'text'},
        {key:'link',     label:'Link Tujuan Klik (Opsional)', type:'text'}
    ],
    vouchers: [
        {key:'code', label:'Kode Voucher (Cth: MERDEKA50)', type:'text'}, 
        {key:'type', label:'Jenis Diskon', type:'select', options:[{val:'percent',text:'Potongan Persen (%)'},{val:'flat',text:'Potongan Rupiah (Rp)'},{val:'shipping_free',text:'Gratis Ongkir (100%)'},{val:'shipping_flat',text:'Potongan Ongkir (Rp)'}]}, 
        {key:'value', label:'Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)', type:'number'},
        {key:'minPurchase', label:'Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada', type:'number'},
        {key:'maxDiscount', label:'Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen', type:'number'},
        {key:'targetProduct', label:'Target Produk Spesifik (Pilih jika berlaku khusus)', type:'dynamic_select_products'},
        {key:'isShow', label:'Tampilkan di Beranda?', type:'select', options:[{val:'true',text:'Ya, Tampilkan Promo'},{val:'false',text:'Sembunyikan'}]}
    ]
};

window.aF = aF;
