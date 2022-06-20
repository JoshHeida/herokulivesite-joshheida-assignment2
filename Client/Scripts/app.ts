//app.ts josh heida 300644912 June 20 2022
(function()
{
    function Start()
    {
        console.log('App Started');

        $("a.delete").on("click",function(event)
        {
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                location.href="/buisness-contacts";
            }
        })
    }
    window.addEventListener("load",Start);
})();