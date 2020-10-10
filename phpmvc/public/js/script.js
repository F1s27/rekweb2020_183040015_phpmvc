$( function() {

    $('.tombolTambahData').on('click', function(){

        $('#judulModal').html('Add Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Add Data');
        $('.modal-body form').attr('action', 'https://localhost/phpmvc/public/mahasiswa/ubah');

    });
    
    
    $('.tampilModalUbah').on('click', function(){

        $('#judulModal').html('Edit Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Edit Data');

        const id = $(this).data('id');
        
        $.ajax({
            url:'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data){
                
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });

});