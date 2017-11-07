$(document).ready(function()
{
  $('#searchUser').on('keyup',function (e)
  {
      let username = e.target.value;

      $.ajax({
        url: 'https://api.github.com/users/' + username ,
        data: {
                client_id:'fc4feb9498c2be9dc652',
                client_secret:'c7bf4294beb5e152fab12f3b4d14dba2cf7966be'
              }
      }).done(function(user)
      {
        $('#profile').html(user.name);
      });
  })
});